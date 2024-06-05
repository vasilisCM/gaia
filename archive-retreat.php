<?php
get_header(); ?>



<!-- Main  -->
<main data-barba="container">
    <!-- Hero  -->
    <section class="first-section intro">

        <div class="intro__container">
            <h1 class="intro__heading heading-ms sans-serif centered-text boxed-s centered" animate="line">book your retreat</h1>
            <div class="intro__text  boxed-s centered centered-text text-l light" animate="line">Ready to start your transformation journey with Gaia Exclusive Retreats? Reserve your spot online, inquire about
                dates, and customize your retreat experience.</div>
        </div>
    </section>

    <section class="retreat-archive">
        <div class="boxed-xs centered retreat-archive__container">
            <div class="retreat-archive__grid">

                <?php while (have_posts()) : the_post(); ?>
                    <?php
                    $retreat = get_field('retreat_room');
                    $quantity = isset($retreat['quantity']) ? $retreat['quantity'] : 0;
                    $from_date = isset($retreat['dates']['from']) ? $retreat['dates']['from'] : '';
                    $to_date = isset($retreat['dates']['to']) ? $retreat['dates']['to'] : '';

                    ?>
                    <?php if ($quantity > 0) : ?>
                        <a href="<?php the_permalink(); ?>" class="retreat-archive__retreat uppercase center-align">
                            <span class="text-s retreat-archive__status">
                                Available
                            </span>
                            <h2 class="text-s bold"><?php the_title(); ?></h2>
                            <div class="text-s">
                                <?php echo esc_html($from_date); ?> / <?php echo esc_html($to_date); ?>
                            </div>
                        </a>
                    <?php else : ?>
                        <div class="retreat-archive__retreat retreat-archive__retreat--sold-out uppercase center-align">
                            <span class="text-s retreat-archive__status">
                                Sold out
                            </span>
                            <h2 class="text-s bold"><?php the_title(); ?></h2>
                            <div class="text-s">
                                <?php echo esc_html($from_date); ?> / <?php echo esc_html($to_date); ?>
                            </div>
                        </div>
                    <?php endif; ?>
                <?php endwhile; ?>
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