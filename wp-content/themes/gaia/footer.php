
      <footer class="footer" data-footer="">
      <div class="footer__container boxed">
        <!-- Logo -->
        <div class="footer__logo-container">
          <a href="/">
            <img src="<?php echo get_template_directory_uri() . '/./assets/img/logo.jpg'; ?>" alt="" class="logo footer__logo">
          </a>
        </div>

        <!-- Footer Menu -->
        <div class="footer__menu">
          <h3 lang="el" class="heading-medium-small footer__heading">
            My Brand
          </h3>
          <nav class="footer-menu">
            <ul class="footer-menu__list">
              <li lang="el">
                <a href="about.html">About</a>
              </li>
              <li lang="el">
                <a href="posts.html">Articles</a>
              </li>
              <li lang="el">
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Contact Info -->
        <div class="footer__contact-info">
          <h3 lang="el" class="heading-medium-small footer__heading">
            Πληροφορίες
          </h3>
          <ul class="footer__contact-info-list">
            <li class="footer__contact-info-item">
              <a href="https://maps.app.goo.gl/p694Q2tcT5Y7QYfr5" target="_blank" class="footer__contact-info-link">Some Place, Some City</a>
            </li>
            <li class="footer__contact-info-item">
              TK: 17675
              <a href="#" class="footer__contact-info-link"></a>
            </li>
            <li class="footer__contact-info-item">
              Tel.
              <a href="tel:2295029965" class="footer__contact-info-link">22950-29965</a>
            </li>
            <li class="footer__contact-info-item">
              Mobile:
              <a href="tel:7724701000" class="footer__contact-info-link">7724701000</a>
            </li>
          </ul>
        </div>

        <!-- Copyrights -->
        <div class="footer__bottom-bar">
          <span class="text-extra-small footer__copyrights">2024 All Rights Reserved. My Brand</span>
          <span class="text-extra-small footer__created-by">
            Created by
            <a href="https://conceptmaniax.gr/" target="_blank">ConceptManiax</a>
          </span>
        </div>
      </div>

      <!-- Loader  -->
      <div class="loader">
        <div class="loader__spinner"></div>
      </div>

      <!-- Back to Top  -->
      <div class="back-to-top">></div>
    </footer>
      <?php wp_footer(); ?>
      </body>
      </html>