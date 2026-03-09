<?php
$book_cta = get_field('book_cta', 'option');
?>
<div class="book-cta hidden">
    <a href="<?php echo $book_cta['link']; ?>">
        <button class="button button--book"><?php echo $book_cta['text']; ?></button>
    </a>
</div>