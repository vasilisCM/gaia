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
        <span class="heading-s italic serif hero__text" animate="line"><?php echo $hero['heading']['text_small']; ?></span>
        <span class="heading-l hero__text" animate="line"><?php echo $hero['heading']['text_large']; ?></span>
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
      <?php $carousel_items = get_field('carousel', 'options') ?: []; ?>
      <div class="carousel carousel--home<?php echo count($carousel_items) < 4 ? ' carousel--not-active' : ''; ?>">
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
  <section class="">

    <div class="">
      <div class="carousel-glide">
        <div class="boxed-s centered">
          <div class="carousel-glide__track" data-glide-el="track">
            <div class="carousel-glide__container">

              <?php if (have_rows('testimonials')) :
                while (have_rows('testimonials')) : the_row();
                  $heading = get_sub_field('heading');
                  $text = get_sub_field('text');
                  $author = get_sub_field('author');

                  $plain_text = wp_strip_all_tags($text);

                  $max_length = 260;
                  $has_long_text = mb_strlen($plain_text) > $max_length;
                  $short_text = $has_long_text ? mb_substr($plain_text, 0, $max_length) . '…' : $plain_text;
              ?>
                  <div class="carousel-glide__slide">

                    <h4 class="heading italic serif center-align"><?php echo $heading; ?></h4>
                    <div class="text carousel-glide__text" data-short-text="<?php echo esc_attr($short_text); ?>" data-full-text="<?php echo esc_attr($plain_text); ?>" data-expanded="0">
                      <?php echo $short_text; ?>
                    </div>
                    <span class="text-ml center-align"><?php echo $author; ?></span>
                    <?php if ($has_long_text) : ?>
                      <div class="text-ml secondary underline carousel-glide__toggle" type="button">show more</div>
                    <?php endif; ?>

                  </div>
                <?php endwhile; ?>
              <?php endif; ?>

            </div>
          </div>

          <div class="carousel__bottom">
            <div class="carousel__controls">
              <div class="carousel__button carousel__button--previous"></div>
              <div class="carousel__dots" data-glide-el="controls[nav]"></div>
              <div class="carousel__button carousel__button--next"></div>
            </div>
          </div>
        </div>
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