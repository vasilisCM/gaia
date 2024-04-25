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
        <!-- <svg width="1920.464" height="114.755" viewBox="0 0 1920.464 114.755">
            <path id="Path_272" data-name="Path 272" d="M64.87,222.35c81.438-19.438,164.687-36.657,247.457-51.14a4149.027,4149.027,0,0,1,1425.077,0c82.77,14.5,166.028,31.7,247.466,51.14" transform="translate(-64.638 -108.567)" fill="none" stroke="#a19696" stroke-miterlimit="10" stroke-width="2" />
        </svg> -->
        <div class="curve-custom"></div>

        <a href="<?php echo $text_banner['button']['link']; ?>">
            <button class="button centered text-banner__button"><?php echo $text_banner['button']['text']; ?></button>
        </a>

    </div>
</section>