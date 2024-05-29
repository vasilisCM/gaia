<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TC8TTXDN');</script>
<!-- End Google Tag Manager -->
</head>

<body <?php body_class('body'); ?> data-barba="wrapper">
	<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TC8TTXDN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
  <header class="header">
    <div class="header__container boxed centered">

      <!-- Main Menu 1 -->
      <nav class="main-menu main-menu--1 menu__hover-effect">
        <?php
        wp_nav_menu(
          array(
            'menu' => "main_1",
            'container' => '',
            'theme_location' => "main_1",
            'items_wrap' => '<ul id="" class="main-menu__list">%3$s</ul>'
          )
        );
        ?>
      </nav>

      <!-- Logo  -->
      <div class="header__logo-container">
        <a href="<?php echo home_url(); ?>">
          <img src="<?php echo assets('gaia-logo.svg'); ?>" alt="" class="logo header__logo">
        </a>
      </div>

      <!-- Main Menu 2 -->
      <nav class="main-menu main-menu--2 menu__hover-effect">
        <?php
        wp_nav_menu(
          array(
            'menu' => "main_2",
            'container' => '',
            'theme_location' => "main_2",
            'items_wrap' => '<ul id="" class="main-menu__list">%3$s</ul>'
          )
        );
        ?>
      </nav>

      <!-- Hamburger  -->
      <div class="main-menu__mobile-button hamburger" pressed="false"></div>

    </div>
    <div class="main-menu__dropdown-background"></div>
  </header>

  <!-- Page Transition  -->
  <?php
  include 'components/page-transition.php';
  ?>

  <!-- CTA Book  -->
  <?php
  include 'components/book-cta.php';
  ?>