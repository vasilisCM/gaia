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

  <!-- Grid -->
  <section class="main-grid main-grid--home">
    <?php if (have_rows('grid_item')) : ?>
      <div class="main-grid__container boxed centered">
        <?php while (have_rows('grid_item')) : the_row();
          $itemText = get_sub_field('item_text');
          $itemImage = get_sub_field('item_image');
        ?>
          <div class="main-grid__item two-col">
            <div class="main-grid__item-text-container">
              <div class="main-grid__item-title serif heading">
                <?php echo $itemText['title']; ?>
              </div>
              <?php if ($itemText['subtitle']) : ?>
                <div class="main-grid__item-subtitle sans-serif text-ml">
                  <?php echo $itemText['subtitle']; ?>
                </div>
              <?php endif; ?>
              <div class="main-grid__item-text sans-serif text">
                <?php echo $itemText['text']; ?>
              </div>
              <?php if ($itemText['button']['link']) : ?>
                <div class="main-grid__item-button">
                  <a href="<?php echo $itemText['button']['link']; ?>">
                    <button class="button button--plain"><?php echo $itemText['button']['label']; ?></button>
                  </a>
                </div>
              <?php endif; ?>
            </div>
            <div class="main-grid__item-image-container">
              <img src="<?php echo $itemImage['image']; ?>" class="main-grid__item-image 
              <?php if ($itemImage['image_with_tiles']) : ?>
                image-with-tiles
              <?php endif; ?>
                " alt="">
              <?php if ($itemImage['image_with_tiles']) : ?>
                <img src="<?php echo $itemImage['image_small_left']; ?>" class="main-grid__item-image-sl" alt="">
                <img src="<?php echo $itemImage['image_small_right']; ?>" class="main-grid__item-image-sr" alt="">
              <?php endif; ?>
            </div>
          </div>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>
  </section>


  <?php
  include 'components/text-banner.php';
  ?>
</main>

<!-- Footer  -->
<?php get_footer(); ?>