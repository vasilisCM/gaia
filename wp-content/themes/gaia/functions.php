<?php
// Add <title> in the <head> dynamically
add_theme_support('title-tag');

// Register Menus
function theme_menus()
{
  $locations = array(
    'main_1' => "Main Menu 1",
    'main_2' => "Main Menu 2",
    'footer' => "Footer Menu",
    'privacy' => "Privacy Menu",
  );
  register_nav_menus($locations);
}
add_action('init', 'theme_menus');

// Place custom post type content here
function create_retreat_post_type()
{
  register_post_type(
    'retreat',
    array(
      'labels'      => array(
        'name'          => __('Retreats'),
        'singular_name' => __('Retreat'),
      ),
      'public'      => true,
      'has_archive' => true,
      'rewrite'     => array('slug' => 'retreats'),
      'supports'    => array('title', 'editor', 'thumbnail'),
    )
  );
}
add_action('init', 'create_retreat_post_type');

// ACF Options
if (function_exists('acf_add_options_page')) {
  acf_add_options_page();
  acf_add_options_sub_page('Social');
  acf_add_options_sub_page('Text Banner');
  acf_add_options_sub_page('Our Team');
  acf_add_options_sub_page('FAQ');
  acf_add_options_sub_page('Book CTA');
}

// Body Classes
function custom_body_classes($classes)
{

  $white_menu_templates = ['mykonos.php', 'retreat.php', 'experience.php', 'philosophy.php']; // Add more templates in the array

  if (is_page_template($white_menu_templates)) {
    $classes[] = 'white-menu-items';
  }

  return $classes;
}
add_filter('body_class', 'custom_body_classes');


// Enqueue CSS
function load_css()
{
  wp_enqueue_style('swiper', get_template_directory_uri() . '/src/css/libraries/swiper.bundle.min.css');
  wp_enqueue_style('main', get_template_directory_uri() . '/src/css/main.css');
}
add_action('wp_enqueue_scripts', 'load_css');

// Enqueue JavaScript
// Libraries
function load_js_libraries()
{
  wp_enqueue_script('gsap', get_template_directory_uri() . '/src/js/libraries/gsap.min.js', array(), false, true);
  wp_enqueue_script('imagesloaded', get_template_directory_uri() . '/src/js/libraries/imagesloaded.pkgd.min.js', array(), false, true);
  wp_enqueue_script('barba', get_template_directory_uri() . '/src/js/libraries/barba.min.js', array(), false, true);
  wp_enqueue_script('lenis', get_template_directory_uri() . '/src/js/libraries/lenis.min.js', array(), false, true);
  wp_enqueue_script('ScrollTrigger', get_template_directory_uri() . '/src/js/libraries/ScrollTrigger.min.js', array(), false, true);
  wp_enqueue_script('SplitType', get_template_directory_uri() . '/src/js/libraries/SplitType.min.js', array(), false, true);
  wp_enqueue_script('swiper', get_template_directory_uri() . '/src/js/libraries/swiper-bundle.min.js', array(), false, true);
}
add_action('wp_enqueue_scripts', 'load_js_libraries');

// Webpack Scripts
function load_js()
{
  // Global JS
  wp_enqueue_script('global', get_template_directory_uri() . '/src/js/global.bundle.js', array(), false, true);

  // Pages JS
  // Team
  if (is_page_template('team.php')) {
    wp_enqueue_script('team', get_template_directory_uri() . '/src/js/team.bundle.js', array(), null, true);
  }
  // Mykonos
  elseif (is_page_template('mykonos.php')) {
    wp_enqueue_script('mykonos', get_template_directory_uri() . '/src/js/mykonos.bundle.js', array(), null, true);
  }
  // Contact
  elseif (is_page_template('contact.php')) {
    wp_enqueue_script('contact', get_template_directory_uri() . '/src/js/contact.bundle.js', array(), null, true);
  }
  // Thank You
  elseif (is_page_template('thank-you.php')) {
    wp_enqueue_script('thank-you', get_template_directory_uri() . '/src/js/thankYou.bundle.js', array(), null, true);
    wp_localize_script('thank-you', 'thankyou_ajax_obj', array(
      'ajax_url' => admin_url('admin-ajax.php'),
      'nonce' => wp_create_nonce('send_booking_email_nonce')
    ));
  }
  // Home
  elseif (is_front_page()) {
    wp_enqueue_script('home', get_template_directory_uri() . '/src/js/home.bundle.js', array(), null, true);
  }
  // Posts
  elseif (is_home()) {
    wp_enqueue_script('posts', get_template_directory_uri() . '/src/js/posts.bundle.js', array(), null, true);
  }
  // Custom Post Type - Retreat
  elseif (is_singular('retreat')) {
    wp_enqueue_script('singleRetreat', get_template_directory_uri() . '/src/js/singleRetreat.bundle.js', array(), null, true);
  }
}
add_action('wp_enqueue_scripts', 'load_js');



