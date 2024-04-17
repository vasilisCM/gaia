<?php /* Template Name: Team */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main>
  <!-- Hero  -->
  <section class="first-section intro intro--team">
    <div class="intro__container">
      <h1 class="intro__heading heading-l sans-serif centered-text boxed-s centered" animate><?php echo get_field('our_team_heading'); ?></h1>
      <div class="curved-container">
        <svg width="1920.464" height="114.755" viewBox="0 0 1920.464 114.755">
          <path id="Path_272" data-name="Path 272" d="M64.87,222.35c81.438-19.438,164.687-36.657,247.457-51.14a4149.027,4149.027,0,0,1,1425.077,0c82.77,14.5,166.028,31.7,247.466,51.14" transform="translate(-64.638 -108.567)" fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="2" />
        </svg>
      </div>
      <div class="intro__text serif boxed-s centered centered-text heading-s"><?php echo get_field('our_team_intro_text'); ?></div>
    </div>
  </section>

  <!-- Grid -->
  <section class="team-grid">
    <?php if (have_rows('carousel', 'options')) : ?>
      <div class="team-grid__container boxed-s centered">
        <?php while (have_rows('carousel', 'options')) : the_row();
          $itemImage = get_sub_field('image');
          $itemName = get_sub_field('name');
          $itemProfession = get_sub_field('profession');
          $itemText = get_sub_field('text');
        ?>
          <div class="team-grid__item two-col">
            <div class="team-grid__image-container">
              <img src="<?php echo $itemImage; ?>" class="team-grid__image" alt="">
            </div>
            <div class="team-grid__text-container">
              <div class="team-grid__name serif heading">
                <?php echo $itemName; ?>
              </div>
              <div class="team-grid__profession sans-serif text-ml">
                <?php echo $itemProfession; ?>
              </div>
              <div class="team-grid__text sans-serif text">
                <?php echo $itemText; ?>
              </div>
            </div>
          </div>
        <?php endwhile; ?>
      </div>
    <?php endif; ?>
  </section>

  <!-- Text Banner  -->
  <?php
  include 'components/text-banner.php';
  ?>
</main>

<!-- Footer  -->
<?php get_footer(); ?>