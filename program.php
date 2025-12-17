<?php /* Template Name: Program */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container" data-body-class="<?php echo esc_attr(join(' ', get_body_class())); ?>">
    <!-- Hero  -->
    <section class="first-section hero hero--inner">
        <picture class="hero__background">
            <img src="<?php echo get_field('image'); ?>" class="hero__background-img">
        </picture>
        <div class="boxed-s centered hero__container <?php if (get_field('white_texts')) : ?>white-text<?php endif; ?>" animate="line">
            <h1 class="hero__heading heading-s italic serif">
                <?php echo get_field('heading'); ?>
            </h1>
            <div class="hero__text-container">
                <div class="hero__text-large heading-ml light" animate="line">
                    <?php echo get_field('text_large'); ?>
                </div>
                <?php if (get_field('test_small')) : ?>
                    <div class="hero__text-small text-l" animate="line">
                        <?php echo get_field('test_small'); ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Intro -->
    <section class="intro">
        <div class="intro__text-container boxed-xs centered centered-text">
            <div class="intro__text text-l">
                <?php the_content(); ?>
            </div>
        </div>

    </section>

    <!-- Curves -->
    <section class="">
        <?php
        $intro = get_field('program__intro');
        ?>
        <div class="philosophy-curves__container--top">
            <div class="curved-container">
                <div class="curve-custom curve-custom--gradient"></div>
                <div class="philosophy-curves__text boxed-xs centered centered-text">
                    <h2 class="serif heading">
                        <?php echo $intro['text_1']; ?>
                    </h2>
                    <div class="basic text-l">
                        <?php echo $intro['text_2']; ?>
                    </div>
                    <div class="heading-ml">
                        <?php echo $intro['text_3']; ?>
                    </div>
                </div>

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
                    <div class="main-grid__item main-grid-program__item two-col">
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
                        <div class="main-grid__item-image-container main-grid-program__img-container relative">
                            <div class="serif main-grid-program__step-container absolute clip-up">
                                <span class="heading">Step</span>
                                <span class="text-huge">0<?php echo get_row_index(); ?></span>
                            </div>
                            <img src="<?php echo $itemImage['image']; ?>" class="main-grid__item-image" alt="">

                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </section>

    <section class="investment-program centered-text">
        <?php $investment = get_field('program__investment'); ?>
        <div>
            <div class="investment-program__container boxed-xs centered">
                <h2 class="heading-ml">
                    <?php echo $investment['heading']; ?>
                </h2>
                <div class="text-l">
                    <?php echo $investment['text_1']; ?>
                </div>
            </div>
        </div>


    </section>

    <!-- Curves -->
    <section class="">
        <?php
        $intro = get_field('program__intro');
        ?>
        <div class="philosophy-curves__container--top">
            <div class="curved-container">
                <div class="curve-custom curve-custom--gradient"></div>
                <div class="investment-program__container boxed-xs centered centered-text">
                    <div class="basic text-l">
                        <?php echo $investment['text_2']; ?>
                    </div>
                    <a href="/" target="_blank">
                        <button class="button investment-program__paypal-button">Pay with <img src="<?php echo assets('paypal-black.png'); ?>" alt="Paypal" class="investment-program__paypal-icon"></button>
                    </a>
                    <div class="basic text-l">
                        <?php echo $investment['text_3']; ?>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Text Banner  -->
    <section class="text-banner text-banner-program">
        <?php
        $text_banner = get_field('text_banner', 'option');
        ?>
        <div class="boxed centered">
            <div class="hero__heading">
                <span class="heading-s italic serif hero__text">Ready to transform your health?</span>
                <span class="heading-l hero__text" animate="word">Your body deserves this investment</span>
            </div>

        </div>
        <div class="curved-container">
            <div class="curve-custom"></div>


            <button class="centered text-banner__button text-banner-program__curve"></button>


        </div>
    </section>
</main>

<!-- Footer  -->
<?php get_footer(); ?>