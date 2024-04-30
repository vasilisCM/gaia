<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container">
    <!-- Hero  -->
    <section class="first-section simple-page">
        <div class="boxed-xs centered">
            <h1 class="heading serif centered-text"><?php the_title(); ?></h1>
            <p><?php the_content(); ?></p>
        </div>
    </section>
</main>

<!-- Footer  -->
<?php get_footer(); ?>