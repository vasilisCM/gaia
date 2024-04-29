<?php /* Template Name: Mykonos */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container" data-barba-namespace="mykonos" data-body-class="<?php echo esc_attr(join(' ', get_body_class())); ?>">
    <!-- Hero  -->
    <section class="first-section hero hero--mykonos">
        <?php
        $hero = get_field('hero');
        ?>
        <picture class="hero__background">
            <img src="<?php echo $hero['image']['desktop']; ?>" class="hero__background-img">
        </picture>
        <div class="boxed-s centered hero__container">

            <div class="hero__text-container">
                <h1 class="hero__text-large heading-ml light" animate="line">
                    <?php echo $hero['heading']['text_large']; ?>
                </h1>
                <?php if ($hero['heading']['text_small']) : ?>
                    <div class="hero__text-small text-l">
                        <?php echo $hero['heading']['text_small']; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Grid -->
    <section class="main-grid main-grid--mykonos">
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

    <section>
        <?php
        $gallery = get_field('gallery');
        ?>
        <div class="boxed centered">
            <!-- Gallery  -->
            <?php
            include 'components/gallery.php';
            ?>
        </div>
    </section>



    <section>


        <div class="carousel-double">


            <div class="swiper carousel-image">
                <div class="swiper-wrapper">
                    <?php if (have_rows('carousel')) : ?>
                        <?php while (have_rows('carousel')) : the_row();
                            $image = get_sub_field('image');

                        ?>
                            <div class="swiper-slide carousel-image__slide"><img src="<?php echo $image; ?>" alt=""></div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            </div>

            <div class="swiper carousel-text">
                <div class="swiper-wrapper">
                    <?php if (have_rows('carousel')) : ?>
                        <?php while (have_rows('carousel')) : the_row();

                            $profession = get_sub_field('profession');
                        ?>
                            <div class="heading-l carousel-text__slide  swiper-slide"><?php echo $profession; ?></div>
                        <?php endwhile; ?>
                    <?php endif; ?>
                </div>
            </div>


        </div>



    </section>

    <section class="main-grid main-grid--mykonos">
        <?php
        $mykonos_grid = get_field('mykonos__main_grid');
        $texts = $mykonos_grid['texts'];
        $images = $mykonos_grid['images'];
        ?>
        <div class="main-grid__container boxed centered">

            <div class="main-grid__item two-col">
                <div class="main-grid__item-text-container">
                    <div class="main-grid__item-title serif heading">
                        <?php echo $texts['title']; ?>
                    </div>

                    <div class="main-grid__item-text sans-serif text">
                        <?php echo $texts['text']; ?>
                    </div>

                </div>
                <div class="main-grid__item-image-container">
                    <img src="<?php echo $images['image']; ?>" class="main-grid__item-image 
           
                image-with-tiles
            
                " alt="">

                    <img src="<?php echo $images['image_small_left']; ?>" class="main-grid__item-image-s main-grid__item-image-sl" alt="">
                    <img src="<?php echo $images['image_small_right']; ?>" class="main-grid__item-image-s main-grid__item-image-sr" alt="">

                </div>
            </div>

        </div>

    </section>

    <section class="learn-more">
        <div class="learn-more__container boxed centered">
            <div class="learn-more__heading heading-s serif centered-text">
                Learn more about...
            </div>
            <div class="learn-more__grid">
                <div class="learn-more__item">
                    <div class="learn-more__item-text heading-ms light sans-serif centered-text">
                        The retreat
                    </div>
                    <div class="learn-more__item-image">
                        <img src="http://localhost/gaiaexclusiveretreats.com/wp-content/uploads/2024/04/hero-retreat.webp" alt="">
                    </div>
                </div>

                <div class="learn-more__item">
                    <div class="learn-more__item-text heading-ms light sans-serif centered-text">
                        The experience
                    </div>
                    <div class="learn-more__item-image">
                        <img src="http://localhost/gaiaexclusiveretreats.com/wp-content/uploads/2024/04/hero-experience.webp" alt="">
                    </div>
                </div>

                <div class="learn-more__item">
                    <div class="learn-more__item-text heading-ms light sans-serif centered-text">
                        Tailor - made retreats
                    </div>
                    <div class="learn-more__item-image">
                        <img src="http://localhost/gaiaexclusiveretreats.com/wp-content/uploads/2024/04/hero-tailor-made.webp" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section>


    <!-- Text Banner  -->
    <?php
    include 'components/text-banner.php';
    ?>


</main>

<!-- Footer  -->
<?php get_footer(); ?>