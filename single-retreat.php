<?php
get_header();
if (have_posts()) : while (have_posts()) : the_post();
        // Get custom fields
        $retreat = get_field('retreat_room');
        $quantity = $retreat['quantity'];
        $from_date = $retreat['dates']['from'];
        $to_date = $retreat['dates']['to'];
        $info = $retreat['info'];


        // Get room variations
        $variations = $retreat['variation'];
        $prices = array();

        if ($variations) {
            foreach ($variations as $v) {
                $prices[$v['type']] = $v['price'];
            }
        }

        // Get coupons
        $coupons = array();
        if (isset($retreat['coupon'])) {
            foreach ($retreat['coupon'] as $coupon) {
                $coupons[] = array(
                    'name' => $coupon['name'],
                    'percentage' => $coupon['percentage']
                );
            }
        }

        // Post title
        $post_title = get_the_title();

        // Get the default room type and price
        $default_type = isset($variations[0]['type']) ? $variations[0]['type'] : '';
        $default_price = isset($prices[$default_type]) ? $prices[$default_type] : 0;
        $deposit_amount = $default_price * 0.2; // Calculate 20% deposit amount

        // Get admin URL for AJAX request
        $admin_url = esc_url(admin_url('admin-post.php'));
        $thank_you_page_url = esc_url(home_url('/thank-you'));
?>

        <!-- Main  -->
        <main data-barba="container" data-barba-namespace="singleRetreat" data-body-class="<?php echo esc_attr(join(' ', get_body_class())); ?>" data-admin-url="<?php echo $admin_url; ?>" data-thank-you-page-url="<?php echo $thank_you_page_url; ?>" data-post-title="<?php echo esc_attr($post_title); ?>" data-prices="<?php echo esc_attr(json_encode($prices)); ?>" data-quantity="<?php echo esc_attr($quantity); ?>" data-from-date="<?php echo esc_attr($from_date); ?>" data-to-date="<?php echo esc_attr($to_date); ?>" data-coupons="<?php echo esc_attr(json_encode($coupons)); ?>">
            <!-- Hero  -->
            <section class="first-section intro">

                <div class="intro__container">
                    <h1 class="intro__heading heading-ms sans-serif centered-text boxed-s centered" animate="line">book your retreat</h1>
                    <div class="intro__text  boxed-s centered centered-text text-l light" animate="line">Ready to start your transformation journey with Gaia Exclusive Retreats? Reserve your spot online, inquire about
                        dates, and customize your retreat experience.</div>
                </div>
            </section>

            <section class="online-booking">
                <div class="boxed-xs centered online-booking__container">
                    <div class="online-booking__text-container">
                        <h2 class="heading serif online-booking__retreat"><?php echo $post_title ?></h2>
                        <p class="text-ml"><?php echo esc_attr($from_date); ?> - <?php echo esc_attr($to_date); ?></p>
                        <div class="text"><?php echo $info; ?></div>
                        <br>
                        <?php if ((int)$quantity === 0) : ?>
                            <p class="heading-s">There are no rooms available</p>
                        <?php else : ?>
                            <p class="heading-s"><?php echo esc_html((int)$quantity); ?> <?php echo (int)$quantity === 1 ? 'room' : 'rooms'; ?> left! (up to <?php echo esc_html((int)$quantity * 2); ?> persons)</p>
                        <?php endif; ?>

                    </div>

                    <div class="contact-form<?php echo ((int)$quantity === 0) ? ' hidden' : ''; ?>">
                        <form id="booking-form" class="online-booking__form">
                            <input type="hidden" name="room_id" value="<?php echo get_the_ID(); ?>">
                            <input type="hidden" id="booking-price" name="price" value="<?php echo esc_attr($default_price); ?>">
                            <input type="hidden" id="deposit-price" name="deposit_price" value="<?php echo esc_attr($deposit_amount); ?>">
                            <input type="hidden" id="discount-price-value" name="discount_price_value" value="0">


                            <div class="contact-form__info-fields">
                                <label for="name">First Name *</label>
                                <input type="text" name="name" class="contact-form__input-field" required>
                            </div>
                            <div class="contact-form__info-fields">
                                <label for="last_name">Last Name *</label>
                                <input type="text" name="last_name" class="contact-form__input-field" required>
                            </div>
                            <div class="contact-form__info-fields">
                                <label for="email">Email *</label>
                                <input type="email" name="email" class="contact-form__input-field" required>
                            </div>
                            <div class="contact-form__info-fields">
                                <label for="tel">Phone Number *</label>
                                <input type="text" name="tel" class="contact-form__input-field" placeholder="Please include your country code" required>
                            </div>
                            <div class="contact-form__info-fields">
                                <!-- Number field for quantity with a max value -->
                                <label for="quantity">Rooms *</label>



                                <!-- Radio buttons for room type -->
                                <div class="capitalize online-booking__rooms-field">
                                    <?php if ($variations) : ?>
                                        <?php foreach ($variations as $variation) : ?>
                                            <div>
                                                <div><?php echo esc_html($variation['type']); ?> </div>
                                                <input type="number" name="quantity_<?php echo esc_html($variation['type']); ?>" class="contact-form__input-field quantity-input" value="0" min="0" max="<?php echo esc_attr($quantity); ?>" required>
                                            </div>
                                        <?php endforeach; ?>
                                    <?php endif; ?>
                                </div>


                        </form>

                        <div class="online-booking__bottom">
                            <div class="online-booking__coupon-container">
                                <label for="coupon">Coupon Code</label>
                                <input type="text" class="online-booking__coupon-code" name="coupon">
                                <button type="button" class="online-booking__coupon-button">Apply Coupon</button>
                                <p class="online-booking__coupon-message hidden"></p>
                            </div>

                            <div class="text online-booking__totals">
                                <p>Total Persons: <span id="total-persons">0</span></p>
                                <p>Total Amount: <span id="room-price">0 € </span><span id="discount-price" class="hidden">0 €</span></p>

                                <p class="bold">Booking & Deposit Amount: <span id="deposit-amount">0 €</span></p>
                            </div>
                        </div>

                        <div class="online-booking__error">
                            <p class="online-booking__error-message"></p>
                        </div>


                        <div class="contact-form__info-fields online-booking__terms-container centered">
                            <label><input type="checkbox" name="acceptance" value="1" class="contact-form__acceptance-field " aria-invalid="false"><span class="wpcf7-list-item-label">I agree with the <a href="/payment-refund/" target="_blank">Refund Policy</a> and I want to proceed with payment.</span></label>
                        </div>

                        <div id="paypal-button-container" class="online-booking__paypal-button-container hidden"></div>
                    </div>



                </div>
            </section>


        </main>




<?php
    endwhile;
endif;
get_footer();
