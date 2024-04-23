<!-- Header  -->
<?php get_header(); ?>


<!-- Main  -->
<main data-barba="container" data-barba-namespace="home">
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
        <span class="heading-s italic serif hero__text" animate><?php echo $hero['heading']['text_small']; ?></span>
        <span class="heading-l hero__text" animate><?php echo $hero['heading']['text_large']; ?></span>
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
                <img src="<?php echo $itemImage['image_small_left']; ?>" class="main-grid__item-image-s main-grid__item-image-sl" alt="">
                <img src="<?php echo $itemImage['image_small_right']; ?>" class="main-grid__item-image-s main-grid__item-image-sr" alt="">
              <?php endif; ?>
            </div>
          </div>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>
  </section>


  <!-- Carousel  -->
  <section class="home-team">
    <div class="boxed centered">
      <h2 class="serif heading center-align"><?php echo get_field('home__team')['heading']; ?></h2>
      <div class="carousel carousel--home">
        <div class="carousel__container">
          <div class="carousel__track">
            <?php if (have_rows('carousel', 'options')) : ?>
              <?php while (have_rows('carousel', 'options')) : the_row();
                $image = get_sub_field('image');
                $name = get_sub_field('name');
                $profession = get_sub_field('profession');
              ?>

                <!-- Carousel Item  -->
                <div class="carousel__item">
                  <div class="carousel__img-container">
                    <img src="<?php echo $image; ?>" alt="">
                  </div>
                  <h3 class="text-ms carousel__heading">
                    <span class="bold"><?php echo $name; ?></span>
                    <span><?php echo $profession; ?></span>
                  </h3>
                </div>

              <?php endwhile; ?>
            <?php endif; ?>
          </div>
        </div>
      </div>
      <a href="<?php echo get_field('home__team')['button']['link']; ?>" class="center-align home-team__button">
        <button class="centered button button--plain"><?php echo get_field('home__team')['button']['label']; ?></button>
      </a>
    </div>
  </section>

  <!-- Text Banner  -->
  <?php
  include 'components/text-banner.php';
  ?>

  <!-- Testimonial  -->
  <section class="home-testimonial">
    <?php
    $testimonial = get_field('testimonial');
    $image = $testimonial['image'];
    $heading = $testimonial['heading'];
    $text = $testimonial['text'];
    $author = $testimonial['author'];
    ?>
    <div class="boxed-s centered home-testimonial__container">
      <div class="home-testimonial__img-container">
        <img src="<?php echo $image; ?>" alt="" class="home-testimonial__img">
      </div>
      <div class="home-testimonial__text-container">
        <h4 class="heading italic serif"><?php echo $heading; ?></h4>
        <div class="heading-s italic serif"><?php echo $text; ?></div>
        <span class="text-ml"><?php echo $author; ?></span>
      </div>
    </div>
  </section>

  <!-- Custom Cursor  -->
  <?php
  include 'components/custom-cursor.php';
  ?>

</main>

<!-- Footer  -->
<?php get_footer(); ?>