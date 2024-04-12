<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main>
  <!-- Hero  -->
  <section class="first-section hero hero--home">
    <?php
    $hero = get_field('hero');
    ?>
    <picture class="hero__background">
      <source media="(max-width: 991px)" srcset="<?php echo $hero['image']['mobile']; ?>">
      <img src="<?php echo $hero['image']['desktop']; ?>" class="hero__background-img">
    </picture>
    <div class="boxed centered hero__container">
      <h1 class="hero__heading">
        <span class="heading-s italic serif hero__text"><?php echo $hero['heading']['text_small']; ?></span>
        <span class="heading-l hero__text"><?php echo $hero['heading']['text_large']; ?></span>
      </h1>
    </div>
  </section>

  <?php
  include 'components/text-banner.php';
  ?>
</main>

<!-- Footer  -->
<?php get_footer(); ?>