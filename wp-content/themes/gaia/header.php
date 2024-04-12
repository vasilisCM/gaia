
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <?php wp_head(); ?>
      </head>
      <body class="body">
      <header class="header" data-header="">
      <div class="header__container boxed">
        <!-- Logo  -->
        <div class="header__logo-container">
          <a href="/">
            <img src="<?php echo get_template_directory_uri() . '/./assets/img/logo.jpg'; ?>" alt="" class="logo header__logo">
          </a>
        </div>

        <!-- Main Menu -->
        <nav class="main-menu">
          <div class="main-menu__mobile-button hamburger" pressed="false"></div>
          
        <?php
          wp_nav_menu(
            array(
              'menu' => "main",
              'container' => '',
              'theme_location' => "main",
              'items_wrap' => '<ul id="" class="main-menu__list">%3$s</ul>'
              )
            );
          ?>
        </nav>

        <!-- Search Form -->
        <form role="search" class="search-form" method="get" action="">
          <label class="search-form__label">
            <input type="search" class="search-form__input" placeholder="Search" value="" name="search" title="Search for:">
          </label>
          <button type="button" class="search-form__button"></button>
        </form>

        <!-- Language Switcher -->
        <div class="language-switcher">
          <ul class="language-switcher__list">
            <li class="language-switcher__item">
              <a href=""> <span class="language-switcher__text">ΕΛ</span></a>
            </li>
            <li class="language-switcher__item">
              <a href=""> <span class="language-switcher__text">EN</span></a>
            </li>
          </ul>
        </div>
      </div>
    </header>