document.addEventListener('DOMContentLoaded', function () {
	var all_buttons = document.querySelectorAll('.company_table-btn');
	var remote = all_buttons[0];
	var personal = all_buttons[1];
	var rt = document.querySelector('.remote__table');
	var pt = document.querySelector('.personal__table');

	personal.addEventListener('click', function () {
		pt.classList.add('display_t');
		rt.classList.remove('display_t');
		remote.classList.remove('active');
		personal.classList.add('active');
	});
	remote.addEventListener('click', function () {
		pt.classList.remove('display_t');
		rt.classList.add('display_t');
		remote.classList.add('active');
		personal.classList.remove('active');
	});
});
