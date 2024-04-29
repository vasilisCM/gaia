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