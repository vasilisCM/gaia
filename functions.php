<?php
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

  if (is_singular('retreat')) {
    $classes[] = 'no-booking-cta';
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
      'send_booking_email_nonce' => wp_create_nonce('send_booking_email_nonce'),
      'update_acf_quantity_nonce' => wp_create_nonce('update_acf_quantity_nonce')
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


// Update Retreat Rooms Quantity
add_action('wp_ajax_nopriv_update_acf_quantity', 'update_acf_quantity');
add_action('wp_ajax_update_acf_quantity', 'update_acf_quantity');

function update_acf_quantity()
{
  // Verify the nonce for security
  check_ajax_referer('update_acf_quantity_nonce', 'security');

  // Get the parameters from the AJAX request
  $post_id = intval($_POST['post_id']);
  $roomsBooked = intval($_POST['roomsBooked']);

  // Get the current value of the quantity field within the retreat_room group
  $retreat_group = get_field('retreat_room', $post_id);
  $current_quantity = intval($retreat_group['quantity']);

  // Calculate the new quantity
  $new_quantity = $current_quantity - $roomsBooked;

  // Update the quantity field with the new value within the retreat_room group
  $retreat_group['quantity'] = $new_quantity;
  update_field('retreat_room', $retreat_group, $post_id);

  // Return a success response
  wp_send_json_success(array('new_quantity' => $new_quantity));
}





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
  $persons = sanitize_text_field($_POST['persons']);
  $quantitySingle = sanitize_text_field($_POST['quantitySingle']);
  $quantityDouble = sanitize_text_field($_POST['quantityDouble']);
  $price = sanitize_text_field($_POST['price']);
  $paypalEmail = sanitize_email($_POST['paypalEmail']);
  $paypalAmount = sanitize_text_field($_POST['paypalAmount']);

  // Recipient email
  $admin_email = "vpafiliaris@conceptmaniax.com";

  // Temporary filters to change the From name and email
  add_filter('wp_mail_from_name', function () {
    return 'Gaia Exclusive Retreats';
  });

  add_filter('wp_mail_from', function () {
    return 'no-reply@gaiaexclusiveretreats.com';
  });


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
      <p>Persons: $persons</p>";


  // Conditional inclusion of single rooms
  if ($quantitySingle) {
    $messageAdmin .= "<p>$quantitySingle single " . ($quantitySingle == 1 ? "room" : "rooms") . "</p>";
  }

  // Conditional inclusion of double rooms
  if ($quantityDouble) {
    $messageAdmin .= "<p>$quantityDouble double " . ($quantityDouble == 1 ? "room" : "rooms") . "</p>";
  }

  $messageAdmin .= "
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
      <p>Persons: $persons</p>";


  // Conditional inclusion of single rooms
  if ($quantitySingle) {
    $messageCustomer .= "<p>$quantitySingle single " . ($quantitySingle == 1 ? "room" : "rooms") . "</p>";
  }

  // Conditional inclusion of double rooms
  if ($quantityDouble) {
    $messageCustomer .= "<p>$quantityDouble double " . ($quantityDouble == 1 ? "room" : "rooms") . "</p>";
  }

  $messageCustomer .= "
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

  // Remove temporary filters to avoid affecting other emails
  remove_filter('wp_mail_from_name', function () {
    return 'Gaia Exclusive Retreats';
  });

  remove_filter('wp_mail_from', function () {
    return 'no-reply@gaiaexclusiveretreats.com';
  });



  wp_send_json_success('Email sent successfully');
}


// CM Plugin

// Use assets
function assets($filename = '')
{
  return get_template_directory_uri() . '/assets/img/' . $filename;
}