// Booking Email
add_action('wp_ajax_nopriv_send_booking_email', 'send_booking_email');
add_action('wp_ajax_send_booking_email', 'send_booking_email');

function send_booking_email()
{
  // Verify the nonce for security
  check_ajax_referer('send_booking_email_nonce', 'security');

  // Retrieve POST data
  $title = sanitize_text_field($_POST['title']);
  $fromDate = sanitize_text_field($_POST['fromDate']);
  $toDate = sanitize_text_field($_POST['toDate']);
  $firstName = sanitize_text_field($_POST['firstName']);
  $lastName = sanitize_text_field($_POST['lastName']);
  $email = sanitize_email($_POST['email']);
  $tel = sanitize_text_field($_POST['tel']);
  $type = sanitize_text_field($_POST['type']);
  $quantity = sanitize_text_field($_POST['quantity']);
  $price = sanitize_text_field($_POST['price']);
  $paypalEmail = sanitize_email($_POST['paypalEmail']);
  $paypalAmount = sanitize_text_field($_POST['paypalAmount']);

  // Recipient email
  $admin_email = "vpafiliaris@conceptmaniax.com";


  // Email subject for the admin
  $subjectAdmin = "Booking Confirmation";

  // Email body for the admin
  $messageAdmin = "
    <html>
    <head>
      <title>Booking Confirmation</title>
    </head>
    <body>
      <h3>Summary</h3>
      <p>Title: $title</p>
      <p>Dates: $fromDate to $toDate</p>
      <p>First Name: $firstName</p>
      <p>Last Name: $lastName</p>
      <p>Email: $email</p>
      <p>Tel: $tel</p>
      <p>Room Type: $type</p>
      <p>Persons: $quantity</p>
      <p>Total Price: $price €</p>
      <h3>Transaction Details</h3>
      <p>PayPal Email: $paypalEmail</p>
      <p>Deposit Paid: $paypalAmount €</p>
    </body>
    </html>
    ";


  // Email subject for the customer
  $subjectCustomer = "Your Booking Confirmation";

  // Email body for the customer
  $messageCustomer = "
    <html>
    <head>
      <title>Your Booking Confirmation</title>
    </head>
    <body>
      <h3>Thank you for your booking!</h3>
      <p>Here are your booking details:</p>
      <p>Title: $title</p>
      <p>Dates: $fromDate to $toDate</p>
      <p>First Name: $firstName</p>
      <p>Last Name: $lastName</p>
      <p>Email: $email</p>
      <p>Tel: $tel</p>
      <p>Room Type: $type</p>
      <p>Persons: $quantity</p>
      <p>Total Price: $price €</p>
      <h3>Transaction Details</h3>
      <p>PayPal Email: $paypalEmail</p>
      <p>Deposit Paid: $paypalAmount €</p>
    </body>
    </html>
    ";

  // To send HTML mail, the Content-type header must be set
  $headers = array('Content-Type: text/html; charset=UTF-8');


  // Send email to admin
  wp_mail($admin_email, $subjectAdmin, $messageAdmin, $headers);

  // Send email to customer
  wp_mail($email, $subjectCustomer, $messageCustomer, $headers);



  wp_send_json_success('Email sent successfully');
}





// CM Plugin
// Remove Gutenberg Editor
add_filter('use_block_editor_for_post', '__return_false', 10);

// Use assets
function assets($filename = '')
{
  return get_template_directory_uri() . '/assets/img/' . $filename;
}
