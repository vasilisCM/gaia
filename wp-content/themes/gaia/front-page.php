<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main>
  <!-- Hero  -->
  <section class="first-section hero hero--home">
    <?php
    $hero = get_field('hero');
    ?>
    <!-- <picture>
      <source media="(max-width: 991px)" srcset="<?php // echo $hero['image']['mobile']; 
                                                  ?>">
      <img src="<?php // echo $hero['image']['desktop']; 
                ?>">
    </picture> -->
    <div class="boxed centered hero__container">
      <h1>
        <span class="hero__text"><?php echo $hero['heading']['text_small']; ?></span>
        <span class="hero__text"><?php echo $hero['heading']['text_large']; ?></span>
      </h1>
    </div>
  </section>
</main>

<!-- Footer  -->
<?php get_footer(); ?>