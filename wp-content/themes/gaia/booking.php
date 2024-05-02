<?php /* Template Name: Online Booking */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container">
    <!-- Hero  -->
    <section class="first-section intro">
        <?php
        $hero = get_field('hero');
        ?>
        <div class="intro__container">
            <h1 class="intro__heading heading-ms sans-serif centered-text boxed-s centered semibold" animate="line"><?php echo $hero['heading']['text_large']; ?></h1>
            <div class="intro__text  boxed-s centered centered-text text-l semibold" animate="line"><?php echo $hero['heading']['text_small']; ?></div>
        </div>
    </section>

    <section class="online-booking">
        <div class="boxed-xs centered online-booking__container">


            <div class="online-booking__text-container">



                <!-- booking__retreat -->
                <?php
                if (have_rows('booking__retreat')) : while (have_rows('booking__retreat')) : the_row(); ?>
                        <h3 class="heading serif online-booking__retreat"><?php echo get_sub_field('heading'); ?></h3>
                        <p class="text-ml semibold"><?php echo get_sub_field('date'); ?></p>
                        <p class="text semibold"><?php echo get_sub_field('comment'); ?></p>
                        <div class="text semibold online-booking__options">
                            <p>Prices:</p>
                            <?php if (have_rows('prices')) : while (have_rows('prices')) : the_row();
                                    if (have_rows('options')) : while (have_rows('options')) : the_row(); ?>
                                            <div><?php echo get_sub_field('item'); ?></div>
                            <?php endwhile;
                                    endif;
                                endwhile;
                            endif; ?>
                        </div>
                <?php
                    endwhile;
                endif;
                ?>





                <div class="online-booking__plugin">
                    <?php // echo the_content(); 
                    ?>

                </div>
            </div>

            <div class="contact-form">
                <?php echo do_shortcode('[contact-form-7 id="7433ce2" title="Booking"]'); ?>
            </div>
    </section>

    <!-- FAQ -->
    <?php
    include 'components/faq.php';
    ?>

</main>

<!-- Footer  -->
<?php get_footer(); ?>