<?php /* Template Name: Team */ ?>

<!-- Header  -->
<?php get_header(); ?>

<!-- Main  -->
<main data-barba="container" data-barba-namespace="team">
  <!-- Hero  -->
  <section class="first-section intro intro--team">
    <div class="intro__container">
      <h1 class="intro__heading heading-l sans-serif centered-text boxed-s centered" animate><?php echo get_field('our_team_heading'); ?></h1>
      <div class="curved-container">
        <div class="curve-custom curve-custom--white"></div>
        <div class="intro__text serif boxed-s centered centered-text heading-s"><?php echo get_field('our_team_intro_text'); ?></div>
      </div>
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