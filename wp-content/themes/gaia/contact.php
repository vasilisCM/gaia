<?php /* Template Name: Contact */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container">
  <!-- Hero  -->
  <section class="first-section hero hero--home">
    <div class="boxed centered">
      <h1>Contact Boilerplate</h1>
      <p>Sass is compiling live, and you can also use JS modules.</p>
      <div><img src="<?php echo get_template_directory_uri() . '/assets/img/logo.jpg'; ?>" alt=""></div>
      <a href=""><button>More</button></a>
    </div>
  </section>

  <!-- Form -->
  <section class="contact-form">
    <div class="contact-form__container boxed-xs centered">
      <?php echo do_shortcode('[contact-form-7 id="4db155d" title="Contact Form"]'); ?>
    </div>
  </section>
</main>

<!-- Footer  --> <?php get_footer(); ?>