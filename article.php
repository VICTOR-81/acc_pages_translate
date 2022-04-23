<?php 
// $articles_list = file_get_contents('data.json');

// $current_article = json_decode($articles_list, true)['channel']['item'][0];
$article_markdown = file_get_contents('https://accounting.jara.ge/'.$_GET['article']);
$test_md = preg_match('/<section class="blog-single">([\s\S]+?)<\/section>/', $article_markdown, $matches);
$doc_title = preg_match('/<title>([\s\S]+?)<\/title>/', $article_markdown. $title_m);
// $dom = new DOMDocument();
// @$dom->loadHTML($article_markdown);
// $xpath = new DOMXpath($dom);
// $result = $xpath->query('//div[@class="vc_row wpb_row vc_row-fluid"]');
// $result = $xpath->query('//div[@class="wpb_text_column wpb_content_element "]');
?>
<?php $title = ''.$title_m[0].' » Jara Accounting' ; $desc = 'Как начать свой бизнес в Грузии?После проведение реформ в Доме юстиций действует принцип «одного окна», что позволяет резидентам и нерезидентам Грузии'; include 'templates/header.php'; ?>

<?php
echo "<div class='container'>";
    echo $matches[0];
echo "</div>";

    include 'templates/form-two-fields.php'
?>

<link rel="stylesheet" href="css/single-article.css">

<script>
document.addEventListener('DOMContentLoaded', function() {
    var post = document.querySelector('article.post');
    var images = post.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        if (images[i].getAttribute('data-src')) {
            images[i].src = images[i].getAttribute('data-src')
        }
        console.log(images[i].getAttribute('data-src'));
    }
})
</script>

<?php include 'templates/footer.php'; ?>