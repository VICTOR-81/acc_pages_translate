<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description"
        content="<?php if (isset($desc)) {echo $desc;} else {echo 'Регистрация бизнеса и бухгалтерское обслуживание в Грузии на вашем языке. Любые услуги для вашего бизнеса от открытия ИП до виртуальной зоны.';} ?>">
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
</head>

<body>
    <header class="header" id="header">
        <div class="nav_container">
            <div class="mobile">
                <div class="nav_bar grid_bar container">
                    <div class="menu_button">
                        <div class="nav_menu"><img src="images/icons/Vectormenu.svg" alt="" /></div>
                    </div>
                    <a href="/" class="nav_logo-mobile"><img src="images/icons/Logonav_logo.svg" /></a>
                    <div class="lang_grid">RU <img src="images/icons/Vectortriangle_down.svg" class="angle_down" />
                    </div>
                </div>

                <nav class="navlist_grid menu_hidden">
                    <div class="close_menu">
                        <div class="menu_button_close">
                            <div class="nav_menu"><img src="images/icons/Vectornav_cross.svg" alt="" /></div>
                        </div>
                        <div class="lang_grid">RU <img src="images/icons/Vectortriangle_down.svg" class="angle_down" />
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <div class="list_item t_wrapper24 list_item-acordion">Регистрация бизнеса</div>
                        <div class="links_container nav_hidden">
                            <a href="/open-company-in-georgia.php" class="nav_link t_wrapper24 text-hover">Открытие
                                компании в Грузии</a>
                            <a href="/preferential-it-business-in-georgia.php"
                                class="nav_link t_wrapper24 text-hover">Льготный
                                IT бизнес</a>
                            <a href="/open-ip-with-one-percent-tax.php" class="nav_link t_wrapper24 text-hover">ИП с
                                налогом 1% для фрилансеров</a>
                            <a href="/tax-planning.php" class="nav_link t_wrapper24 text-hover">Налоговое
                                планирование</a>
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <div class="list_item t_wrapper24 list_item-acordion">Финансовые услуги</div>
                        <div class="links_container nav_hidden">
                            <a href="/accounting.php" class="nav_link t_wrapper24 text-hover">Бухгалтерский учет в
                                Грузии</a>
                            <a href="/tax-return-audition.php" class="nav_link t_wrapper24 text-hover">Налоговый
                                аудит</a>
                            <a href="/tax-declaration.php" class="nav_link t_wrapper24 text-hover">Подача
                                декларации</a>
                            <a href="/accounting-recovery.php" class="nav_link t_wrapper24 text-hover">Восстановление
                                бухгалтерии</a>
                            <a href="/payroll.php" class="nav_link t_wrapper24 text-hover">Payroll
                                аутсорсинг</a>
                            <a href="/payment-administration.php"
                                class="nav_link t_wrapper24 text-hover">Администрирование платежей</a>
                            <a href="#" class="nav_link t_wrapper24 text-hover">Финансовая отчетность</a>
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <div class="list_item t_wrapper24 list_item-acordion">Юридические услуги</div>
                        <div class="links_container nav_hidden">
                            <a href="/constituent-documents-changing.php"
                                class="nav_link t_wrapper24 text-hover">Изменения в уставных документах</a>
                            <a href="/company-liquidation.php" class="nav_link t_wrapper24 text-hover">Ликвидация
                                юридических лиц</a>
                            <a href="/commercial-law.php" class="nav_link t_wrapper24 text-hover">Коммерческое
                                право</a>
                            <a href="/labor-law.php" class="nav_link t_wrapper24 text-hover">Трудовое право</a>
                            <a href="/tenders-support.php" class="nav_link t_wrapper24 text-hover">Сопровождение в
                                тендерах</a>
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <div class="list_item t_wrapper24 list_item-acordion">Для физ. лиц</div>
                        <div class="links_container nav_hidden">
                            <a href="/" class="nav_link t_wrapper24 text-hover">Открытие счета в Грузинском
                                банке</a>
                            <a href="/residence-permission.php" class="nav_link t_wrapper24 text-hover">ВНЖ в
                                Грузии</a>
                            <a href="/estate-support.php" class="nav_link t_wrapper24 text-hover">Сопровождение
                                сделок с недвижимостью в Грузии</a>
                            <a href="/permanent-residence.php" class="nav_link t_wrapper24 text-hover">Постоянное
                                место жительства (ПМЖ)</a>
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <div class="list_item t_wrapper24 list_item-acordion">Сменить язык</div>
                        <div class="links_container nav_hidden">
                            <a href="#" class="nav_link t_wrapper24 text-hover">Русский</a>
                            <a href="#" class="nav_link t_wrapper24 text-hover">English</a>
                        </div>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="/all-articles.php">Статьи</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#">О нас</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="#">Контакты</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="https://wa.me/995598888118" class="list_item list_item-link t_wrapper24 text-hover">
                            <img src="images/icons/VectorwhatsUp.svg" class="link_icon" />Написать в WhatsApp</a>
                    </div>
                    <div class="acordions acordions_line">
                        <a href="https:/t.me/jaraaccounting" class="list_item list_item-link t_wrapper24 text-hover">
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
                        <a href="/" class="nav_logo-top"><img src="images/icons/9994.svg" /></a>
                        <div class="header_contacts">
                            <a href="tel:+995598888118"><img src="images/icons/Vectorphone.svg"
                                    class="link_icon-l" />+995 598 888 118</a>
                            <a href="mailto:accounting@jara.ge"><img src="images/icons/Vectoremail.svg"
                                    class="link_icon-l" />accounting@jara.ge</a>
                            <a href="https:/t.me/jaraaccounting"><img src="images/icons/Vectortelegram.svg"
                                    class="link_icon-l contacts_telegram" /><span>Telegram</span></a>
                            <a href="https://wa.me/995598888118"><img src="images/icons/VectorwhatsUp.svg"
                                    class="link_icon-l" /><span>Whatsapp</span></a>
                        </div>
                        <div class="header_buttons">
                            <div class="lang_grid">RU <img src="images/icons/Vectortriangle_down.svg"
                                    class="angle_down" /></div>

                            <a href="/free-consultation" id="header-consultation"
                                class="t_wrapper18 header_button-link">Бесплатная консультация</a>
                        </div>
                    </div>
                </div>

                <div class="header_links">
                    <div class="container">
                        <a href="/" class="nav_logo"><img src="images/icons/9994.svg" /></a>
                        <div class="t_wrapper18 header_links-arrow header_links-item">
                            Регистрация бизнеса
                            <div class="header_links-content">
                                <a href="/open-company-in-georgia.php" class="nav_link t_wrapper24 text-hover">Открытие
                                    компании в Грузии</a>
                                <a href="/preferential-it-business-in-georgia.php"
                                    class="nav_link t_wrapper24 text-hover">Льготный
                                    IT бизнес</a>
                                <a href="/open-ip-with-one-percent-tax.php" class="nav_link t_wrapper24 text-hover">ИП с
                                    налогом 1% для фрилансеров</a>
                                <a href="/tax-planning.php" class="nav_link t_wrapper24 text-hover">Налоговое
                                    планирование</a>
                            </div>
                        </div>

                        <div class="t_wrapper18 header_links-arrow header_links-item">
                            Финансовые услуги
                            <div class="header_links-content">
                                <a href="/accounting.php" class="nav_link t_wrapper24 text-hover">Бухгалтерский учет в
                                    Грузии</a>
                                <a href="/tax-return-audition.php" class="nav_link t_wrapper24 text-hover">Налоговый
                                    аудит</a>
                                <a href="/tax-declaration.php" class="nav_link t_wrapper24 text-hover">Подача
                                    декларации</a>
                                <a href="/accounting-recovery.php"
                                    class="nav_link t_wrapper24 text-hover">Восстановление
                                    бухгалтерии</a>
                                <a href="/payroll.php" class="nav_link t_wrapper24 text-hover">Payroll
                                    аутсорсинг</a>
                                <a href="/payment-administration.php"
                                    class="nav_link t_wrapper24 text-hover">Администрирование платежей</a>
                                <a href="#" class="nav_link t_wrapper24 text-hover">Финансовая отчетность</a>
                            </div>
                        </div>
                        <div class="t_wrapper18 header_links-arrow header_links-item">
                            Юридические услуги
                            <div class="header_links-content">
                                <a href="/constituent-documents-changing.php"
                                    class="nav_link t_wrapper24 text-hover">Изменения в уставных документах</a>
                                <a href="/company-liquidation.php" class="nav_link t_wrapper24 text-hover">Ликвидация
                                    юридических лиц</a>
                                <a href="/commercial-law.php" class="nav_link t_wrapper24 text-hover">Коммерческое
                                    право</a>
                                <a href="/labor-law.php" class="nav_link t_wrapper24 text-hover">Трудовое право</a>
                                <a href="/tenders-support.php" class="nav_link t_wrapper24 text-hover">Сопровождение в
                                    тендерах</a>
                            </div>
                        </div>
                        <div class="t_wrapper18 header_links-arrow header_links-item">
                            Для физ. лиц
                            <div class="header_links-content">
                                <a href="/" class="nav_link t_wrapper24 text-hover">Открытие счета в Грузинском
                                    банке</a>
                                <a href="/residence-permission.php" class="nav_link t_wrapper24 text-hover">ВНЖ в
                                    Грузии</a>
                                <a href="/estate-support.php" class="nav_link t_wrapper24 text-hover">Сопровождение
                                    сделок с недвижимостью в Грузии</a>
                                <a href="/permanent-residence.php" class="nav_link t_wrapper24 text-hover">Постоянное
                                    место жительства (ПМЖ)</a>
                            </div>
                        </div>
                        <a href="/all-articles.php" class="t_wrapper18 header_links-item text-hover">Статьи</a>
                        <a href="#" class="t_wrapper18 header_links-item text-hover">О нас</a>
                        <a href="#" class="t_wrapper18 header_links-item text-hover">Контакты</a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="main_wrapper">
        <div class="main_content">