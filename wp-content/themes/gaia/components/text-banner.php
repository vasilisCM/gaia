<section class="text-banner">
    <?php
    $text_banner = get_field('text_banner', 'option');
    ?>
    <div class="boxed centered">
        <div class="hero__heading">
            <span class="heading-s italic serif hero__text"><?php echo $text_banner['text_small']; ?></span>
            <span class="heading-l hero__text" animate="word"><?php echo $text_banner['text_large']; ?></span>
        </div>

    </div>
    <div class="curved-container">
        <div class="curve-custom"></div>

        <a href="<?php echo $text_banner['button']['link']; ?>">
            <button class="button centered text-banner__button"><?php echo $text_banner['button']['text']; ?></button>
        </a>

    </div>
</section>