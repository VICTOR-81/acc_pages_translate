<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/help.css" />
    <link rel="stylesheet" href="css/vars.css" />
    <link rel="stylesheet" href="css/global.css" />
    <link rel="stylesheet" href="css/grids.css" />
    <link rel="stylesheet" href="css/index.css" />
    <link rel="stylesheet" href="css/busines_opening.css" />
    <link rel="stylesheet" href="css/business_cases.css" />
    <link rel="stylesheet" href="css/table.css" />
    <link rel="stylesheet" href="css/payroll.css" />
    <link rel="stylesheet" href="css/main_article.css" />
    <link rel="stylesheet" href="css/tile_chunk.css" />
    <link rel="stylesheet" href="css/tile.css" />
    <link rel="stylesheet" href="css/quiz.css" />
    <title><?php if (isset($title)) {echo $title;} else {echo 'Jara Accounting';} ?></title>
    <!-- <script type="text/javascript">
    (function(m, e, t, r, i, k, a) {
        m[i] = m[i] || function() {
            (m[i].a = m[i].a || []).push(arguments)
        };
        m[i].l = 1 * new Date();
        k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(
            k,
            a)
    })
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(87585476, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true
    });
    </script>
    <script>
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-K3LZFMP');
    </script> -->
</head>

<body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K3LZFMP" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <header class="header" id="header">
        <div class="nav_container">
            <div class="mobile">
                <div class="nav_bar grid_bar container">
                    <div class="menu_button">
                        <div class="nav_menu"><img src="images/icons/Vectormenu.svg" alt="" /></div>
                    </div>
                    <div class="nav_logo-mobile"><img src="images/icons/Logonav_logo.svg" /></div>
                </div>

                <nav class="navlist_grid menu_hidden">
                    <div class="close_menu">
                        <div class="menu_button_close">
                            <div class="nav_menu"><img src="images/icons/Vectornav_cross.svg" alt="" /></div>
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#cost-calculation" class="list_item list_item-link t_wrapper24 text-hover">Расчет</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#business_cases" class="list_item list_item-link t_wrapper24 text-hover">Наши кейсы</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#reviews" class="list_item list_item-link t_wrapper24 text-hover">Отзывы</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#services" class="list_item list_item-link t_wrapper24 text-hover">Услуги</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#help" class="list_item list_item-link t_wrapper24 text-hover">Помощь</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="https://wa.me/995598888118" class="list_item list_item-link t_wrapper24 text-hover">
                            <img src="images/icons/VectorwhatsUp.svg" class="link_icon" />Написать в WhatsApp</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="https://t.me/jaraaccounting" class="list_item list_item-link t_wrapper24 text-hover">
                            <img src="images/icons/Vectortelegram.svg" class="link_icon" />Написать в Telegram</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="mailto:accounting@jara.ge" class="list_item list_item-link t_wrapper24 text-hover">
                            <img src="images/icons/Vectoremail.svg" class="link_icon" />Написать на почту</a>
                    </div>
                </nav>
            </div>
            <div class="laptop">
                <div class="contacts_container">
                    <div class="container header_top-row">
                        <div class="nav_logo-top"><img src="images/icons/9994.svg" /></div>
                        <div class="header_contacts">
                            <a href="tel:+995598888118"><img src="images/icons/Vectorphone.svg"
                                    class="link_icon-l" />+995 598 888 118</a>
                            <a href="mailto:accounting@jara.ge"><img src="images/icons/Vectoremail.svg"
                                    class="link_icon-l" />accounting@jara.ge</a>
                            <a href="https://t.me/jaraaccounting"><img src="images/icons/Vectortelegram.svg"
                                    class="link_icon-l contacts_telegram" /><span>Telegram</span></a>
                            <a href="https://wa.me/995598888118"><img src="images/icons/VectorwhatsUp.svg"
                                    class="link_icon-l" /><span>Whatsapp</span></a>
                        </div>
                        <div class="header_buttons">


                            <a href="/free-consultation" id="header-consultation"
                                class="t_wrapper18 header_button-link">Бесплатная консультация</a>
                        </div>
                    </div>
                </div>

                <div class="header_links">
                    <div class="container">
                        <div class="nav_logo"><img src="images/icons/9994.svg" /></div>

                        <a href="#cost-calculation" class="t_wrapper18 header_links-item text-hover">Расчет стоимости
                        </a>
                        <a href="#business_cases" class="t_wrapper18 header_links-item text-hover">Наши кейсы</a>
                        <a href="#reviews" class="t_wrapper18 header_links-item text-hover">Отзывы</a>
                        <a href="#services" class="t_wrapper18 header_links-item text-hover">Услуги</a>
                        <a href="#help" class="t_wrapper18 header_links-item text-hover">Помощь</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="main_wrapper">
        <div class="main_content">