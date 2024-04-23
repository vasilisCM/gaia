<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <?php wp_head(); ?>
</head>

<body <?php body_class('body'); ?> data-barba="wrapper">
  <header class="header">
    <div class="header__container boxed centered">
      <div class="main-menu__mobile-button hamburger" pressed="false"></div>

      <!-- Main Menu 1 -->
      <nav class="main-menu">
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
      <nav class="main-menu">
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


    </div>
    <div class="main-menu__dropdown-background"></div>
  </header>

  <!-- Page Transition  -->
  <?php
  include 'components/page-transition.php';
  ?>