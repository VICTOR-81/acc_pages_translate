document.addEventListener('DOMContentLoaded', updatePageForms);
document.addEventListener('pageFormsUpdated', updatePageForms);

function updatePageForms() {
	document.querySelectorAll('.formfeedback').forEach((el) => {
		var replacer = el.innerHTML;
		el.innerHTML = replacer;
		var tabs = el.querySelector('.formfeedback__tabs');
		var form = el.querySelector('.formfeedback__form');
		var page = document.title;
		var input_name = form.elements['name'];
		var input_contact = form.elements['contact_way'];

		var changeClass = (el) => {
			for (var i = 0; i < tabs.children.length; i++) {
				tabs.children[i].classList.remove('active');
			}
			el.classList.add('active');
		};

		var placeholders = [
			{ name: 'phone_call', value: 'Номер телефона', type: 'phone' },
			{ name: 'email', value: 'Email', type: 'email' },
			{ name: 'whatsapp', value: 'WhatsApp', type: 'phone' },
			{ name: 'telegram', value: 'Telegram', type: 'phone' },
		];

		tabs.addEventListener('click', (e) => {
			if (e.target.closest('div').dataset.btn) {
				form.dataset.context = e.target.closest('div').dataset.btn;
				for (var placeholder of placeholders) {
					if (placeholder.name === form.dataset.context) {
						input_contact.placeholder = placeholder.value;
						input_contact.setAttribute('type', placeholder.type);
					}
				}
				changeClass(e.target.closest('div'));

				if (e.target.closest('div').dataset.btn !== 'email') {
					form.elements['contact_way'].dispatchEvent(
						new Event('input', {
							bubbles: true,
							cancelable: true,
						})
					);
					form.elements['contact_way'].dispatchEvent(
						new Event('input', {
							bubbles: true,
							cancelable: true,
						})
					);
				}
			}
		});

		form.addEventListener('submit', function (e) {
			e.preventDefault();

			var is_valid = true;

			if (input_contact.value.trim() === '') {
				input_contact.parentElement.classList.add('invalid');
				is_valid = false;
			}
			if (input_name.value.trim() === '') {
				input_name.parentElement.classList.add('invalid');
				is_valid = false;
			}

			if (!is_valid) {
				return;
			}

			var data = new FormData(form);
			var dataObject = {};

			data.forEach(function (value, key) {
				dataObject[key] = value;
			});

			dataObject.page = page;
			dataObject.context = form.dataset.context;
			dataObject.time = moment().locale('ru').tz('Europe/Moscow').format('MMMM Do YYYY, HH:mm:ss');
			var dataJson = JSON.stringify(dataObject);

			postRequest(dataJson, 'scripts/form-handler.php');
		});

		function getRequest(body, endpoint) {}

		function postRequest(body, endpoint) {
			var overlay = document.createElement('div');
			overlay.classList.add('overlay');
			overlay.classList.add('consultation_overlay');
			overlay.style.display = 'flex';
			overlay.style.justifyContent = 'center';
			overlay.style.alignItems = 'center';
			overlay.innerHTML = `
				<div class="loader"></div>
			`;
			document.body.appendChild(overlay);
			document.body.style.overflowY = 'hidden';

			function killConsultation() {
				overlay.remove();
				document.body.style.overflowY = 'scroll';
			}

			fetch(endpoint, {
				method: 'POST',
				body: body,
			})
				.then((response) => {
					if (response.ok) {
						return response.text();
					} else {
						return `
							<div class="popup">
								<div class="popup_text_block">
								    <h1>Произошла ошибка</h1>
								    <p>К сожалению, по техническим причинам не удалось отправить вашу заявку</p>
								    <p>Пожалуйста, повторите попытку позже или свяжитесь с нами по телефону <a href="tel:+995598888118">+995 598 888 118</a></p>
								</div>
								<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
							</div>
						`;
					}
				})
				.then((data) => {
					overlay.innerHTML = data;
					overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
				})
				.catch((e) => {
					overlay.innerHTML = `
						<div class="popup">
							<div class="popup_text_block">
								<h1>Произошла ошибка</h1>
								<p>К сожалению, по техническим причинам не удалось отправить вашу заявку</p>
								<p>Пожалуйста, повторите попытку позже или свяжитесь с нами по телефону <a href="tel:+995598888118">+995 598 888 118</a></p>
							</div>
							<div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div>
						</div>
					`;
					overlay.querySelector('.popup_close').addEventListener('click', killConsultation);
				});
		}
		updateValidation();

		setInputFilter(form.elements['contact_way'], function (value) {
			return /^-?\d*$/.test(value);
		});
		function updateValidation() {
			for (var input of form.elements) {
				input.addEventListener('input', (e) => {
					e.target.parentElement.classList.remove('invalid');
					if (e.target.getAttribute('type') === 'phone') {
						setInputFilter(e.target, function (value) {
							return /^-?\d*$/.test(value);
						});
					} else {
					}
				});
			}
		}
	});
}
function setInputFilter(text_box, filter) {
	text_box.addEventListener('input', function () {
		if (filter(this.value) && text_box.type !== 'email') {
			this.previous_value = this.value;
			this.previous_selection_start = this.selection_start;
			this.oldSelectionEnd = this.selectionEnd;
		} else if (this.hasOwnProperty('previous_value') && text_box.type !== 'email') {
			this.value = this.previous_value;
		} else if (text_box.type !== 'email') {
			this.value = '';
		}
		this.removeEventListener('input', arguments.callee);
		console.log('filtered');
	});
}
