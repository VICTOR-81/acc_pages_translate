document.addEventListener('DOMContentLoaded', function () {
	var latest = document.querySelector('.newarticles__firstarticle');
	var small_articles = document.querySelector('.newarticles__secondarticle-wrapper');

	if (!localStorage.getItem('cached_articles')) {
		fetch('data.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				localStorage.setItem('cached_articles', JSON.stringify(data.channel.item));
			});
	}

	var article_list = JSON.parse(localStorage.getItem('cached_articles'));

	// находим новейшие статьи

	console.log('2022-03-01' < '2022-03-02');

	var latest_array = [];

	for (let i = 0; i < article_list.length; i++) {
		var current_article = article_list[i];
		if (latest_array.length < 5) {
			latest_array.push(current_article);
		} else {
			var replacer = false;
			latest_array
				.sort(function (a, b) {
					var keyA = new Date(a.post_modified.__cdata),
						keyB = new Date(b.post_modified.__cdata);
					if (keyA < keyB) return -1;
					if (keyA > keyB) return 1;
					return 0;
				})
				.reverse();
			for (let i = 0; i < latest_array.length; i++) {
				if (latest_array[i].post_modified.__cdata < current_article.post_modified.__cdata) {
					replacer = current_article;
					break;
				}
			}
			if (replacer) {
				latest_array.pop();
				latest_array.push(replacer);
			}
		}
	}

	latest_array
		.sort(function (a, b) {
			var keyA = new Date(a.post_modified.__cdata),
				keyB = new Date(b.post_modified.__cdata);
			if (keyA < keyB) return -1;
			if (keyA > keyB) return 1;
			return 0;
		})
		.reverse();

	latest.innerHTML = '';
	latest.innerHTML = `
        
            <div class="newarticles__firstarticle-img">
                <div class="loader" ></div>
            </div>
            <div class="newarticles__firstarticle-title text-hover">
                <a href="${latest_array[0].link}"> ${latest_array[0].title.__cdata}</a>
            </div>
            <div class="newarticles__firstarticle-info">
                <div class="banner__articles-author">
                    <div class="author__name">${latest_array[0].creator.__cdata}</div>
                </div>
                <div class="banner__articles-info">
                    <div class="info__date">${moment(latest_array[0].post_modified.__cdata).locale('ru').format('DD-MMMM-YYYY').split('-').join(' ')}</div>
                </div>
            </div>
            
        `;
	fetch('scripts/articles_images.php', { method: 'POST', body: JSON.stringify({ url: latest_array[0].link }) })
		.then((res) => {
			return res.text();
		})
		.then((data) => {
			var el = document.createElement('div');
			el.innerHTML = data;
			var image = el.querySelector('.wp-post-image');
			console.log(el, data);
			document.querySelector('.newarticles__firstarticle-img').innerHTML = `<img src="${image.dataset.src}" alt="${image.alt}" />`;
		});
	small_articles.innerHTML = '';
	for (let i = 1; i < latest_array.length; i++) {
		small_articles.innerHTML += `
            <div class="newarticles__secondarticle-item">
                <div class="newarticles__secondarticle-item-title text-hover">
                    <a href="${latest_array[i].link}">${latest_array[i].title.__cdata} </a>
                </div>
                <div class="newarticles__secondarticle-item-info">
                    <div class="banner__articles-author">
                        <div class="author__name">${latest_array[i].creator.__cdata}</div>
                    </div>
                    <div class="banner__articles-info">
                        <div class="info__date">${moment(latest_array[i].post_modified.__cdata).locale('ru').format('DD-MMMM-YYYY').split('-').join(' ')}</div>
                    </div>
                </div>
            </div>
        `;
	}
});
