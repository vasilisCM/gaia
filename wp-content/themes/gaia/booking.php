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
            <h1 class="intro__heading heading-ms sans-serif centered-text boxed-s centered" animate><?php echo $hero['heading']['text_large']; ?></h1>
            <div class="intro__text serif boxed-s centered centered-text heading-s"><?php echo $hero['heading']['text_small']; ?></div>
        </div>
    </section>

    <section class="online-booking">
        <div class="boxed-xs centered online-booking__container">
            <p class="online-booking__description">Fill in the information form with details such as the number of people, preferred
                dates, and the purpose of your retreat. </p>
            <div class="online-booking__plugin">
                <?php echo get_the_content(); ?>
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