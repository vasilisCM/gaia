<?php /* Template Name: Contact */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container">
  <!-- Hero  -->
  <section class="first-section intro intro--contact">
    <div class="intro__container">
      <h1 class="intro__heading heading-ms sans-serif centered-text boxed-s centered" animate="line"><?php echo get_field('contact_heading'); ?></h1>
      <div class="intro__text serif boxed-s centered centered-text heading-s" animate="line"><?php echo get_field('contact_subheading'); ?></div>
    </div>
  </section>

  <!-- Contact Info -->
  <section class="contact-info">
    <div class="contact-info__container boxed-xs centered sans-serif text centered-text">
      <div class="contact-info__title text-s">
        <?php echo get_field('contact_info')['title']; ?>
      </div>
      <div class="contact-info__name semibold">
        <?php echo get_field('contact_info')['name']; ?>
      </div>
      <div class="contact-info__details">
        <div class="contact-info__phone">
			
          T: <a href="tel:<?php echo get_field('contact_info')['phone']; ?>"><?php echo get_field('contact_info')['phone']; ?></a>
        </div>
        <div class="contact-info__email">
          E: <a href="mailto:<?php echo get_field('contact_info')['email']; ?>"> <?php echo get_field('contact_info')['email']; ?></a>
        </div>
        <div class="contact-info__reception">
          <?php echo get_field('contact_info')['reception_label']; ?>: <?php echo get_field('contact_info')['reception_text']; ?>
        </div>
      </div>

    </div>
  </section>

  <!-- Form -->
  <section class="contact-form">
    <div class="contact-form__container boxed-xs centered">
      <?php echo do_shortcode('[contact-form-7 id="4db155d" title="Contact Form"]'); ?>
    </div>
  </section>

  <!-- FAQ -->
  <?php
  include 'components/faq.php';
  ?>
</main>

<!-- Footer  --> <?php get_footer(); ?>