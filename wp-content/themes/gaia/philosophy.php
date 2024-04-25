<?php /* Template Name: Philosophy */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container" data-body-class="<?php echo esc_attr(join(' ', get_body_class())); ?>">
    <!-- Hero  -->
    <section class="first-section hero hero--inner">
        <picture class="hero__background">
            <img src="<?php echo get_field('image'); ?>" class="hero__background-img">
        </picture>
        <div class="boxed-s centered hero__container <?php if (get_field('white_texts')) : ?>white-text<?php endif; ?>">
            <h1 class="hero__heading heading-s italic serif">
                <?php echo get_field('heading'); ?>
            </h1>
            <div class="hero__text-container">
                <div class="hero__text-large heading-ml light" animate>
                    <?php echo get_field('text_large'); ?>
                </div>
                <?php if (get_field('test_small')) : ?>
                    <div class="hero__text-small text-l">
                        <?php echo get_field('test_small'); ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Grid Top -->
    <section class="main-grid main-grid--inner">
        <div class="main-grid__container boxed centered">
            <div class="main-grid__item two-col">
                <div class="main-grid__item-text-container">
                    <div class="main-grid__item-title serif heading">
                        <?php echo get_field('top_grid_item_heading'); ?>
                    </div>
                    <div class="main-grid__item-text sans-serif text">
                        <?php echo get_field('top_grid_item_text'); ?>
                    </div>
                </div>
                <div class="main-grid__item-image-container">
                    <img src="<?php echo get_field('top_grid_item_image'); ?>" class="main-grid__item-image" alt="">
                </div>
            </div>
        </div>
    </section>

    <!-- Curves -->
    <section class="philosophy-curves">
        <div class="philosophy-curves__container philosophy-curves__container--top">
            <div class="curved-container">
                <div class="curve-custom curve-custom--gradient"></div>
                <div class="philosophy-curves__text heading boxed-xs centered centered-text">
                    <?php echo get_field('philosophy_text_large'); ?>
                </div>
            </div>

        </div>
        <div class="philosophy-curves__container philosophy-curves__container--bottom">
            <div class="curved-container">
                <div class="curve-custom curve-custom--gradient"></div>
                <div class="philosophy-curves__text text-l boxed-xs centered centered-text">
                    <?php echo get_field('philosophy_text_small'); ?>
                </div>
            </div>

        </div>
    </section>

    <!-- Grid Bottom -->
    <section class="main-grid main-grid--inner bottom-grid">
        <div class="main-grid__container boxed centered">
            <div class="main-grid__item two-col">
                <div class="main-grid__item-image-container">
                    <img src="<?php echo get_field('bottom_grid_item_image'); ?>" class="main-grid__item-image" alt="">
                </div>
                <div class="main-grid__item-text-container">
                    <div class="main-grid__item-title serif heading">
                        <?php echo get_field('bottom_grid_item_heading'); ?>
                    </div>
                    <div class="main-grid__item-text sans-serif text">
                        <?php echo get_field('bottom_grid_item_text'); ?>
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