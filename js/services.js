document.addEventListener('DOMContentLoaded', function () {
	const service_tab = document.querySelector('ul.service_filter');
	const service_content_box = document.querySelectorAll('.services_box');

	service_tab.addEventListener('click', function (e) {
		if (e.target.classList.contains('service_filter-item')) {
			for (let i = 0; i < service_content_box.length; i++) {
				service_content_box[i].classList.remove('service_box-active');
				service_content_box[i].classList.remove('service_box-active-visible');
			}
			for (let i = 0; i < service_tab.children.length; i++) {
				service_tab.children[i].classList.remove('active');
			}
			service_content_box[+e.target.dataset.box].classList.add('service_box-active');
			service_content_box[+e.target.dataset.box].classList.add('service_box-active-visible');
			e.target.classList.add('active');
		}
	});
});
