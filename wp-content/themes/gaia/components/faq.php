<section class="faq centered-text">
    <h2 class="heading-ms faq__heading">FAQ</h2>

    <div class="accordion faq-accordion">
        <?php if (have_rows('faq_items',  'option')) : ?>
            <?php while (have_rows('faq_items', 'option')) : the_row();
                $question = get_sub_field('question');
                $answer = get_sub_field('answer');
            ?>
                <div class="accordion__item faq-accordion__item">
                    <div class="curve-custom curve-custom--white"></div>
                    <div class="faq-accordion__text-container boxed centered">
                        <div><?php echo $question; ?></div>
                        <div class="light faq-accordion__content"><?php echo $answer; ?></div>
                    </div>
                </div>
            <?php endwhile; ?>
        <?php endif; ?>



    </div>


</section>