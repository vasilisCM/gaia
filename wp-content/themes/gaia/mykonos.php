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
            <button class="button centered lightbox__open"><?php echo $gallery['button']; ?></button>

            <div class="lightbox hidden">
                <div class="boxed centered">
                    <div class="heading-s lightbox__close">✖</div>

                    <?php
                    // Check if the ACF field exists and has values
                    if (have_rows('gallery')) :  // Replace 'gallery' with the correct field group key if different
                        while (have_rows('gallery')) : the_row();
                            $images = get_sub_field('images');  // Ensure 'images' is the correct name of your ACF gallery field
                            if ($images) : ?>
                                <div class="swiper mySwiper2">
                                    <div class="swiper-wrapper">
                                        <?php foreach ($images as $image) : ?>
                                            <div class="swiper-slide">
                                                <img src="<?php echo esc_url($image); ?>" />
                                            </div>
                                        <?php endforeach; ?>
                                    </div>


                                    <div class="lightbox__button lightbox__button--next swiper-button-next">
                                    </div>
                                    <div class="lightbox__button lightbox__button--previous swiper-button-prev"></div>

                                </div>
                                <div class="swiper mySwiper">
                                    <div class="swiper-wrapper">
                                        <?php foreach ($images as $image) : ?>
                                            <div class="swiper-slide">
                                                <img src="<?php echo esc_url($image); ?>" />
                                            </div>
                                        <?php endforeach; ?>
                                    </div>
                                </div>
                    <?php endif;
                        endwhile;
                    endif;
                    ?>

                </div>
            </div>
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


    <!-- Text Banner  -->
    <?php
    include 'components/text-banner.php';
    ?>


</main>

<!-- Footer  -->
<?php get_footer(); ?>