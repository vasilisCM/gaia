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
            <h1 class="intro__heading heading-ms sans-serif centered-text boxed-s centered" animate="line"><?php echo $hero['heading']['text_large']; ?></h1>
            <div class="intro__text serif boxed-s centered centered-text heading-s" animate="line"><?php echo $hero['heading']['text_small']; ?></div>
        </div>
    </section>

    <section class="online-booking">
        <div class="boxed-xs centered online-booking__container">

            <p class="online-booking__description">Fill in the information form with details such as the number of people, preferred
                dates, and the purpose of your retreat. </p>
            <div class="online-booking__text-container">
                <h3>Retreat in Mykonos</h3>
                <p>10-16 / 06</p>
                <p>800€ deposit</p>
            </div>
            <div class="online-booking__plugin">
                <?php // echo the_content(); 
                ?>
                <div class="contact-form">
                    <?php echo do_shortcode('[contact-form-7 id="7433ce2" title="Booking"]'); ?>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <?php
    include 'components/faq.php';
    ?>

</main>

<!-- Footer  -->
<?php get_footer(); ?>