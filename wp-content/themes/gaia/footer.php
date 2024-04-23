<footer class="footer">

  <?php
  $social = get_field('social', 'option');
  ?>

  <div class="footer__top">
    <div class="boxed-s centered footer__top-container">
      <!-- Footer Menu -->
      <div class="footer__menu">
        <nav class="footer-menu">
          <?php
          wp_nav_menu(
            array(
              'menu' => "footer",
              'container' => '',
              'theme_location' => "footer",
              'items_wrap' => '<ul id="" class="footer-menu__list">%3$s</ul>'
            )
          );
          ?>
        </nav>
      </div>
      <div class="footer__top-right">
        <div class="footer__social">
          <label for="social">Follow us</label>
          <div class="footer__social-icons">
            <?php
            if (have_rows('social', 'option')) :
              while (have_rows('social', 'option')) : the_row();
            ?>
                <div class="footer__social-img-container">
                  <a href="<?php echo get_sub_field('link'); ?>" target="_blank">
                    <img src="<?php echo get_sub_field('icon'); ?>" alt="" class="footer__social-img"></a>
                </div>
            <?php
              endwhile;
            endif;
            ?>

          </div>
        </div>

        <div class="footer__newsletter">
          <?php echo do_shortcode('[contact-form-7 id="e102212" title="Newsletter"]'); ?>
        </div>
      </div>

    </div>
  </div>
  <div class="footer__bottom">
    <div class="boxed-s centered footer__bottom-container">
      <!-- Copyrights -->
      <div>
        <span class="text-extra-small footer__copyrights">© <?php echo date("Y"); ?> Gaia Exclusive Retreats. All Rights Reserved | </span>
        <span class="text-extra-small footer__created-by">
          Created by
          <a href="https://conceptmaniax.gr/" target="_blank">ConceptManiax</a>
        </span>
      </div>

      <!-- Privacy Menu  -->
      <nav class="privacy-menu footer__bottom-right">
        <?php
        wp_nav_menu(
          array(
            'menu' => "privacy",
            'container' => '',
            'theme_location' => "privacy",
            'items_wrap' => '<ul id="" class="privacy-menu__list">%3$s</ul>'
          )
        );
        ?>
      </nav>
    </div>
  </div>


  <!-- Loader  -->
  <!-- <div class="loader">
    <div class="loader__spinner"></div>
  </div> -->

  <!-- Back to Top  -->
  <div class="back-to-top"></div>
</footer>

<?php wp_footer(); ?>
</body>

</html>