<?php
/* Template Name: Thank You Page */
get_header();
?>

<main data-barba="container">
    <section class="first-section simple-page">
        <div class="boxed centered">
            <h2>Thank You for Your reservation!</h2>
            <div id="details-container">
                <!-- Details will be displayed here by the script -->
            </div>
        </div>
    </section>
</main>

<script src="<?php echo get_template_directory_uri(); ?>/js/thankYou.js"></script>

<?php
get_footer();
?>