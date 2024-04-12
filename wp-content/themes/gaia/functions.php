<?php
  // Register Menus
  function theme_menus() {
    $locations = array(
      'main' => "Main Menu",
      'footer' => "Footer Menu",
    );
    register_nav_menus($locations);
  }
  add_action('init', 'theme_menus');

 // Place custom post type content here

  // Enqueue CSS
  function load_css() {
    wp_enqueue_style('main', get_template_directory_uri() . '/src/css/main.css');
  }
  add_action('wp_enqueue_scripts', 'load_css');

  // Enqueue JavaScript
  // Libraries
  function load_js_libraries() {
    wp_enqueue_script('gsap.min.js', get_template_directory_uri() . '/src/js/libraries/gsap.min.js', array(), false, true);
    wp_enqueue_script('imagesloaded.pkgd.min.js', get_template_directory_uri() . '/src/js/libraries/imagesloaded.pkgd.min.js', array(), false, true);
    wp_enqueue_script('lenis.min.js', get_template_directory_uri() . '/src/js/libraries/lenis.min.js', array(), false, true);
    wp_enqueue_script('ScrollTrigger.min.js', get_template_directory_uri() . '/src/js/libraries/ScrollTrigger.min.js', array(), false, true);
  }
  add_action('wp_enqueue_scripts', 'load_js_libraries');

  // Webpack Scripts
  function load_js() {
    // Global JS
    wp_enqueue_script('main', get_template_directory_uri() . '/src/js/global.bundle.js', array(), false, true);

    // Pages JS
    // About
    if (is_page_template('about.php')) {
      wp_enqueue_script('about', get_template_directory_uri() . '/src/js/about.bundle.js', array(), null, true);
    } 
    // Contact
    elseif (is_page_template('contact.php')) {
      wp_enqueue_script('contact', get_template_directory_uri() . '/src/js/contact.bundle.js', array(), null, true);
    } 
    // Home
    elseif (is_front_page()) { 
      wp_enqueue_script('home', get_template_directory_uri() . '/src/js/home.bundle.js', array(), null, true);
    }
    // Posts
    elseif (is_home()) { 
      wp_enqueue_script('posts', get_template_directory_uri() . '/src/js/posts.bundle.js', array(), null, true);
    }
  }
  add_action('wp_enqueue_scripts', 'load_js')

  // Remove Gutenberg Editor
?>
                      