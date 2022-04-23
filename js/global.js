'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) {
	var it = (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
	if (!it) {
		if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || (allowArrayLike && o && typeof o.length === 'number')) {
			if (it) o = it;
			var i = 0;
			var F = function F() {};
			return {
				s: F,
				n: function n() {
					if (i >= o.length) return { done: true };
					return { done: false, value: o[i++] };
				},
				e: function e(_e) {
					throw _e;
				},
				f: F,
			};
		}
		throw new TypeError(
			'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
		);
	}
	var normalCompletion = true,
		didErr = false,
		err;
	return {
		s: function s() {
			it = it.call(o);
		},
		n: function n() {
			var step = it.next();
			normalCompletion = step.done;
			return step;
		},
		e: function e(_e2) {
			didErr = true;
			err = _e2;
		},
		f: function f() {
			try {
				if (!normalCompletion && it['return'] != null) it['return']();
			} finally {
				if (didErr) throw err;
			}
		},
	};
}

function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === 'Object' && o.constructor) n = o.constructor.name;
	if (n === 'Map' || n === 'Set') return Array.from(o);
	if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) {
		arr2[i] = arr[i];
	}
	return arr2;
}

document.addEventListener('DOMContentLoaded', function () {
	// Блоки хедера
	var header = document.querySelector('#header');
	var header_top = document.querySelector('.contacts_container');
	var menuBtn = document.querySelector('.menu_button');
	var menuList = document.querySelector('.navlist_grid');
	var menuClose = document.querySelector('.menu_button_close'); // Блоки футера

	var footer = document.querySelector('.footer'); //Блок главного контейнера

	var main_wrapper = document.querySelector('.main_wrapper');
	var partners = document.querySelector('.partners__wrapper'); // Прятание хедера

	var startY = window.scrollY;
	var partnersProgress = 0;
	document.addEventListener('scroll', function (e) {
		var currentY = window.scrollY;
		var space_left = document.body.scrollHeight - (window.pageYOffset + window.innerHeight);

		if (space_left <= header_top.offsetHeight) {
			return;
		}
		if (window.screen.width > 981) {
			if (startY < currentY && currentY) {
				header.style.top = '-'.concat(header_top.offsetHeight, 'px');
				main_wrapper.style.paddingTop = 191 - header_top.offsetHeight + 'px';
				partnersProgress += 10;
			} else if (startY > currentY) {
				header.style.top = '0';
				main_wrapper.style.paddingTop = 191 + 'px';
				partnersProgress -= 10;
			}

			if (partners) {
				partners.scroll(partnersProgress, 0);
			}
		} else {
			if (startY < currentY) {
				partnersProgress += 10;
			} else if (startY > currentY) {
				partnersProgress -= 10;
			}

			if (partners) {
				partners.scroll(partnersProgress, 0);
			}
		}

		startY = currentY;
	}); // Открытия мобильного меню

	menuBtn.onclick = function () {
		menuList.style.left = 0;
		document.body.style.overflowY = 'hidden';
	};

	menuClose.onclick = function () {
		menuList.style.left = '-120vw';
		document.body.style.overflowY = 'scroll';
	}; // Пункты мобильного меню

	menuList.addEventListener('click', function (e) {
		var target = e.target.closest('div');

		if (target.classList.contains('list_item') && !target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight =
				target.parentElement.children[1].children.length * target.parentElement.children[1].children[0].offsetHeight + 'px';
			target.classList.add('list_item___open');
		} else if (target.classList.contains('list_item') && target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight = 0;
			target.classList.remove('list_item___open');
		}
	}); // Пункты футера

	footer.addEventListener('click', function (e) {
		var target = e.target.closest('div');

		if (target.classList.contains('footer__category-item__title') && !target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight =
				target.parentElement.children[1].children.length * target.parentElement.children[1].children[0].offsetHeight + 'px';
			target.classList.add('list_item___open');
		} else if (target.classList.contains('footer__category-item__title') && target.classList.contains('list_item___open')) {
			target.parentElement.children[1].style.maxHeight = 0;
			target.classList.remove('list_item___open');
		}
	});

	var validateEmail = function validateEmail(email) {
		return String(email)
			.toLowerCase()
			.match(
				/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
			);
	};

	if (partners) {
		partners.querySelectorAll('img').forEach(function (el) {
			return el.setAttribute('draggable', false);
		});
		partners.style.cursor = 'grab';
		var pos = {
			top: 0,
			left: 0,
			x: 0,
			y: 0,
		};

		var mouseDownHandler = function mouseDownHandler(e) {
			partners.style.cursor = 'grabbing';
			partners.style.userSelect = 'none';
			pos = {
				left: partners.scrollLeft,
				top: partners.scrollTop,
				x: e.clientX,
				y: e.clientY,
			};
			document.addEventListener('mousemove', mouseMoveHandler);
			document.addEventListener('mouseup', mouseUpHandler);
		};

		var mouseMoveHandler = function mouseMoveHandler(e) {
			// How far the mouse has been moved
			var dx = e.clientX - pos.x;
			var dy = e.clientY - pos.y; // Scroll the element

			partners.scrollTop = pos.top - dy;
			partners.scrollLeft = pos.left - dx;
			partnersProgress = partners.scrollLeft;
		};

		var mouseUpHandler = function mouseUpHandler() {
			partners.style.cursor = 'grab';
			partners.style.removeProperty('user-select');
			document.removeEventListener('mousemove', mouseMoveHandler);
			document.removeEventListener('mouseup', mouseUpHandler);
		}; // Attach the handler

		partners.addEventListener('mousedown', mouseDownHandler);
	} // var request = {
	// 	placeId: 'place-ID-here', // example: ChIJN1t_tDeuEmsRUsoyG83frY4
	// };
	// var service = new google.maps.places.PlacesService(map); // map is your map object
	// service.getDetails(request, function (place, status) {
	// 	if (status == google.maps.places.PlacesServiceStatus.OK) {
	// 		console.log(place.reviews);
	// 	}
	// });
	// Заказать консультацию в шапке

	var order_consultation = document.querySelector('#header-consultation');
	order_consultation.addEventListener('click', function (e) {
		e.preventDefault();
		var overlay = document.createElement('div');
		overlay.classList.add('overlay');
		overlay.classList.add('consultation_overlay');
		overlay.style.display = 'block';
		overlay.innerHTML =
			'\n\t\t<div class="popup">\n\t\t\t<div class="formfeedback default_block">\n\t\t\t    <div class="container">\n\t\t\t        <div class="formfeedback__title">\n\t\t\t           \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F\n\t\t\t        </div>\n\t\t\t        <div class="formfeedback__timeanswer">\n\t\t\t            <img src="images/icons/clock-icon.svg" alt="">\n\t\t\t            \u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u0432\u0435\u0442\u0430 - 30 \u043C\u0438\u043D\u0443\u0442\n\t\t\t        </div>\n\t\t\t        <div class="formfeedback__tabs">\n\t\t\t            <div class="formfeedback__tabs-item active" data-btn="phone_call">\n\t\t\t                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t                    <path\n\t\t\t                        d="M16.5 21.8152C9.05606 21.8152 3 15.7811 3 8.36411C3.00128 7.09161 3.46747 5.8631 4.31147 4.90809C5.15547 3.95307 6.31955 3.33687 7.58625 3.1746C7.90858 3.13586 8.23484 3.20212 8.51624 3.36347C8.79764 3.52482 9.01905 3.7726 9.14737 4.06975L11.031 8.44864C11.1287 8.67516 11.1685 8.92227 11.1469 9.16787C11.1254 9.41348 11.043 9.64992 10.9073 9.85606L9.34772 12.2304L9.34753 12.2305C10.0517 13.6572 11.2131 14.8092 12.648 15.5046L14.9958 13.9452C15.2032 13.8069 15.4421 13.7225 15.6907 13.6998C15.9392 13.677 16.1896 13.7166 16.4188 13.815L20.8099 15.69C21.1081 15.8178 21.3569 16.0384 21.5188 16.3188C21.6808 16.5992 21.7473 16.9243 21.7084 17.2455C21.5455 18.5076 20.9271 19.6675 19.9686 20.5084C19.0101 21.3494 17.7771 21.8139 16.5 21.8152ZM7.76869 4.65861C6.86517 4.77547 6.0352 5.21593 5.43372 5.89779C4.83223 6.57966 4.50034 7.45631 4.5 8.36411C4.5036 11.5341 5.76904 14.5732 8.01869 16.8147C10.2683 19.0562 13.3185 20.317 16.5 20.3206C17.412 20.3199 18.2926 19.9884 18.9772 19.388C19.6619 18.7876 20.1037 17.9595 20.2203 17.0582L15.828 15.1888L13.481 16.7481C13.2652 16.8917 13.0158 16.977 12.757 16.9957C12.4983 17.0143 12.2391 16.9657 12.0049 16.8546C10.2604 16.0124 8.84904 14.6126 7.99575 12.8783C7.88369 12.6462 7.83371 12.3893 7.85066 12.1324C7.86761 11.8755 7.95092 11.6273 8.0925 11.4119L9.65213 9.03741L7.76869 4.65861Z"\n\t\t\t                        fill="#0B2128"></path>\n\t\t\t                </svg>\n\t\t\t                \u0417\u0432\u043E\u043D\u043E\u043A\n\t\t\t            </div>\n\t\t\t            <div class="formfeedback__tabs-item " data-btn="email">\n\t\t\t                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t                    <path\n\t\t\t                        d="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4H18.75H5.25ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z"\n\t\t\t                        fill="#979B9D"></path>\n\t\t\t                </svg>\n\t\t\t                Email\n\t\t\t            </div>\n\t\t\t            <div class="formfeedback__tabs-item" data-btn="whatsapp">\n\t\t\t                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t                    <path\n\t\t\t                        d="M19.05 4.91006C18.1332 3.98399 17.0412 3.24973 15.8376 2.75011C14.6341 2.25049 13.3431 1.99552 12.04 2.00006C6.57999 2.00006 2.12999 6.45006 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27006 20.92 6.78006 19.05 4.91006V4.91006ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22773 14.977 3.79113 13.4593 3.78999 11.9101C3.78999 7.37006 7.48999 3.67006 12.03 3.67006C14.23 3.67006 16.3 4.53006 17.85 6.09006C18.6175 6.85402 19.2257 7.76272 19.6394 8.76348C20.0531 9.76425 20.264 10.8372 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501V20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86006 10.39 9.72006 10.33 9.60006C10.27 9.48006 9.76999 8.26006 9.56999 7.76006C9.36999 7.28006 9.15999 7.34006 9.00999 7.33006H8.52999C8.35999 7.33006 8.09999 7.39006 7.86999 7.64006C7.64999 7.89006 7.00999 8.49006 7.00999 9.71006C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901V13.9901Z"\n\t\t\t                        fill="#979B9D"></path>\n\t\t\t                </svg>\n\t\t\t                Whatsapp\n\t\t\t            </div>\n\t\t\t            <div class="formfeedback__tabs-item" data-btn="telegram">\n\t\t\t                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t                    <path\n\t\t\t                        d="M21.6803 2.97536C21.4736 2.79693 21.222 2.67843 20.9529 2.63271C20.6837 2.58698 20.4071 2.61577 20.1531 2.71596L2.85087 9.5133C2.54934 9.63181 2.29428 9.84476 2.12385 10.1203C1.95342 10.3958 1.87678 10.7191 1.9054 11.0419C1.93402 11.3646 2.06636 11.6694 2.28262 11.9106C2.49888 12.1518 2.78744 12.3166 3.10512 12.3802L7.50003 13.2594V18.7487C7.49976 19.0455 7.58758 19.3357 7.75235 19.5825C7.91712 19.8294 8.15144 20.0217 8.42563 20.1353C8.69982 20.2489 9.00154 20.2786 9.2926 20.2205C9.58365 20.1625 9.85094 20.0194 10.0606 19.8094L12.4929 17.3772L16.1844 20.6257C16.4561 20.867 16.8069 21.0006 17.1703 21.0011C17.3283 21.0009 17.4853 20.976 17.6356 20.9273C17.8835 20.8486 18.1065 20.7064 18.2823 20.5147C18.458 20.323 18.5805 20.0885 18.6373 19.8347L22.1637 4.44733C22.2251 4.18124 22.2125 3.90342 22.1273 3.64397C22.0421 3.38451 21.8875 3.15333 21.6803 2.97546V2.97536ZM8.07621 11.8448L3.39949 10.9094L16.4946 5.7648L8.07621 11.8448ZM9.00003 18.748V14.3035L11.3644 16.3841L9.00003 18.748ZM17.1752 19.4996L9.45096 12.7021L20.5739 4.66896L17.1752 19.4996Z"\n\t\t\t                        fill="#979B9D"></path>\n\t\t\t                </svg>\n\t\t\t                Telegram\n\t\t\t            </div>\n\t\t\t        </div>\n\t\t\t        <form class="formfeedback__form active" data-context="phone_call">\n\t\t\t            <label for="contact_way">\n\t\t\t                <input type="phone" placeholder="\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" id="contact_way" name="contact_way">\n\t\t\t            </label>\n\t\t\t            <label for="name">\n\t\t\t                <input type="text" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" id="name" name="name">\n\t\t\t            </label>\n\t\t\t            <div class="formfeedback__form-send">\n\t\t\t                <div class="formfeedback__form-send__text">\n\t\t\t                    \u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 <a class="text-hover" href="/privacy-policy/">\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445\n\t\t\t                        \u0434\u0430\u043D\u043D\u044B\u0445</a>\n\t\t\t                </div>\n\t\t\t                <button type="submit" class="formfeedback__form-send__btn btn btn-hover">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n\t\t\t            </div>\n\t\t\t        </form>\n\t\t\t    </div>\n\t\t\t</div>\n        \t<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>\n    \t</div>\n\n\t\t';
		document.body.appendChild(overlay);
		document.body.style.overflowY = 'hidden';
		var update = new Event('pageFormsUpdated', { bubbles: true });
		document.dispatchEvent(update);
		var evt = new Event('PDUpdate', { bubbles: true });
		document.dispatchEvent(evt);
		function killConsultation() {
			overlay.remove();
			document.body.style.overflowY = 'scroll';
		}

		overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
	}); // После открытия бизнеса

	var request_buttons = document.querySelectorAll('.open_company_button');
	var after_opening_data = [
		{
			name: 'legal_services',
			h1: 'Юридические услуги',
			text: '<p>Любой действующий бизнес сталкивается с необходимостью решения юридических вопросов в особенности на территории другого государства. Если вы не готовы нанимать в штат сотрудников, которые будут ответственны за подготовку договоров, проверку подрядчиков и т.д., или ваш специалист не знаком с особенностями законодательства Грузии и не может компетентно выполнять подобные задачи, то лучше довериться профессионалам и выбрать юриста в Грузии.</p><p>Наши юристы помогут вам внести изменения в устав, составить шаблоны договоров под конкретные сделки, проведут оценку рисков и минимизируют их.</p>',
		},
		{
			name: 'financial_services',
			h1: 'Финансовые услуги (финансовый учет, финансовая отчетность)',
			text: '<p>Любая предпринимательская деятельность в Грузии обязана выполнять требования по уплате налогов и подаче финансовой отчетности, а также хранить всю информацию в течение 6 лет. Финансовая отчетность в Грузии контролируется Налоговым кодексом. Чтобы составлять финансовую отчетность необходимо хорошо знать Налоговый кодекс Грузии и очень тщательно заполнять всю документацию связанную с финансовой деятельностью компании. Любая ошибка или неточность может повлечь за собой штрафы или более серьезные последствия в случае если что-то было упущено при подаче отчетности. Чтобы этого не допустить мы предлагаем вам услуги наших специалистов, которые будут контролировать и заполнять все отчеты за вас.</p>',
		},
		{
			name: 'residence',
			h1: 'ВНЖ',
			text: '<p>Любой человек, который не является гражданином Грузии имеет право получить вид на жительство. Для получения ВНЖ вы должны обратиться в соответствующий филиал Агентства развития государственных услуг или Дома Юстиции. Вид на жительство подтверждает имя и фамилию, гражданство и место проживания в Грузии иностранца.  Мы поможем вам на каждом этапе.</p>',
		},
		{
			name: 'tax_consult',
			h1: 'Налоговый консалтинг',
			text: '<p>Налоговый консалтинг особенно актуален для нерезидентов. Любая компания, осуществляющая деятельность на территории Грузии, имеет обязательства по уплате налогов. Без понимания системы обложения легко совершить ошибку. Очень важно этого избегать для представителей малого и среднего бизнеса, особенно в начале пути. Любые разногласия с представителями контролирующих органов могут фатально отразиться на успехе вашего бизнеса в Грузии. Незнание Налогового кодекса не освободит вас от взысканий, штрафов, пени, а в худшем случае приостановки операций на расчетных счетах.</p><p>Налоговые консультанты Jara Accounting помогут вам разобраться в налоговой системе Грузии, сведут к минимуму возможные налоговые риски, правильно оценят  существующие проблемы и предоставят подходящий вариант ее решения.</p>',
		},
		{
			name: 'education',
			h1: 'Обучение по декларированию ИП с малым статусом',
			text: '<p>Подача декларации в Грузии обязательна для всех предпринимателей — это помогает правительству вести учет всех доходов организаций и распространяющихся на них налоговых льгот в зависимости от юридической формы. Чтобы быть уверенным в корректности заполнения декларации и во избежание штрафов воспользуйтесь услугами специалистов Jara Accounting.</p>',
		},
	];
	request_buttons.forEach(function (el) {
		el.addEventListener('click', function () {
			var dynamic_object;

			var _iterator = _createForOfIteratorHelper(after_opening_data),
				_step;

			try {
				for (_iterator.s(); !(_step = _iterator.n()).done; ) {
					var data_object = _step.value;

					if (data_object.name === el.dataset.after) {
						dynamic_object = data_object;
					}
				}
			} catch (err) {
				_iterator.e(err);
			} finally {
				_iterator.f();
			}

			var overlay = document.createElement('div');
			overlay.classList.add('overlay');
			overlay.classList.add('consultation_overlay');
			overlay.style.display = 'block';
			overlay.innerHTML =
				'\n\t\t\t\t<div class="popup">\n\t\t\t\t\t<div class="formfeedback " style="margin-bottom: 30px;">\n\t\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t\t<div class="formfeedback__title">\n\t\t\t\t\t\t\t\t'
					.concat(
						dynamic_object.h1,
						'\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="formfeedback__timeanswer">\n\t\t\t\t\t\t\t\t<img src="images/icons/clock-icon.svg" alt="">\n\t\t\t\t\t\t\t\t\u0421\u0440\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u043E\u0442\u0432\u0435\u0442\u0430 - 30 \u043C\u0438\u043D\u0443\u0442\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="formfeedback__tabs">\n\t\t\t\t\t\t\t\t<div class="formfeedback__tabs-item active" data-btn="phone_call">\n\t\t\t\t\t\t\t\t\t<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\t\t\t\td="M16.5 21.8152C9.05606 21.8152 3 15.7811 3 8.36411C3.00128 7.09161 3.46747 5.8631 4.31147 4.90809C5.15547 3.95307 6.31955 3.33687 7.58625 3.1746C7.90858 3.13586 8.23484 3.20212 8.51624 3.36347C8.79764 3.52482 9.01905 3.7726 9.14737 4.06975L11.031 8.44864C11.1287 8.67516 11.1685 8.92227 11.1469 9.16787C11.1254 9.41348 11.043 9.64992 10.9073 9.85606L9.34772 12.2304L9.34753 12.2305C10.0517 13.6572 11.2131 14.8092 12.648 15.5046L14.9958 13.9452C15.2032 13.8069 15.4421 13.7225 15.6907 13.6998C15.9392 13.677 16.1896 13.7166 16.4188 13.815L20.8099 15.69C21.1081 15.8178 21.3569 16.0384 21.5188 16.3188C21.6808 16.5992 21.7473 16.9243 21.7084 17.2455C21.5455 18.5076 20.9271 19.6675 19.9686 20.5084C19.0101 21.3494 17.7771 21.8139 16.5 21.8152ZM7.76869 4.65861C6.86517 4.77547 6.0352 5.21593 5.43372 5.89779C4.83223 6.57966 4.50034 7.45631 4.5 8.36411C4.5036 11.5341 5.76904 14.5732 8.01869 16.8147C10.2683 19.0562 13.3185 20.317 16.5 20.3206C17.412 20.3199 18.2926 19.9884 18.9772 19.388C19.6619 18.7876 20.1037 17.9595 20.2203 17.0582L15.828 15.1888L13.481 16.7481C13.2652 16.8917 13.0158 16.977 12.757 16.9957C12.4983 17.0143 12.2391 16.9657 12.0049 16.8546C10.2604 16.0124 8.84904 14.6126 7.99575 12.8783C7.88369 12.6462 7.83371 12.3893 7.85066 12.1324C7.86761 11.8755 7.95092 11.6273 8.0925 11.4119L9.65213 9.03741L7.76869 4.65861Z"\n\t\t\t\t\t\t\t\t\t\t\tfill="#0B2128"></path>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\t\u0417\u0432\u043E\u043D\u043E\u043A\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="formfeedback__tabs-item " data-btn="email">\n\t\t\t\t\t\t\t\t\t<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\t\t\t\td="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4H18.75H5.25ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z"\n\t\t\t\t\t\t\t\t\t\t\tfill="#979B9D"></path>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\tEmail\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="formfeedback__tabs-item" data-btn="whatsapp">\n\t\t\t\t\t\t\t\t\t<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\t\t\t\td="M19.05 4.91006C18.1332 3.98399 17.0412 3.24973 15.8376 2.75011C14.6341 2.25049 13.3431 1.99552 12.04 2.00006C6.57999 2.00006 2.12999 6.45006 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27006 20.92 6.78006 19.05 4.91006V4.91006ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22773 14.977 3.79113 13.4593 3.78999 11.9101C3.78999 7.37006 7.48999 3.67006 12.03 3.67006C14.23 3.67006 16.3 4.53006 17.85 6.09006C18.6175 6.85402 19.2257 7.76272 19.6394 8.76348C20.0531 9.76425 20.264 10.8372 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501V20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86006 10.39 9.72006 10.33 9.60006C10.27 9.48006 9.76999 8.26006 9.56999 7.76006C9.36999 7.28006 9.15999 7.34006 9.00999 7.33006H8.52999C8.35999 7.33006 8.09999 7.39006 7.86999 7.64006C7.64999 7.89006 7.00999 8.49006 7.00999 9.71006C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901V13.9901Z"\n\t\t\t\t\t\t\t\t\t\t\tfill="#979B9D"></path>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\tWhatsapp\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="formfeedback__tabs-item" data-btn="telegram">\n\t\t\t\t\t\t\t\t\t<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n\t\t\t\t\t\t\t\t\t\t<path\n\t\t\t\t\t\t\t\t\t\t\td="M21.6803 2.97536C21.4736 2.79693 21.222 2.67843 20.9529 2.63271C20.6837 2.58698 20.4071 2.61577 20.1531 2.71596L2.85087 9.5133C2.54934 9.63181 2.29428 9.84476 2.12385 10.1203C1.95342 10.3958 1.87678 10.7191 1.9054 11.0419C1.93402 11.3646 2.06636 11.6694 2.28262 11.9106C2.49888 12.1518 2.78744 12.3166 3.10512 12.3802L7.50003 13.2594V18.7487C7.49976 19.0455 7.58758 19.3357 7.75235 19.5825C7.91712 19.8294 8.15144 20.0217 8.42563 20.1353C8.69982 20.2489 9.00154 20.2786 9.2926 20.2205C9.58365 20.1625 9.85094 20.0194 10.0606 19.8094L12.4929 17.3772L16.1844 20.6257C16.4561 20.867 16.8069 21.0006 17.1703 21.0011C17.3283 21.0009 17.4853 20.976 17.6356 20.9273C17.8835 20.8486 18.1065 20.7064 18.2823 20.5147C18.458 20.323 18.5805 20.0885 18.6373 19.8347L22.1637 4.44733C22.2251 4.18124 22.2125 3.90342 22.1273 3.64397C22.0421 3.38451 21.8875 3.15333 21.6803 2.97546V2.97536ZM8.07621 11.8448L3.39949 10.9094L16.4946 5.7648L8.07621 11.8448ZM9.00003 18.748V14.3035L11.3644 16.3841L9.00003 18.748ZM17.1752 19.4996L9.45096 12.7021L20.5739 4.66896L17.1752 19.4996Z"\n\t\t\t\t\t\t\t\t\t\t\tfill="#979B9D"></path>\n\t\t\t\t\t\t\t\t\t</svg>\n\t\t\t\t\t\t\t\t\tTelegram\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<form class="formfeedback__form active" data-context="phone_call">\n\t\t\t\t\t\t\t\t<label for="contact_way">\n\t\t\t\t\t\t\t\t\t<input type="phone" placeholder="\u041D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" id="contact_way" name="contact_way">\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<label for="name">\n\t\t\t\t\t\t\t\t\t<input type="text" placeholder="\u0412\u0430\u0448\u0435 \u0438\u043C\u044F" id="name" name="name">\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t<div class="formfeedback__form-send">\n\t\t\t\t\t\t\t\t\t<div class="formfeedback__form-send__text">\n\t\t\t\t\t\t\t\t\t\t\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 <a class="text-hover" href="/privacy-policy/">\u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u043E\u0439 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445\n\t\t\t\t\t\t\t\t\t\t\t\u0434\u0430\u043D\u043D\u044B\u0445</a>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<button type="submit" class="formfeedback__form-send__btn btn btn-hover">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="popup_text_block" style="padding-top: 30px; border-top: 1px solid #DDDDDD;">\n\t\t\t\t\t\t<h1>'
					)
					.concat(dynamic_object.h1, '</h1>\n\t\t\t\t\t\t')
					.concat(
						dynamic_object.text,
						'\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>\n\t\t\t\t</div>\n\n\t\t'
					);
			document.body.appendChild(overlay);
			document.body.style.overflowY = 'hidden';

			function killConsultation() {
				overlay.remove();
				document.body.style.overflowY = 'scroll';
			}

			overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
			var update = new Event('pageFormsUpdated', { bubbles: true });
			document.dispatchEvent(update);
			var evt = new Event('PDUpdate', { bubbles: true });
			document.dispatchEvent(evt);
		});
	}); // smooth scroll

	document.querySelectorAll('a[href^="#"').forEach(function (link) {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			var href = this.getAttribute('href').substring(1);
			var scrollTarget = document.getElementById(href);

			if (scrollTarget) {
				var padding;
				window.screen.width > 981 ? (padding = 200) : (padding = 100);
				var elementPosition = scrollTarget.getBoundingClientRect().top;
				var offsetPosition = elementPosition - padding;
				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth',
				});
				menuClose.click();
			}
		});
	});

	if (document.querySelector('#cons-btn')) {
		document.querySelector('#cons-btn').addEventListener('click', function () {
			var scrollTarget = document.getElementById('get-consultation');

			if (scrollTarget) {
				var padding;
				window.screen.width > 981 ? (padding = 200) : (padding = 100);
				var elementPosition = scrollTarget.getBoundingClientRect().top;
				var offsetPosition = elementPosition - padding;
				window.scrollBy({
					top: offsetPosition,
					behavior: 'smooth',
				});
				menuClose.click();
			}
		});
	}
	var special_consults = document.querySelectorAll('.consult');
	if (special_consults.length > 0) {
		for (let i = 0; i < special_consults.length; i++) {
			special_consults[i].addEventListener('click', function (e) {
				e.preventDefault();

				var title = false;

				if (e.target.dataset.title) {
					title = e.target.dataset.title;
				}

				var overlay = document.createElement('div');
				overlay.classList.add('overlay');
				overlay.classList.add('consultation_overlay');
				overlay.style.display = 'block';
				overlay.innerHTML = `
				<div class="popup">
					<div class="formfeedback default_block">
					    <div class="container">
					        <div class="formfeedback__title">
					           Бесплатная консультация
					        </div>
					        <div class="formfeedback__timeanswer">
					            <img src="images/icons/clock-icon.svg" alt="">
					            Среднее время ответа - 30 минут
					        </div>
					        <div class="formfeedback__tabs">
					            <div class="formfeedback__tabs-item active" data-btn="phone_call">
					                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
					                    <path
					                        d="M16.5 21.8152C9.05606 21.8152 3 15.7811 3 8.36411C3.00128 7.09161 3.46747 5.8631 4.31147 4.90809C5.15547 3.95307 6.31955 3.33687 7.58625 3.1746C7.90858 3.13586 8.23484 3.20212 8.51624 3.36347C8.79764 3.52482 9.01905 3.7726 9.14737 4.06975L11.031 8.44864C11.1287 8.67516 11.1685 8.92227 11.1469 9.16787C11.1254 9.41348 11.043 9.64992 10.9073 9.85606L9.34772 12.2304L9.34753 12.2305C10.0517 13.6572 11.2131 14.8092 12.648 15.5046L14.9958 13.9452C15.2032 13.8069 15.4421 13.7225 15.6907 13.6998C15.9392 13.677 16.1896 13.7166 16.4188 13.815L20.8099 15.69C21.1081 15.8178 21.3569 16.0384 21.5188 16.3188C21.6808 16.5992 21.7473 16.9243 21.7084 17.2455C21.5455 18.5076 20.9271 19.6675 19.9686 20.5084C19.0101 21.3494 17.7771 21.8139 16.5 21.8152ZM7.76869 4.65861C6.86517 4.77547 6.0352 5.21593 5.43372 5.89779C4.83223 6.57966 4.50034 7.45631 4.5 8.36411C4.5036 11.5341 5.76904 14.5732 8.01869 16.8147C10.2683 19.0562 13.3185 20.317 16.5 20.3206C17.412 20.3199 18.2926 19.9884 18.9772 19.388C19.6619 18.7876 20.1037 17.9595 20.2203 17.0582L15.828 15.1888L13.481 16.7481C13.2652 16.8917 13.0158 16.977 12.757 16.9957C12.4983 17.0143 12.2391 16.9657 12.0049 16.8546C10.2604 16.0124 8.84904 14.6126 7.99575 12.8783C7.88369 12.6462 7.83371 12.3893 7.85066 12.1324C7.86761 11.8755 7.95092 11.6273 8.0925 11.4119L9.65213 9.03741L7.76869 4.65861Z"
					                        fill="#0B2128"></path>
					                </svg>
					                Звонок
					            </div>
					            <div class="formfeedback__tabs-item " data-btn="email">
					                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					                    <path
					                        d="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4H18.75H5.25ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z"
					                        fill="#979B9D"></path>
					                </svg>
					                Email
					            </div>
					            <div class="formfeedback__tabs-item" data-btn="whatsapp">
					                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					                    <path
					                        d="M19.05 4.91006C18.1332 3.98399 17.0412 3.24973 15.8376 2.75011C14.6341 2.25049 13.3431 1.99552 12.04 2.00006C6.57999 2.00006 2.12999 6.45006 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27006 20.92 6.78006 19.05 4.91006V4.91006ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22773 14.977 3.79113 13.4593 3.78999 11.9101C3.78999 7.37006 7.48999 3.67006 12.03 3.67006C14.23 3.67006 16.3 4.53006 17.85 6.09006C18.6175 6.85402 19.2257 7.76272 19.6394 8.76348C20.0531 9.76425 20.264 10.8372 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501V20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86006 10.39 9.72006 10.33 9.60006C10.27 9.48006 9.76999 8.26006 9.56999 7.76006C9.36999 7.28006 9.15999 7.34006 9.00999 7.33006H8.52999C8.35999 7.33006 8.09999 7.39006 7.86999 7.64006C7.64999 7.89006 7.00999 8.49006 7.00999 9.71006C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901V13.9901Z"
					                        fill="#979B9D"></path>
					                </svg>
					                Whatsapp
					            </div>
					            <div class="formfeedback__tabs-item" data-btn="telegram">
					                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					                    <path
					                        d="M21.6803 2.97536C21.4736 2.79693 21.222 2.67843 20.9529 2.63271C20.6837 2.58698 20.4071 2.61577 20.1531 2.71596L2.85087 9.5133C2.54934 9.63181 2.29428 9.84476 2.12385 10.1203C1.95342 10.3958 1.87678 10.7191 1.9054 11.0419C1.93402 11.3646 2.06636 11.6694 2.28262 11.9106C2.49888 12.1518 2.78744 12.3166 3.10512 12.3802L7.50003 13.2594V18.7487C7.49976 19.0455 7.58758 19.3357 7.75235 19.5825C7.91712 19.8294 8.15144 20.0217 8.42563 20.1353C8.69982 20.2489 9.00154 20.2786 9.2926 20.2205C9.58365 20.1625 9.85094 20.0194 10.0606 19.8094L12.4929 17.3772L16.1844 20.6257C16.4561 20.867 16.8069 21.0006 17.1703 21.0011C17.3283 21.0009 17.4853 20.976 17.6356 20.9273C17.8835 20.8486 18.1065 20.7064 18.2823 20.5147C18.458 20.323 18.5805 20.0885 18.6373 19.8347L22.1637 4.44733C22.2251 4.18124 22.2125 3.90342 22.1273 3.64397C22.0421 3.38451 21.8875 3.15333 21.6803 2.97546V2.97536ZM8.07621 11.8448L3.39949 10.9094L16.4946 5.7648L8.07621 11.8448ZM9.00003 18.748V14.3035L11.3644 16.3841L9.00003 18.748ZM17.1752 19.4996L9.45096 12.7021L20.5739 4.66896L17.1752 19.4996Z"
					                        fill="#979B9D"></path>
					                </svg>
					                Telegram
					            </div>
					        </div>
					        <form class="formfeedback__form active" data-context="phone_call">
					            <label for="contact_way">
					                <input type="phone" placeholder="Номер телефона" id="contact_way" name="contact_way">
					            </label>
					            <label for="name">
					                <input type="text" placeholder="Ваше имя" id="name" name="name">
					            </label>
					            <div class="formfeedback__form-send">
					                <div class="formfeedback__form-send__text">
					                    Нажимая кнопку «Отправить», вы соглашаетесь с <a class="text-hover" href="/personal-data-agreement">обработкой персональных
					                        данных</a>
					                </div>
					                <button type="submit" class="formfeedback__form-send__btn btn btn-hover">Отправить</button>
					            </div>
					        </form>
					    </div>
					</div>
        			<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
    			</div>

		`;
				document.body.appendChild(overlay);
				document.body.style.overflowY = 'hidden';
				var update = new Event('pageFormsUpdated', { bubbles: true });
				document.dispatchEvent(update);
				var evt = new Event('PDUpdate', { bubbles: true });
				document.dispatchEvent(evt);
				function killConsultation() {
					overlay.remove();
					document.body.style.overflowY = 'scroll';
				}

				overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
			});
		}
	}

	// var tile_links = document.querySelectorAll('.tile_link');

	// tile_links.forEach(function (link) {
	// 	link.addEventListener('click', function (e) {
	// 		e.preventDefault();
	// 		var title = '';

	// 		var overlay = document.createElement('div');
	// 		overlay.classList.add('overlay');
	// 		overlay.classList.add('consultation_overlay');
	// 		overlay.style.display = 'block';
	// 		overlay.innerHTML = `
	// 			<div class="popup">
	// 				<div class="formfeedback default_block">
	// 				    <div class="container">
	// 				        <div class="formfeedback__title">
	// 				           Бесплатная консультация
	// 				        </div>
	// 				        <div class="formfeedback__timeanswer">
	// 				            <img src="images/icons/clock-icon.svg" alt="">
	// 				            Среднее время ответа - 30 минут
	// 				        </div>
	// 				        <div class="formfeedback__tabs">
	// 				            <div class="formfeedback__tabs-item active" data-btn="phone_call">
	// 				                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 				                    <path
	// 				                        d="M16.5 21.8152C9.05606 21.8152 3 15.7811 3 8.36411C3.00128 7.09161 3.46747 5.8631 4.31147 4.90809C5.15547 3.95307 6.31955 3.33687 7.58625 3.1746C7.90858 3.13586 8.23484 3.20212 8.51624 3.36347C8.79764 3.52482 9.01905 3.7726 9.14737 4.06975L11.031 8.44864C11.1287 8.67516 11.1685 8.92227 11.1469 9.16787C11.1254 9.41348 11.043 9.64992 10.9073 9.85606L9.34772 12.2304L9.34753 12.2305C10.0517 13.6572 11.2131 14.8092 12.648 15.5046L14.9958 13.9452C15.2032 13.8069 15.4421 13.7225 15.6907 13.6998C15.9392 13.677 16.1896 13.7166 16.4188 13.815L20.8099 15.69C21.1081 15.8178 21.3569 16.0384 21.5188 16.3188C21.6808 16.5992 21.7473 16.9243 21.7084 17.2455C21.5455 18.5076 20.9271 19.6675 19.9686 20.5084C19.0101 21.3494 17.7771 21.8139 16.5 21.8152ZM7.76869 4.65861C6.86517 4.77547 6.0352 5.21593 5.43372 5.89779C4.83223 6.57966 4.50034 7.45631 4.5 8.36411C4.5036 11.5341 5.76904 14.5732 8.01869 16.8147C10.2683 19.0562 13.3185 20.317 16.5 20.3206C17.412 20.3199 18.2926 19.9884 18.9772 19.388C19.6619 18.7876 20.1037 17.9595 20.2203 17.0582L15.828 15.1888L13.481 16.7481C13.2652 16.8917 13.0158 16.977 12.757 16.9957C12.4983 17.0143 12.2391 16.9657 12.0049 16.8546C10.2604 16.0124 8.84904 14.6126 7.99575 12.8783C7.88369 12.6462 7.83371 12.3893 7.85066 12.1324C7.86761 11.8755 7.95092 11.6273 8.0925 11.4119L9.65213 9.03741L7.76869 4.65861Z"
	// 				                        fill="#0B2128"></path>
	// 				                </svg>
	// 				                Звонок
	// 				            </div>
	// 				            <div class="formfeedback__tabs-item " data-btn="email">
	// 				                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 				                    <path
	// 				                        d="M5.25 4H18.75C19.5801 3.99995 20.3788 4.31755 20.9822 4.88767C21.5856 5.45779 21.948 6.23719 21.995 7.066L22 7.25V16.75C22.0001 17.5801 21.6824 18.3788 21.1123 18.9822C20.5422 19.5856 19.7628 19.948 18.934 19.995L18.75 20H5.25C4.41986 20.0001 3.62117 19.6824 3.01777 19.1123C2.41437 18.5422 2.052 17.7628 2.005 16.934L2 16.75V7.25C1.99995 6.41986 2.31755 5.62117 2.88767 5.01777C3.45779 4.41437 4.23719 4.052 5.066 4.005L5.25 4H18.75H5.25ZM20.5 9.373L12.35 13.663C12.258 13.7116 12.1568 13.7405 12.053 13.7479C11.9492 13.7553 11.845 13.7411 11.747 13.706L11.651 13.664L3.5 9.374V16.75C3.50002 17.1892 3.66517 17.6123 3.96268 17.9354C4.26019 18.2585 4.6683 18.4579 5.106 18.494L5.25 18.5H18.75C19.1893 18.5 19.6126 18.3347 19.9357 18.037C20.2588 17.7392 20.4581 17.3309 20.494 16.893L20.5 16.75V9.373ZM18.75 5.5H5.25C4.81081 5.50002 4.38768 5.66517 4.06461 5.96268C3.74154 6.26019 3.54214 6.6683 3.506 7.106L3.5 7.25V7.679L12 12.152L20.5 7.678V7.25C20.5 6.81065 20.3347 6.38739 20.037 6.06429C19.7392 5.74119 19.3309 5.5419 18.893 5.506L18.75 5.5Z"
	// 				                        fill="#979B9D"></path>
	// 				                </svg>
	// 				                Email
	// 				            </div>
	// 				            <div class="formfeedback__tabs-item" data-btn="whatsapp">
	// 				                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 				                    <path
	// 				                        d="M19.05 4.91006C18.1332 3.98399 17.0412 3.24973 15.8376 2.75011C14.6341 2.25049 13.3431 1.99552 12.04 2.00006C6.57999 2.00006 2.12999 6.45006 2.12999 11.9101C2.12999 13.6601 2.58999 15.3601 3.44999 16.8601L2.04999 22.0001L7.29999 20.6201C8.74999 21.4101 10.38 21.8301 12.04 21.8301C17.5 21.8301 21.95 17.3801 21.95 11.9201C21.95 9.27006 20.92 6.78006 19.05 4.91006V4.91006ZM12.04 20.1501C10.56 20.1501 9.10999 19.7501 7.83999 19.0001L7.53999 18.8201L4.41999 19.6401L5.24999 16.6001L5.04999 16.2901C4.22773 14.977 3.79113 13.4593 3.78999 11.9101C3.78999 7.37006 7.48999 3.67006 12.03 3.67006C14.23 3.67006 16.3 4.53006 17.85 6.09006C18.6175 6.85402 19.2257 7.76272 19.6394 8.76348C20.0531 9.76425 20.264 10.8372 20.26 11.9201C20.28 16.4601 16.58 20.1501 12.04 20.1501V20.1501ZM16.56 13.9901C16.31 13.8701 15.09 13.2701 14.87 13.1801C14.64 13.1001 14.48 13.0601 14.31 13.3001C14.14 13.5501 13.67 14.1101 13.53 14.2701C13.39 14.4401 13.24 14.4601 12.99 14.3301C12.74 14.2101 11.94 13.9401 11 13.1001C10.26 12.4401 9.76999 11.6301 9.61999 11.3801C9.47999 11.1301 9.59999 11.0001 9.72999 10.8701C9.83999 10.7601 9.97999 10.5801 10.1 10.4401C10.22 10.3001 10.27 10.1901 10.35 10.0301C10.43 9.86006 10.39 9.72006 10.33 9.60006C10.27 9.48006 9.76999 8.26006 9.56999 7.76006C9.36999 7.28006 9.15999 7.34006 9.00999 7.33006H8.52999C8.35999 7.33006 8.09999 7.39006 7.86999 7.64006C7.64999 7.89006 7.00999 8.49006 7.00999 9.71006C7.00999 10.9301 7.89999 12.1101 8.01999 12.2701C8.13999 12.4401 9.76999 14.9401 12.25 16.0101C12.84 16.2701 13.3 16.4201 13.66 16.5301C14.25 16.7201 14.79 16.6901 15.22 16.6301C15.7 16.5601 16.69 16.0301 16.89 15.4501C17.1 14.8701 17.1 14.3801 17.03 14.2701C16.96 14.1601 16.81 14.1101 16.56 13.9901V13.9901Z"
	// 				                        fill="#979B9D"></path>
	// 				                </svg>
	// 				                Whatsapp
	// 				            </div>
	// 				            <div class="formfeedback__tabs-item" data-btn="telegram">
	// 				                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
	// 				                    <path
	// 				                        d="M21.6803 2.97536C21.4736 2.79693 21.222 2.67843 20.9529 2.63271C20.6837 2.58698 20.4071 2.61577 20.1531 2.71596L2.85087 9.5133C2.54934 9.63181 2.29428 9.84476 2.12385 10.1203C1.95342 10.3958 1.87678 10.7191 1.9054 11.0419C1.93402 11.3646 2.06636 11.6694 2.28262 11.9106C2.49888 12.1518 2.78744 12.3166 3.10512 12.3802L7.50003 13.2594V18.7487C7.49976 19.0455 7.58758 19.3357 7.75235 19.5825C7.91712 19.8294 8.15144 20.0217 8.42563 20.1353C8.69982 20.2489 9.00154 20.2786 9.2926 20.2205C9.58365 20.1625 9.85094 20.0194 10.0606 19.8094L12.4929 17.3772L16.1844 20.6257C16.4561 20.867 16.8069 21.0006 17.1703 21.0011C17.3283 21.0009 17.4853 20.976 17.6356 20.9273C17.8835 20.8486 18.1065 20.7064 18.2823 20.5147C18.458 20.323 18.5805 20.0885 18.6373 19.8347L22.1637 4.44733C22.2251 4.18124 22.2125 3.90342 22.1273 3.64397C22.0421 3.38451 21.8875 3.15333 21.6803 2.97546V2.97536ZM8.07621 11.8448L3.39949 10.9094L16.4946 5.7648L8.07621 11.8448ZM9.00003 18.748V14.3035L11.3644 16.3841L9.00003 18.748ZM17.1752 19.4996L9.45096 12.7021L20.5739 4.66896L17.1752 19.4996Z"
	// 				                        fill="#979B9D"></path>
	// 				                </svg>
	// 				                Telegram
	// 				            </div>
	// 				        </div>
	// 				        <form class="formfeedback__form active" data-context="phone_call">
	// 				            <label for="contact_way">
	// 				                <input type="phone" placeholder="Номер телефона" id="contact_way" name="contact_way">
	// 				            </label>
	// 				            <label for="name">
	// 				                <input type="text" placeholder="Ваше имя" id="name" name="name">
	// 				            </label>
	// 				            <div class="formfeedback__form-send">
	// 				                <div class="formfeedback__form-send__text">
	// 				                    Нажимая кнопку «Отправить», вы соглашаетесь с <a class="text-hover" href="/personal-data-agreement">обработкой персональных
	// 				                        данных</a>
	// 				                </div>
	// 				                <button type="submit" class="formfeedback__form-send__btn btn btn-hover">Отправить</button>
	// 				            </div>
	// 				        </form>
	// 				    </div>
	// 				</div>
	//     			<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
	// 			</div>

	// 	`;

	// 		document.body.appendChild(overlay);
	// 		document.body.style.overflowY = 'hidden';
	// 		var update = new CustomEvent('pageFormsUpdated');
	// 		document.dispatchEvent(update);

	// 		function killConsultation() {
	// 			overlay.remove();
	// 			document.body.style.overflowY = 'scroll';
	// 		}
	// 		overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
	// 	});
	// });
});
