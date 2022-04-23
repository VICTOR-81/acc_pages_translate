'use strict';

function _toConsumableArray(arr) {
	return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
	throw new TypeError('Invalid attempt to spread non-iterable instance.In order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
}

function _unsupportedIterableToArray(o, minLen) {
	if (!o) return;
	if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
	var n = Object.prototype.toString.call(o).slice(8, -1);
	if (n === 'Object' && o.constructor) n = o.constructor.name;
	if (n === 'Map' || n === 'Set') return Array.from(o);
	if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
	if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
	if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
	if (len == null || len > arr.length) len = arr.length;
	for (var i = 0, arr2 = new Array(len); i < len; i++) {
		arr2[i] = arr[i];
	}
	return arr2;
}

document.addEventListener('DOMContentLoaded', function () {
	var cases = `{
		"rss": {
			"-version": "2.0",
			"-xmlns:excerpt": "http://wordpress.org/export/1.2/excerpt/",
			"-xmlns:content": "http://purl.org/rss/1.0/modules/content/",
			"-xmlns:wfw": "http://wellformedweb.org/CommentAPI/",
			"-xmlns:dc": "http://purl.org/dc/elements/1.1/",
			"-xmlns:wp": "http://wordpress.org/export/1.2/",
			"channel": {
				"title": "Jara Accounting",
				"link": "https://accounting.jara.ge",
				"description": "Бухгалтерия для людей",
				"pubDate": "Thu, 03 Feb 2022 11:03:58 +0000",
				"language": "ru-RU",
				"wp:wxr_version": "1.2",
				"wp:base_site_url": "https://accounting.jara.ge",
				"wp:base_blog_url": "https://accounting.jara.ge",
				"wp:author": [
					{
						"wp:author_id": "1",
						"wp:author_login": {
							"cdata_section": "ostashenkods"
						},
						"wp:author_email": {
							"cdata_section": "do@jara.ge"
						},
						"wp:author_display_name": {
							"cdata_section": "ostashenkods"
						},
						"wp:author_first_name": {
							"cdata_section": ""
						},
						"wp:author_last_name": {
							"cdata_section": ""
						}
					},
					{
						"wp:author_id": "3",
						"wp:author_login": {
							"cdata_section": "diana"
						},
						"wp:author_email": {
							"cdata_section": "a.sadykova@jara.ge"
						},
						"wp:author_display_name": {
							"cdata_section": "Анна Садыкова"
						},
						"wp:author_first_name": {
							"cdata_section": "Анна"
						},
						"wp:author_last_name": {
							"cdata_section": "Садыкова"
						}
					}
				],
				"generator": "https://wordpress.org/?v=5.8.3",
				"image": {
					"url": "https://accounting.jara.ge/wp-content/uploads/2019/10/favicon-150x150.png",
					"title": "Jara Accounting",
					"link": "https://accounting.jara.ge",
					"width": "32",
					"height": "32"
				},
				"item": [
					{
						"title": {
							"cdata_section": "Открытие расчетного счета для дочерней компании - звена международного бизнеса"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d1%80%d0%b0%d1%81%d1%87%d0%b5%d1%82%d0%bd%d0%be%d0%b3%d0%be-%d1%81%d1%87%d0%b5%d1%82%d0%b0-%d0%b4%d0%bb%d1%8f-%d0%b4%d0%be%d1%87%d0%b5%d1%80%d0%bd/",
						"pubDate": "Fri, 04 Dec 2020 12:37:21 +0000",
						"dc:creator": {
							"cdata_section": "ostashenkods"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6299"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Удаленное открытие счета для грузинской компании, бенефициаром которой является иностранная компания.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Позиция грузинских банков в отношении компаний, бенефициарами которых являются нерезиденты, всегда была более требовательная, это обусловлено, в первую очередь, регуляциями национального банка, валютным контролем и международным законодательством в сфере борьбы с легализацией доходов, полученных преступным путем. Так, например, в процессе открытия корпоративного счета для грузинской компании, являющейся дочерним предприятием белорусской компании, которая, в свою очередь, является дочерним предприятием кипрской компании, банк затребовал более 15 легализованных документов, от заверенных паспортов всех владельцев бизнеса на каждом этапе до выписок из Реестра и решений по каждому корпоративному звену.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Повышенное внимание к нерезидентам со стороны финансового учреждения - юридический отдел и служба безопасности банка в несколько этапов запросили более 15 уставных документов всех звеньев корпоративной структуры, в отсутствие публичной информации о данных требованиях.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Открытие мультивалютного счета и абсолютно прозрачная структура компании для банка, что является основным фактором доверия в дальнейшей работе.</p>&nbsp;<strong>Май-Июль 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6299",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:37:21"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:37:21"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:25:45"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:25:45"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d1%80%d0%b0%d1%81%d1%87%d0%b5%d1%82%d0%bd%d0%be%d0%b3%d0%be-%d1%81%d1%87%d0%b5%d1%82%d0%b0-%d0%b4%d0%bb%d1%8f-%d0%b4%d0%be%d1%87%d0%b5%d1%80%d0%bd"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d0%b1%d0%b0%d0%bd%d0%ba%d0%be%d0%b2%d1%81%d0%ba%d0%be%d0%b5-%d0%be%d0%b1%d1%81%d0%bb%d1%83%d0%b6%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5",
							"cdata_section": "Банковское обслуживание"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "199"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Банковское обслуживание"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7235"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Формирование налоговой политики компании - резидента виртуальной зоны Грузии"
						},
						"link": "https://accounting.jara.ge/portfolio/%d1%84%d0%be%d1%80%d0%bc%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%be%d0%b9-%d0%bf%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b8-%d0%ba%d0%be%d0%bc/",
						"pubDate": "Fri, 04 Dec 2020 12:35:14 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6312"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Формирование налоговой политики компании в части подоходного налога.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Перед подписанием договора на бухгалтерское и налоговое сопровождение был проведен анализ первичных выплат от имени компании - резидента виртуальной зоны Грузии. Данного рода компании освобождены от уплаты НДС, налога на прибыль, при этом обязанность по уплате подоходного налога (с выплат в адрес физических лиц) и налога у источника (с выплат за услуги за пределы Грузии) остается. Клиент ежемесячно заказывает часть разработок в различных странах (СНГ, Европа и Азия) и с данных сумм обязан уплачивать 10% налога у источника, что существенно снижает прибыльность услуг. Специалисты Jara Accounting сформировали список оптимальных юрисдикций - стран, с которыми у Грузии заключены соглашения об избежании двойного налогообложения, для легального избежания данного налога. Клиент в течение двух месяцев сменил поставщиков услуг на \u201Cбелый список\u201D и освободился от обязанности по уплате налога у источника.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Для выбора оптимального формата ведения расходов компании необходимо было проанализировать более 20 соглашений об избежании двойного налогообложения в кратчайшие сроки и вынести мотивированное заключение.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Значительное снижение налоговой нагрузки, ликвидация риска проведения налоговой проверки.</p>&nbsp;<strong>Апрель 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6312",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:35:14"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:35:14"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:28:11"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:28:11"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d1%84%d0%be%d1%80%d0%bc%d0%b8%d1%80%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5-%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%be%d0%b9-%d0%bf%d0%be%d0%bb%d0%b8%d1%82%d0%b8%d0%ba%d0%b8-%d0%ba%d0%be%d0%bc"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "tax",
							"cdata_section": "Налоговая оптимизация"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "28"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Налоговая оптимизация"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7238"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Открытие компании под ключ (Юстиция, налоговая, банк) с бенефициарами из разных стран"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b8-%d0%bf%d0%be%d0%b4-%d0%ba%d0%bb%d1%8e%d1%87-%d1%8e%d1%81%d1%82%d0%b8%d1%86%d0%b8%d1%8f-%d0%bd%d0%b0/",
						"pubDate": "Fri, 04 Dec 2020 12:39:39 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6317"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Удаленная регистрация компании с бенефициарами из России и Греции.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>В процессе подготовки документов для удаленной регистрации бизнеса - Общества с ограниченной ответственностью с двумя бенефициарами физическими лицами, один из которых проживает в России, а второй партнер - в Греции, были сформированы два пакета документов - на русском и греческом языках. Будущие владельцы оформили у нотариусов в своих странах документы по образцу Jara Accounting и передали экспресс-почтой. Для Греции было обязательно апостилирование документов. По факту прохождения регистрации в Юстиции - аналогично был оформлен пакет документов для TBC банка, мультивалютный счет компании был открыт в течение трех рабочих дней с момента получения мультиязычных документов в Грузии.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Перевод и заверение документов в период пандемии с греческого языка на грузинский в течение 2 рабочих дней.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Удаленная регистрация компании и банковского счета с мультиязычными бенефициарами в течение 8 рабочих дней с момента получения документов в Грузии.</p>&nbsp;<strong>Август 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6317",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:39:39"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:39:39"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:10:13"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:10:13"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b8-%d0%bf%d0%be%d0%b4-%d0%ba%d0%bb%d1%8e%d1%87-%d1%8e%d1%81%d1%82%d0%b8%d1%86%d0%b8%d1%8f-%d0%bd%d0%b0"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%b1%d0%b8%d0%b7%d0%bd%d0%b5%d1%81%d0%b0",
							"cdata_section": "Регистрация бизнеса"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "198"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Регистрация бизнеса"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7232"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Налоговая оптимизация для туристической компании"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%b0%d1%8f-%d0%be%d0%bf%d1%82%d0%b8%d0%bc%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f-%d0%b4%d0%bb%d1%8f-%d1%82%d1%83%d1%80%d0%b8%d1%81%d1%82%d0%b8%d1%87%d0%b5/",
						"pubDate": "Fri, 04 Dec 2020 12:37:32 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6319"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Налоговая оптимизация для компании в сфере MICE (корпоративного туризма). У собственника возникли сомнения в компетентности предыдущего бухгалтера.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Если компания является посредником между туристом и отелями, хостелами, ресторанами, турами по стране и т.д, предоставляет не менее 2-х услуг в сфере туризма, то она имеет право на полный возврат входящего НДС, вплоть до упрощенного вывода на счет компании. Например, ваше агентство заключает договор с туристической группой о бронировании отеля и трансфере из аэропорта, оплата за отель и трансфер производится вами с НДС и если вы встали на налоговый учет, то при заполнение декларации эта сумма вам будет полностью возмещена. То есть при регистрации туристической компании ей сразу надо было встать на учет в качестве плательщика НДС, входящий НДС принимать к зачету, а исходящий не платить - официально на основании льготы Правительства. По факту в данном кейсе компания за два года деятельности потеряла более 15 000 $ невозмещенного НДС. По результатам налогового заключения, собственник бизнеса встал на правильную налоговую систему и уволил некомпетентного бухгалтера.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>У клиента, в связи с длительной работой с некомпетентным бухгалтером, было сформировано ошибочное мнение о порядке начисления и уплаты налогов, юристы компании в течение 1 рабочего дня должны были подготовить полную сводку законодательных актов по вопросам, касающихся налогообложения туристической сферы.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Применение налоговых льгот и существенная налоговая оптимизация бизнеса.</p>&nbsp;<strong>Июнь 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6319",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:37:32"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:37:32"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 18:22:48"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 14:22:48"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%b0%d1%8f-%d0%be%d0%bf%d1%82%d0%b8%d0%bc%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f-%d0%b4%d0%bb%d1%8f-%d1%82%d1%83%d1%80%d0%b8%d1%81%d1%82%d0%b8%d1%87%d0%b5"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "tax",
							"cdata_section": "Налоговая оптимизация"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "28"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Налоговая оптимизация"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7266"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Открытие компании в Свободной индустриальной зоне удаленно"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b8-%d0%b2-%d1%81%d0%b2%d0%be%d0%b1%d0%be%d0%b4%d0%bd%d0%be%d0%b9-%d0%b8%d0%bd%d0%b4%d1%83%d1%81%d1%82/",
						"pubDate": "Fri, 04 Dec 2020 12:33:04 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6320"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Удаленная регистрация в СИЗ для налоговой оптимизации бизнеса клиента.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Оба бенефициара будущей компании базировались в период карантина в Португалии, соответственно после проведения подробной налоговой консультации и выбора оптимальной свободной индустриальной зоны, а также вида лицензии, клиентам был направлен электронный пакет документов для одновременного оформления компании в Доме Юстиции, налоговой службы и банке Грузии. По факту получения апостилированных документов из Европы, в течение 3 рабочих дней была оформлена безналоговая компания и соответствующая лицензия, которая сразу заключила свой первый контракт с американским контрагентом.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>В связи с ограничениями в работе государственных органов в стране пребывания клиента и длительностью оформления документов, возникла необходимость провести весь процесс в Грузии в течение 1 рабочего дня - перевести и нотариально заверить документы, открыть компанию и оформить лицензию СИЗ.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Безналоговая компания, зарегистрированная удаленно в период карантина.</p>&nbsp;<strong>Май 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6320",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:33:04"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:33:04"
						},
						"wp:post_modified": {
							"cdata_section": "2021-11-01 17:22:13"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-11-01 13:22:13"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b8-%d0%b2-%d1%81%d0%b2%d0%be%d0%b1%d0%be%d0%b4%d0%bd%d0%be%d0%b9-%d0%b8%d0%bd%d0%b4%d1%83%d1%81%d1%82"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%b1%d0%b8%d0%b7%d0%bd%d0%b5%d1%81%d0%b0",
							"cdata_section": "Регистрация бизнеса"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "198"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Регистрация бизнеса"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7247"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Восстановление налогового и бухгалтерского учета Call-центра"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%b2%d0%be%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%b8-%d0%b1%d1%83%d1%85%d0%b3%d0%b0%d0%bb%d1%82/",
						"pubDate": "Fri, 04 Dec 2020 12:38:41 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6321"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Восстановление бухгалтерской программы, проверка и корректировка налоговых деклараций для компании, основным видом деятельности которой является предоставление аутсорсинговых услуг Call-центра за год активной финансовой деятельности.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>На основании выписки из банка проанализированы все операции компании, спецификой деятельности которой с точки зрения налогового учета является обработка более 30 ежемесячных зарплатных выплат, оформление подоходных и пенсионных деклараций. По факту в компании не велся бухгалтерский учет, а налоги с начисленных зарплат перечислялись по приблизительным расчетам на единый налоговый счет без подачи каких-либо деклараций, пенсионные декларации также поданы не были, несмотря на то, что часть сотрудников являются гражданами Грузии в возрасте до 45 лет. В течение рабочей недели все операции компании были восстановлены в облачной бухгалтерии, поданы необходимые декларации и уплачены пени за просрочку.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Отсутствие первичной документации и принципиального понимания процесса ее оформления со стороны клиента.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Восстановленный налоговый и бухгалтерский учет, ликвидация риска проведения налоговой проверки.</p>&nbsp;<strong>Сентябрь 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6321",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:38:41"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:38:41"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 18:17:57"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 14:17:57"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%b2%d0%be%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%b8-%d0%b1%d1%83%d1%85%d0%b3%d0%b0%d0%bb%d1%82"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "accounting",
							"cdata_section": "Бухгалтерский учет"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "25"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": " Бухгалтерский учет"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7260"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Получение статуса виртуальной зоны в течение 10 рабочих дней"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%bf%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d1%81%d1%82%d0%b0%d1%82%d1%83%d1%81%d0%b0-%d0%b2%d0%b8%d1%80%d1%82%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d0%be%d0%b9-%d0%b7%d0%be%d0%bd%d1%8b-%d0%b2/",
						"pubDate": "Fri, 04 Dec 2020 12:38:26 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6340"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Получение статуса виртуальной зоны в кратчайшие сроки.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Для клиента - компании-разработчика мобильных приложений на этапе регистрации был сформирован перечень данных для подачи заявки в виртуальную зону Министерства финансов республики Грузия и в течение 10 рабочих дней после подачи заявки, без каких-либо дополнительных запросов со стороны Министерства финансов были отправлены письма о намерениях и проекты контрактов с будущими клиентами компании.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Систематическое нарушение сроков рассмотрения заявок на присвоения статуса виртуальной зоны со стороны государственных органов.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Получение статуса виртуальной зоны компанией - разработчиком IT-продуктов в течение 10 рабочих дней, налоговая оптимизация.</p>&nbsp;<strong>Сентябрь 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6340",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:38:26"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:38:26"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 18:19:59"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 14:19:59"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%bf%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d1%81%d1%82%d0%b0%d1%82%d1%83%d1%81%d0%b0-%d0%b2%d0%b8%d1%80%d1%82%d1%83%d0%b0%d0%bb%d1%8c%d0%bd%d0%be%d0%b9-%d0%b7%d0%be%d0%bd%d1%8b-%d0%b2"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%b1%d0%b8%d0%b7%d0%bd%d0%b5%d1%81%d0%b0",
							"cdata_section": "Регистрация бизнеса"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "198"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Регистрация бизнеса"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7263"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Восстановление налогового учета для ИП в сфере ресторанного бизнеса"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%b2%d0%be%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d1%83%d1%87%d0%b5%d1%82%d0%b0-%d0%b4%d0%bb%d1%8f/",
						"pubDate": "Fri, 04 Dec 2020 14:01:54 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6341"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Проверить и откорректировать налоговые декларации предприятия общественного питания с оборотами до 300 000 лари в год. У собственника возникли сомнения в компетентности предыдущего бухгалтера.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>На основании банковской выписки по всем движениям денежных средств ресторана и данных по кассе была проведена проверка поданных с начала деятельности деклараций и выявлено несоответствие подоходных деклараций (зарплатных) с фактическими выплатами, а также отсутствие пенсионных деклараций по сотрудникам моложе 45 лет. Декларации были откорректированы и отправлены, налог и пени уплачены. Основной результат работы - смена налоговой системы клиента на более лояльную и выгодную - вместо обычного ИП (налог - 20% c прибыли) клиент зарегистрировался в качестве ИП с малым статусом (налог - 1% c выручки).</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Обработка и корректировка более 20 ошибочных деклараций, фактически у клиента, в связи с длительной работой с некомпетентным бухгалтером, было сформировано ошибочное мнение о порядке начисления и уплаты налогов.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Восстановленный налоговый учет, значительное снижение налоговой нагрузки для клиента.</p>&nbsp;<strong>Июль 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6341",
						"wp:post_date": {
							"cdata_section": "2020-12-04 18:01:54"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 14:01:54"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:07:32"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:07:32"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%b2%d0%be%d1%81%d1%81%d1%82%d0%b0%d0%bd%d0%be%d0%b2%d0%bb%d0%b5%d0%bd%d0%b8%d0%b5-%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d1%83%d1%87%d0%b5%d1%82%d0%b0-%d0%b4%d0%bb%d1%8f"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "accounting",
							"cdata_section": "Бухгалтерский учет"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "25"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": " Бухгалтерский учет"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7229"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Внесение изменений в учредительные документы ООО по доверенности"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%b2%d0%bd%d0%b5%d1%81%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b9-%d0%b2-%d1%83%d1%87%d1%80%d0%b5%d0%b4%d0%b8%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%b4/",
						"pubDate": "Fri, 04 Dec 2020 12:14:22 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6342"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Оформить новый бессрочный юридический адрес для компании - резидента виртуальной зоны Грузии.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Провайдер юридического адреса для нашего клиента в 2020 году значительно завысил стоимость услуги на фоне карантина и отсутствия возможности клиенту урегулировать вопрос лично. Компания Jara Accounting предложила переоформить бессрочный юридический адрес на свой, без каких-либо будущих доплат и комиссий. На основании доверенности и решения директора компании на немецком языке, подготовленных и заверенных сотрудниками компании, в течение 3 рабочих дней по факту получения документов из Берлина, необходимые изменения были утверждены Домом Юстиции.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>При внесении изменений в регистрационные данные компании были обнаружены технические ошибки в документации, которые также было необходимо устранить по ограниченной доверенности.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Бессрочный юридический адрес и оптимизация ежегодных выплат на обслуживание компании.</p>&nbsp;<strong>Июнь 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6342",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:14:22"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:14:22"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:51:25"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:51:25"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%b2%d0%bd%d0%b5%d1%81%d0%b5%d0%bd%d0%b8%d0%b5-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d0%b9-%d0%b2-%d1%83%d1%87%d1%80%d0%b5%d0%b4%d0%b8%d1%82%d0%b5%d0%bb%d1%8c%d0%bd%d1%8b%d0%b5-%d0%b4"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%b1%d0%b8%d0%b7%d0%bd%d0%b5%d1%81%d0%b0",
							"cdata_section": "Регистрация бизнеса"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "198"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": " Регистрация бизнеса"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7250"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Налоговая оптимизация и построение корпоративной структуры группы компаний"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%b0%d1%8f-%d0%be%d0%bf%d1%82%d0%b8%d0%bc%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f-%d0%b8-%d0%bf%d0%be%d1%81%d1%82%d1%80%d0%be%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba/",
						"pubDate": "Fri, 04 Dec 2020 14:06:30 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6343"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Легально снизить налоговую нагрузку для группы компаний - грузинский, кипрский и российские субъекты.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>Налоговыми юристами - специалистами в области грузинского и международного налогового права, была выстроена оптимальная корпоративная структура группы компаний, в которой были выделены обслуживающие компании, такие как российская - с наиболее высокой налоговой нагрузкой - на нее была перенесена расходная часть, кипрская - для переноса активов и грузинская - для частичного переноса активов и полного цикла производства.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Обработка документов, регламентирующих порядок налогообложения в России, Грузии и на Кипре, на трех языках.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Связанная структура группы компании и легально сниженная налоговая нагрузка.</p>&nbsp;<strong>Декабрь 2019</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6343",
						"wp:post_date": {
							"cdata_section": "2020-12-04 18:06:30"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 14:06:30"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:05:18"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:05:18"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%bd%d0%b0%d0%bb%d0%be%d0%b3%d0%be%d0%b2%d0%b0%d1%8f-%d0%be%d0%bf%d1%82%d0%b8%d0%bc%d0%b8%d0%b7%d0%b0%d1%86%d0%b8%d1%8f-%d0%b8-%d0%bf%d0%be%d1%81%d1%82%d1%80%d0%be%d0%b5%d0%bd%d0%b8%d0%b5-%d0%ba"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "tax",
							"cdata_section": "Налоговая оптимизация"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "28"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Налоговая оптимизация"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7226"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Регистрация компании - производителя алкогольной продукции"
						},
						"link": "https://accounting.jara.ge/portfolio/%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b8-%d0%bf%d1%80%d0%be%d0%b8%d0%b7%d0%b2%d0%be%d0%b4%d0%b8%d1%82%d0%b5%d0%bb%d1%8f/",
						"pubDate": "Fri, 04 Dec 2020 12:10:04 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6344"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Выбрать оптимальную форму бизнеса для производителя крепкой алкогольной продукции и получить все необходимые разрешения.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>В течение двух рабочих дней были подготовлены учредительные документы и зарегистрирована оптимальная форма компании для производителя алкогольной продукции - Общество с ограниченной ответственностью. В Налоговой службе рассчитаны суммы акцизов на основании данных о крепости нескольких видов продукции и их ценой реализации, в сопровождении сотрудников Jara Accounting проведена проверка производства, по успешному результату которой заказаны и выпущены акцизные марки.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>Процесс был усложнен компанией - изготовителем акцизных марок, имеющей уникальное право на их выпуск, грубо нарушались сроки их оформления и передачи.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Легализованное производство крепкой алкогольной продукции в Грузии.</p>&nbsp;<strong>Июнь-Июль 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6344",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:10:04"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:10:04"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:59:54"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:59:54"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%ba%d0%be%d0%bc%d0%bf%d0%b0%d0%bd%d0%b8%d0%b8-%d0%bf%d1%80%d0%be%d0%b8%d0%b7%d0%b2%d0%be%d0%b4%d0%b8%d1%82%d0%b5%d0%bb%d1%8f"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d1%80%d0%b5%d0%b3%d0%b8%d1%81%d1%82%d1%80%d0%b0%d1%86%d0%b8%d1%8f-%d0%b1%d0%b8%d0%b7%d0%bd%d0%b5%d1%81%d0%b0",
							"cdata_section": "Регистрация бизнеса"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "198"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Регистрация бизнеса"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7256"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Дистанционное открытие ИП для легализации доходов, поступающих на счет в грузинском банке"
						},
						"link": "https://accounting.jara.ge/portfolio/%d0%b4%d0%b8%d1%81%d1%82%d0%b0%d0%bd%d1%86%d0%b8%d0%be%d0%bd%d0%bd%d0%be%d0%b5-%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d0%b8%d0%bf-%d0%b4%d0%bb%d1%8f-%d0%bb%d0%b5%d0%b3%d0%b0%d0%bb%d0%b8/",
						"pubDate": "Fri, 04 Dec 2020 12:12:41 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6345"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<h1 class='case_head'>ЗАДАЧА</h1><p style='text-align: justify;'>Снять риск закрытия банковского счета для нерезидента Грузии.</p><h1 class='case_head'>РЕШЕНИЕ</h1><p style='text-align: justify;'>В течение года клиент переводил часть своих доходов от предоставления IT-услуг за пределами Грузии на счет в грузинском банке, будучи при этом налоговым резидентом Украины и уплачивая налог по месту регистрации. При проведении проверки со стороны банка было принято решение о легализации дохода на территории Грузии, регистрации Индивидуального предпринимателя с облегченной налоговой нагрузкой в 1% и уплаты налогов в соответствии с грузинским законодательством. Удаленно по доверенности были выполнены все юридические процедуры и предоставлены необходимые документы в банк.</p><h1 class='case_head'>ТРУДНОСТИ</h1><p style='text-align: justify;'>В процессе оформления ИП дважды банк запрашивал полную проверку деятельности клиента.</p><h1 class='case_head'>РЕЗУЛЬТАТ</h1><p style='text-align: justify;'>Повышение репутации клиента в банке, активный расчетный счет и налоговая оптимизация.</p>&nbsp;<strong>Июль 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6345",
						"wp:post_date": {
							"cdata_section": "2020-12-04 16:12:41"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-04 12:12:41"
						},
						"wp:post_modified": {
							"cdata_section": "2021-03-25 17:54:47"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-03-25 13:54:47"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "%d0%b4%d0%b8%d1%81%d1%82%d0%b0%d0%bd%d1%86%d0%b8%d0%be%d0%bd%d0%bd%d0%be%d0%b5-%d0%be%d1%82%d0%ba%d1%80%d1%8b%d1%82%d0%b8%d0%b5-%d0%b8%d0%bf-%d0%b4%d0%bb%d1%8f-%d0%bb%d0%b5%d0%b3%d0%b0%d0%bb%d0%b8"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "%d0%b1%d0%b0%d0%bd%d0%ba%d0%be%d0%b2%d1%81%d0%ba%d0%be%d0%b5-%d0%be%d0%b1%d1%81%d0%bb%d1%83%d0%b6%d0%b8%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5",
							"cdata_section": "Банковское обслуживание"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_location_migration_done"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "199"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Банковское обслуживание"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "6300"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7253"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Tax optimization and building the corporate structure of a group of companies"
						},
						"link": "https://accounting.jara.ge/portfolio/tax-optimization-and-building-the-corporate-structure-of-a-group-of-companies/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 10:49:58 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6407"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "<p>[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK[/heading]</p><p style='text-align: justify;'>Legally reduce the tax burden for a group of companies - Georgian, Cypriot and Russian entities.</p><p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]</p><p style='text-align: justify;'>Tax lawyers - experts in Georgian and international tax law, was constructed optimal corporate structure Group, which were allocated service companies, such as the Russian - with the highest tax load - it was expenditure part moved, Cyprus - to transfer assets and Georgian - for partial transfer of assets and full production cycle.</p><p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]</p><p style='text-align: justify;'>Processing of documents regulating the order of taxation in Russia, Georgia and Cyprus, in three languages.</p><p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]</p><p style='text-align: justify;'>Associated group structure and legally reduced tax burden.</p><p>&nbsp;</p><p><strong>December 2019</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']</p>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6407",
						"wp:post_date": {
							"cdata_section": "2020-12-11 14:49:58"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 10:49:58"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 14:57:37"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 10:57:37"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "tax-optimization-and-building-the-corporate-structure-of-a-group-of-companies"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "tax-optimization",
							"cdata_section": "Tax optimization"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Tax optimization"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "203"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7227"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Restoration of tax accounting for individual entrepreneurs in the restaurant business"
						},
						"link": "https://accounting.jara.ge/portfolio/restoration-of-tax-accounting-for-individual-entrepreneurs-in-the-restaurant-business/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:03:02 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6410"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK[/heading]<p style='text-align: justify;'>Check and correct tax declarations of public catering enterprises with a turnover of up to GEL 300,000 per year. The owner has doubts about the competence of the previous accountant.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>Based on the bank statement for all cash flows of the restaurant and cash register data, the declarations submitted from the beginning of the activity were checked and the discrepancy between the income declarations (salary) and actual payments was revealed, as well as the absence of pension declarations for employees under 45 years old. Declarations have been revised and sent, tax and interest paid. The main result of the work is the change of the client's tax system to a more loyal and profitable one - instead of the usual individual entrepreneur (tax - 20% from the profit), the client registered as an individual entrepreneur with a small status (tax - 1% from the proceeds).</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>Processing and correcting more than 20 erroneous declarations, in fact, the client, due to long-term work with an incompetent accountant, formed an erroneous opinion about the procedure for calculating and paying taxes.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Restored tax accounting, a significant reduction in the tax burden for the client.</p>&nbsp;<strong>July 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6410",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:03:02"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:03:02"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:03:02"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:03:02"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "restoration-of-tax-accounting-for-individual-entrepreneurs-in-the-restaurant-business"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "accounting-en",
							"cdata_section": "Accounting"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": " Accounting"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7230"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Turnkey registration of a company (House of Justice, tax, bank) with beneficiaries from different countries"
						},
						"link": "https://accounting.jara.ge/portfolio/turnkey-registration-of-a-company-house-of-justice-tax-bank-with-beneficiaries-from-different-countries/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:07:52 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6411"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Remote registration of a company with beneficiaries from Russia and Greece.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>In the process of preparing documents for remote registration of a business - a limited liability company with two beneficiaries, individuals, one of whom lives in Russia, and the second partner - in Greece, two sets of documents were formed - in Russian and Greek. The future owners issued documents based on the model of Jara Accounting with notaries in their countries and sent them by express mail. Greece was required to apostille documents. Upon registration with Justice, a package of documents for TBC Bank was similarly drawn up, the company's multicurrency account was opened within three working days from the date of receipt of multilingual documents in Georgia.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>Translation and certification of documents during a pandemic from Greek into Georgian within 2 working days.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Remote registration of a company and a bank account with multilingual beneficiaries within 8 working days from the receipt of documents in Georgia.</p>&nbsp;<strong>August 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6411",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:07:52"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:07:52"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:07:52"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:07:52"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "turnkey-registration-of-a-company-house-of-justice-tax-bank-with-beneficiaries-from-different-countries"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "business-registration",
							"cdata_section": "Business registration"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Business registration"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7233"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Restoration of tax and accounting of the Call-center"
						},
						"link": "https://accounting.jara.ge/portfolio/restoration-of-tax-and-accounting-of-the-call-center/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:12:05 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6412"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Restoration of the accounting program, verification, and correction of tax returns for a company whose main activity is the provision of outsourcing Call Center services for a year of active financial activity.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>On the basis of a bank statement, all operations of the company were analyzed, the specificity of which from the point of view of tax accounting is the processing of more than 30 monthly salary payments, the preparation of income and pension declarations. In fact, the company did not keep accounting records, and taxes on accrued salaries were transferred according to approximate calculations to a single tax account without filing any declarations, pension declarations were not submitted either, despite the fact that some of the employees are citizens of Georgia under the age of 45 years old. During the working week, all of the company's operations were restored in cloud accounting, the necessary returns were filed and late fees paid.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>Lack of primary documentation and a fundamental understanding of the process of its registration on the part of the Client.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Restored tax and accounting, elimination of the risk of a tax audit.</p>&nbsp;<strong>September 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6412",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:12:05"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:12:05"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:12:05"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:12:05"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "restoration-of-tax-and-accounting-of-the-call-center"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "accounting-en",
							"cdata_section": "Accounting"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": " Accounting"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7261"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Obtaining the status of a virtual zone within 10 working days"
						},
						"link": "https://accounting.jara.ge/portfolio/obtaining-the-status-of-a-virtual-zone-within-10-working-days/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:16:25 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6413"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Obtaining the status of a virtual zone as soon as possible.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>For a client - a mobile application developer, at the registration stage, a list of data was generated for submitting an application to the virtual zone of the Ministry of Finance of the Republic of Georgia and within 10 working days, after the application was submitted, letters of intent were sent without any additional requests from the Ministry of Finance and draft contracts with future clients of the company.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>The systematic violation of terms of consideration of applications for assignment virtual zone status by the public authorities.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Obtaining the status of a virtual zone by a company - a developer of IT products within 10 working days, tax optimization.</p>&nbsp;<strong>September 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6413",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:16:25"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:16:25"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:16:25"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:16:25"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "obtaining-the-status-of-a-virtual-zone-within-10-working-days"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "business-registration",
							"cdata_section": "Business registration"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Business registration"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7264"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Tax optimization for a travel company"
						},
						"link": "https://accounting.jara.ge/portfolio/tax-optimization-for-a-travel-company/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:20:46 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6414"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Tax optimization for a company in the field of MICE (corporate tourism). The owner has doubts about the competence of the previous accountant.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>If a company is an intermediary between a tourist and hotels, hostels, restaurants, tours around the country, etc., provides at least 2 services in the field of tourism, then it has the right to a full refund of incoming VAT, up to a simplified withdrawal to the company's account. For example, your agency concludes an agreement with a tourist group on booking a hotel and transferring from the airport, payment for the hotel and transfer is made by you with VAT, and if you are registered with tax, then when filling out the declaration, this amount will be fully refunded to you. That is, when registering a travel company, it immediately had to register as a VAT payer, accept incoming VAT for offset, and not pay outgoing VAT - officially on the basis of a Government benefit. In fact, in this case, the company lost more than $ 15,000 of unrecovered VAT over two years of activity. Based on the results of the tax report, the business owner adopted the correct tax system and fired the incompetent accountant.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>The client, due to long-term work with an incompetent accountant, formed an erroneous opinion about the procedure for calculating and paying taxes, the company's lawyers had to prepare a complete summary of legislative acts on issues related to taxation of the tourism sector within 1 working day.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Application of tax incentives and significant tax optimization of the business.</p>&nbsp;<strong>June 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6414",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:20:46"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:20:46"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:20:46"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:20:46"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "tax-optimization-for-a-travel-company"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "tax-optimization",
							"cdata_section": "Tax optimization"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Tax optimization"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7267"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Opening a current account for a subsidiary company - part of an international business"
						},
						"link": "https://accounting.jara.ge/portfolio/opening-a-current-account-for-a-subsidiary-company-part-of-an-international-business/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:24:53 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6415"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Remote opening of a bank account for a Georgian company, the beneficiary of which is a foreign company.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>The position of Georgian banks in relation to companies whose beneficiaries are non-residents has always been more demanding, this is primarily due to the regulations of the national bank, currency control, and international legislation in the field of combating the legalization of proceeds from crime. For example, in the process of opening a corporate account for a Georgian company, which is a subsidiary of a Belarusian company, which, in turn, is a subsidiary of a Cypriot company, the bank demanded more than 15 legalized documents, from certified passports of all business owners at each stage to extracts from Register and decisions for each corporate link. Jara Accounting specialists, acting under a general power of attorney on behalf of the director of the company, for several months accompanied the process of opening an account, collected, translated, and legalized all documentation on the territory of Georgia.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>Increased attention to non-residents on the part of the financial institution - the legal department and the bank's security service in several stages requested more than 15 statutory documents of all parts of the corporate structure, in the absence of public information about these requirements.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Opening a multi-currency account and an absolutely transparent company structure for the bank, which is the main factor of trust in further work.</p>&nbsp;<strong>May-July 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6415",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:24:53"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:24:53"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:24:53"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:24:53"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "opening-a-current-account-for-a-subsidiary-company-part-of-an-international-business"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "banking-service",
							"cdata_section": "Banking service"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Banking service"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7236"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Formation of the tax policy of the company - resident of the virtual zone of Georgia"
						},
						"link": "https://accounting.jara.ge/portfolio/formation-of-the-tax-policy-of-the-company-resident-of-the-virtual-zone-of-georgia/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:28:48 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6416"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Formation of the company's tax policy in terms of income tax.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>Before signing the contract for accounting and tax support, an analysis of primary payments was carried out on behalf of a company that is a resident of the virtual zone of Georgia. These types of companies are exempt from VAT, income tax, while the obligation to pay income tax (from payments to individuals) and tax at the source (from payments for services outside Georgia) remains. The client monthly orders part of the developments in various countries (CIS, Europe, and Asia) and is obliged to pay 10% of the tax at the source from these amounts, which significantly reduces the profitability of services. Jara Accounting specialists have compiled a list of optimal jurisdictions - countries with which Georgia has concluded agreements on the avoidance of double taxation, for the legal avoidance of this tax. The client changed the service providers to a \u201Cwhite list\u201D within two months and was released from the obligation to pay tax at source.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>To select the optimal format for managing the company's expenses, it was necessary to analyze more than 20 agreements on the avoidance of double taxation in the shortest possible time and make a reasoned conclusion.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>A significant reduction in the tax burden, eliminating the risk of a tax audit.</p>&nbsp;<strong>April 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6416",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:28:48"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:28:48"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:28:48"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:28:48"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "formation-of-the-tax-policy-of-the-company-resident-of-the-virtual-zone-of-georgia"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "tax-optimization",
							"cdata_section": "Tax optimization"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_primary_portfolio_category"
								},
								"wp:meta_value": {
									"cdata_section": "203"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": " Tax optimization"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "30"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7239"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Opening a company in the Free Industrial Zone remotely"
						},
						"link": "https://accounting.jara.ge/portfolio/opening-a-company-in-the-free-industrial-zone-remotely/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:32:11 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6417"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK [/heading]<p style='text-align: justify;'>Remote registration in FIZ for tax optimization of the client's business.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>Both beneficiaries of the future company were based in Portugal during the quarantine period, respectively, after conducting a detailed tax consultation and choosing the optimal free industrial zone, as well as the type of license, an electronic package of documents was sent to clients for the simultaneous registration of the company at the House of Justice, the tax service and the Bank of Georgia. Upon receipt of apostilled documents from Europe, a tax-free company and a corresponding license were issued within 3 working days, which immediately entered into its first contract with an American counterparty. Upon receipt of apostilled documents from Europe, a tax-free company and a corresponding license were issued within 3 working days, which immediately entered into its first contract with an American counterparty.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>Due to the restrictions on the work of state bodies in the client's country of residence and the duration of the paperwork, it became necessary to carry out the entire process in Georgia within 1 working day - to translate and notarize documents, open a company and issue a FIZ license.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Tax-free company registered remotely during the quarantine period.</p>&nbsp;<strong>May 2020</strong>"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6417",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:32:11"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:32:11"
						},
						"wp:post_modified": {
							"cdata_section": "2021-11-01 17:29:27"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2021-11-01 13:29:27"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "opening-a-company-in-the-free-industrial-zone-remotely"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "business-registration",
							"cdata_section": "Business registration"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Business registration"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7248"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_estimated-reading-time-minutes"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Changes to the constituent documents of an LLC by power of attorney"
						},
						"link": "https://accounting.jara.ge/portfolio/changes-to-the-constituent-documents-of-an-llc-by-power-of-attorney/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:35:30 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6418"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK[/heading]<p style='text-align: justify;'>To issue a new permanent legal address for a resident company of the virtual zone of Georgia.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>The provider of the legal address for our client in 2020 significantly overestimated the cost of the service against the background of quarantine and the inability of the client to resolve the issue personally. Jara Accounting offered to re-register an unlimited legal address to its own, without any future surcharges and commissions. Based on the power of attorney and the decision of the director of the company in German, prepared and certified by the employees of the company, within 3 working days upon receipt of documents from Berlin, the necessary changes were approved by the House of Justice.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>During the introduction of changes to the registration data of the company were found technical errors in the documentation, which also had to be eliminated by the limited power of attorney.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Indefinite legal address and optimization of annual payments for company services.</p>&nbsp;<strong>June 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6418",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:35:30"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:35:30"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:35:30"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:35:30"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "changes-to-the-constituent-documents-of-an-llc-by-power-of-attorney"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "business-registration",
							"cdata_section": "Business registration"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Business registration"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7251"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Remote opening of an IE to legalize income received on an account in a Georgian bank"
						},
						"link": "https://accounting.jara.ge/portfolio/remote-opening-of-an-ie-to-legalize-income-received-on-an-account-in-a-georgian-bank/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:39:06 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6419"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK[/heading]<p style='text-align: justify;'>Remove the risk of closing a bank account for a non-resident of Georgia.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>During the year, the client transferred part of his income from the provision of IT services outside Georgia to an account in a Georgian bank, while being a tax resident of Ukraine and paying tax at the place of registration. During the audit, the bank made a decision to legalize income on the territory of Georgia, register an Individual Entrepreneur with a lightened tax burden of 1% and pay taxes in accordance with Georgian legislation. All legal procedures were performed remotely by proxy and the necessary documents were submitted to the bank.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>In the process of registering an Individual Entrepreneur, the bank twice requested a full check of the client's activities.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Improvement of the client's reputation in the bank, active checking account, and tax optimization.</p>&nbsp;<strong>July 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6419",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:39:06"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:39:06"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:39:06"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:39:06"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "remote-opening-of-an-ie-to-legalize-income-received-on-an-account-in-a-georgian-bank"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "banking-service",
							"cdata_section": "Banking service"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Banking service"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7254"
								}
							}
						]
					},
					{
						"title": {
							"cdata_section": "Registration of a company - producer of alcoholic beverages, obtaining permits, and excise taxes."
						},
						"link": "https://accounting.jara.ge/portfolio/registration-of-a-company-producer-of-alcoholic-beverages-obtaining-permits-and-excise-taxes/?lang=en",
						"pubDate": "Fri, 11 Dec 2020 11:43:23 +0000",
						"dc:creator": {
							"cdata_section": "diana"
						},
						"guid": {
							"-isPermaLink": "false",
							"#text": "https://accounting.jara.ge/?post_type=portfolio&p=6420"
						},
						"description": {},
						"content_encoded": {
							"cdata_section": "[heading size='2' heading_class='style-3' heading_style='divider-sm']TASK[/heading]<p style='text-align: justify;'>It was necessary to choose the optimal form of business for the manufacturer of strong alcoholic beverages and obtain all the necessary permits.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']SOLUTION[/heading]<p style='text-align: justify;'>Within two working days, the constituent documents were prepared and the optimal form of the company for the producer of alcoholic beverages was registered - a limited liability company. The Tax Service calculated the amount of excise taxes on the basis of data on the strength of several types of products and their sales price, accompanied by employees of Jara Accounting, an audit of production was carried out, on the successful result of which excise stamps were ordered and issued.</p>[vc_column width='1/2'][heading size='2' heading_class='style-3' heading_style='divider-sm']DIFFICULTIES[/heading]<p style='text-align: justify;'>The process was complicated by the company - the manufacturer of excise stamps, which has a unique right to issue them; the terms of their registration and transfer were grossly violated.</p>[heading size='2' heading_class='style-3' heading_style='divider-sm']RESULT[/heading]<p style='text-align: justify;'>Legalized production of strong alcoholic beverages in Georgia.</p>&nbsp;<strong>June-July 2020</strong>[vc_row css='.vc_custom_1607077188610{margin-top: 100px !important;}'][appointment contact_form='6408' image_u='2537' title='Are you solving a similar problem?' text='Send us the details and we will give you a free consultation and a price quote to solve it as soon as possible.']"
						},
						"excerpt_encoded": {
							"cdata_section": ""
						},
						"wp:post_id": "6420",
						"wp:post_date": {
							"cdata_section": "2020-12-11 15:43:23"
						},
						"wp:post_date_gmt": {
							"cdata_section": "2020-12-11 11:43:23"
						},
						"wp:post_modified": {
							"cdata_section": "2020-12-11 15:43:23"
						},
						"wp:post_modified_gmt": {
							"cdata_section": "2020-12-11 11:43:23"
						},
						"wp:comment_status": {
							"cdata_section": "closed"
						},
						"wp:ping_status": {
							"cdata_section": "closed"
						},
						"wp:post_name": {
							"cdata_section": "registration-of-a-company-producer-of-alcoholic-beverages-obtaining-permits-and-excise-taxes"
						},
						"wp:status": {
							"cdata_section": "publish"
						},
						"wp:post_parent": "0",
						"wp:menu_order": "0",
						"wp:post_type": {
							"cdata_section": "portfolio"
						},
						"wp:post_password": {
							"cdata_section": ""
						},
						"wp:is_sticky": "0",
						"category": {
							"domain": "portfolio_category",
							"nicename": "business-registration",
							"cdata_section": "Business registration"
						},
						"wp:postmeta": [
							{
								"wp:meta_key": {
									"cdata_section": "_edit_last"
								},
								"wp:meta_value": {
									"cdata_section": "3"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_shortcodes_custom_css"
								},
								"wp:meta_value": {
									"cdata_section": ".vc_custom_1607077188610{margin-top: 100px !important;}"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_featured"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpml_media_duplicate"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_last_translation_edit_mode"
								},
								"wp:meta_value": {
									"cdata_section": "native-editor"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "slide_template"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "rs_page_bg_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_header_options_footer_margin"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_team_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_subtitle"
								},
								"wp:meta_value": {
									"cdata_section": "Business registration"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_portfolio_shorttext"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "custom_breadcrumbs"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_hide_portfolio_img"
								},
								"wp:meta_value": {
									"cdata_section": "1"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_menu_separate"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_disable_heading"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "heading_bg"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_page_heading_full"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_top_bar"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_color_title"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_hover_color"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_screen_logo"
								},
								"wp:meta_value": {
									"cdata_section": "0"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_full_height"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "anps_featured_video"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "gallery_images"
								},
								"wp:meta_value": {
									"cdata_section": ""
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_wpb_vc_js_status"
								},
								"wp:meta_value": {
									"cdata_section": "true"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_yoast_wpseo_content_score"
								},
								"wp:meta_value": {
									"cdata_section": "60"
								}
							},
							{
								"wp:meta_key": {
									"cdata_section": "_thumbnail_id"
								},
								"wp:meta_value": {
									"cdata_section": "7257"
								}
							}
						]
					}
				]
			}
		}
	}
	`;
	var tabs = document.querySelector('.business_cases-tabs');
	console.log(tabs);

	function updateCases(cases) {
		var data = JSON.parse(cases);
		var categories = [];
		data.rss.channel.item.forEach(function (el, i) {
			if (!categories.includes(el.category.cdata_section) && el.link.split('=')[1] !== 'en') {
				categories.push(el.category.cdata_section);
			}
		});
		tabs.innerHTML = '';

		for (var index = 0; index < categories.length; index++) {
			tabs.innerHTML += '\t\t\t\t\t\t<div class="business_cases-tabs-item" data-btn="'.concat(index, '">').concat(categories[index], '</div>\t\t\t\t\t');
		}

		for (var _index = 0; _index < categories.length; _index++) {
			casesAcordion.innerHTML += '\t\t\t\t\t\t<div class="container business_cases-acordion-container" data-parent="'
				.concat(categories[_index], '" data-content="')
				.concat(_index, '"></div>\t\t\t\t\t\t\t\t');
		}

		var containers = document.querySelectorAll('business_cases-acordion-container');

		_toConsumableArray(casesAcordion.children).forEach(function (el) {
			data.rss.channel.item.forEach(function (item) {
				if (item.category.cdata_section === el.dataset.parent) {
					el.innerHTML +=
						'\t\t\t\t\t\t\t\t\t<div class="business_cases-acordion business_cases-tabs-item-border">\t\t\t\t\t\t\t\t\t\t<div class="t_wrapper16 text_plus">\t\t\t\t\t\t\t\t\t\t\t'
							.concat(
								item.title.cdata_section,
								'\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t<div class="text_container text_hidden">\t\t\t\t\t\t\t\t\t\t\t'
							)
							.concat(item.content_encoded.cdata_section, '\t\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t');
				}
			});
		});

		var case_tabs = document.querySelector('.business_cases-tabs');
		var content = document.querySelectorAll('.business_cases-acordion-container');
		case_tabs.addEventListener('click', function (e) {
			if (e.target.dataset.btn) {
				changeClass(e.target);

				for (var i = 0; i < content.length; i++) {
					content[i].classList.remove('active');

					if (content[i].dataset.content === e.target.dataset.btn) {
						content[i].classList.add('active');
					}
				}
			}
		});

		var changeClass = function changeClass(el) {
			for (var i = 0; i < case_tabs.children.length; i++) {
				case_tabs.children[i].classList.remove('active');
			}

			el.classList.add('active');
		};

		case_tabs.children[0].click();
	}

	var content = document.querySelectorAll('.business_cases-acordion-container');
	var casesAcordion = document.querySelector('.business_cases-container');
	var plusRotate = document.querySelectorAll('.business_cases-acordion');
	casesAcordion.addEventListener('click', function (e) {
		var eClick = e.target;

		if (eClick.closest('div').classList.contains('text_plus')) {
			eClick.parentElement.children[1].classList.toggle('text_hidden');
			eClick.classList.toggle('rotate_plus');
		}
	});
	updateCases(cases);
});
