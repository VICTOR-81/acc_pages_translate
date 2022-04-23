document.addEventListener('DOMContentLoaded', function () {
	function updateArticles() {
		var articles_tabs = document.querySelector('.categoryofarticles__tabs'),
			articles_container = document.querySelector('.categoryofarticles__articles '),
			articles_pagination = document.querySelector('.categoryofarticles__pagination'),
			articles_by_categories = {};

		if (!localStorage.getItem('cached_articles')) {
			fetch('data.json')
				.then((response) => {
					return response.json();
				})
				.then((data) => {
					localStorage.setItem('cached_articles', JSON.stringify(data.channel.item));
				});
		}

		var articles_list = JSON.parse(localStorage.getItem('cached_articles'));
		var tabs = [];

		console.log(articles_list[0]);
		articles_list.forEach((article) => {
			var category;
			for (let i = 0; i < article.category.length; i++) {
				if (article.category[i]._domain === 'category') {
					category = article.category[i].__cdata;
				}
			}
			if (!tabs.includes(category)) {
				tabs.push(category);
			}
		});

		articles_tabs.innerHTML = '';
		for (let i = 0; i < tabs.length; i++) {
			articles_tabs.innerHTML += `<div data-cat="cat${i}" class="categoryofarticles__tabs-item">${tabs[i]}</div>`;
			var cat = 'cat' + i;
			articles_by_categories[cat] = { name: tabs[i], items: [] };
		}

		articles_list.forEach((article) => {
			for (let i = 0; i < Object.keys(articles_by_categories).length; i++) {
				var curr_cat = articles_by_categories[Object.keys(articles_by_categories)[i]];
				// console.log();
				var article_category;
				for (let i = 0; i < article.category.length; i++) {
					if (article.category[i]._domain === 'category') {
						article_category = article.category[i].__cdata;
					}
				}

				if (curr_cat.name === article_category) {
					curr_cat.items.push(`
                        <div class="categoryofarticles__articles-item">
                            <div class="categoryofarticles__articles-item__img">
                                <div class="loader"></div>
                            </div>
                            <div class="categoryofarticles__articles-item__title text-hover">
                                <a href="${article.link}">${article.title.__cdata} </a>
                            </div>
                            <div class="categoryofarticles__articles-item__info">
                                <div class="banner__articles-author">
                                    <div class="author__name">${article.creator.__cdata}</div>
                                </div>
                                <div class="banner__articles-info">
                                    <div class="info__date">${article.post_date.__cdata.split(' ')[0]}</div>
                                    <div class="info__view">
                                        <img src="images/icons/view.svg" alt="">
                                        1056
                                    </div>
                                </div>
                            </div>
                        </div>
                    `);
				}
			}
		});

		var current_category_articles;

		articles_tabs.addEventListener('click', function (e) {
			if (e.target.classList.contains('categoryofarticles__tabs-item') && e.target.dataset.cat) {
				// вкладки
				for (let i = 0; i < articles_tabs.children.length; i++) {
					articles_tabs.children[i].classList.remove('active');
				}
				e.target.classList.add('active');

				// вывод пагинции

				var pagination_length = Math.ceil(articles_by_categories[e.target.dataset.cat].items.length / 6);

				articles_pagination.innerHTML = '';

				var range_placer = 1;
				for (let i = 1; i < pagination_length + 1; i++) {
					articles_pagination.innerHTML += `<a href="#${range_placer}-${range_placer + 5}" class="${i === 1 ? 'active' : ''}">${i}</a>`;
					range_placer += 6;
				}

				console.log(pagination_length);
				// вывод статей когда жмем на таб
				articles_container.innerHTML = '';
				for (let i = 0; i < 6; i++) {
					articles_container.innerHTML += articles_by_categories[e.target.dataset.cat].items[i];
				}
				current_category_articles = articles_by_categories[e.target.dataset.cat].items;
				loadImages();
			}
		});
		// console.log(articles_by_categories);

		articles_pagination.addEventListener('click', function (e) {
			if (e.target.tagName === 'A') {
				e.preventDefault();
				var bullet = e.target;

				var current_range = bullet.getAttribute('href');

				var start = current_range.split('-')[0].split('#')[1];
				var end = current_range.split('-')[1];

				articles_container.innerHTML = '';
				for (let i = start - 1; i < end; i++) {
					if (current_category_articles[i] !== undefined) {
						var element_selector = document.createElement('div');
						element_selector.innerHTML = current_category_articles[i];

						articles_container.appendChild(element_selector);
					}
				}
				for (let i = 0; i < articles_pagination.children.length; i++) {
					articles_pagination.children[i].classList.remove('active');
				}
				e.target.classList.add('active');
				loadImages();
			}
		});

		function loadImages() {
			for (let i = 0; i < articles_container.children.length; i++) {
				fetch('scripts/articles_images.php', {
					method: 'POST',
					body: JSON.stringify({ url: articles_container.children[i].querySelector('a').href }),
				})
					.then((res) => {
						return res.text();
					})
					.then((data) => {
						var blank = document.createElement('div');
						blank.innerHTML = data;
						var replacer = blank.querySelector('.post img');

						articles_container.children[i].querySelector('.categoryofarticles__articles-item__img').innerHTML = `<img src="${
							replacer.dataset.src ? replacer.dataset.src : replacer.src
						}" alt="${replacer.alt}" />`;
					});
			}
		}
		articles_tabs.children[0].click();
	}
	updateArticles();
});
