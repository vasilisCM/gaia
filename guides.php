<?php /* Template Name: Guides */ ?>

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
    <?php if (get_field('intro_text')) : ?>
        <section class="intro">
            <div class="intro__text-container boxed-xs centered centered-text">
                <div class="intro__text text-l">
                    <?php echo get_field('intro_text'); ?>
                </div>
            </div>
            <?php if (have_rows('benefits')) :
                $benefits = get_field('benefits');
                $lastBenefit = count($benefits); ?>
                <div class="intro__benefits-list centered-text text-l">
                    <?php while (have_rows('benefits')) : the_row();
                        $row_index = get_row_index();
                        $benefitText = get_sub_field('text');
                    ?>
                        <div class="intro__benefits-item">
                            <?php echo $benefitText; ?>
                        </div>
                        <?php if ($row_index < $lastBenefit) : ?>
                            <div class="intro__benefits-curve curve-custom curve-custom--white">
                                <!-- <svg width="1920" height="115" viewBox="0 0 1920 115">
                                    <path id="Path_272" data-name="Path 272" d="M64.87,222.35c81.438-19.438,164.687-36.657,247.457-51.14a4149.027,4149.027,0,0,1,1425.077,0c82.77,14.5,166.028,31.7,247.466,51.14" transform="translate(-64.638 -108.567)" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="2" />
                                </svg> -->
                            </div>
                        <?php endif; ?>
                    <?php endwhile; ?>
                </div>
            <?php endif; ?>
        </section>
    <?php endif; ?>

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
                            <img src="<?php echo $itemImage['image']; ?>" class="main-grid__item-image" alt="">
                        </div>
                    </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>
    </section>

</main>

<!-- Footer  -->
<?php get_footer(); ?>