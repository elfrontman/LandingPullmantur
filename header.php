<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<title><?php bloginfo( 'name' ); wp_title() ?></title>
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
	<link rel="stylesheet" href="<?php echo get_bloginfo( 'template_directory' );?>/lib/slick/slick.css">
	<link rel="stylesheet" href="<?php echo get_bloginfo( 'template_directory' );?>/lib/foundation/css/foundation.min.css">
	<link rel="stylesheet" href="<?php echo get_bloginfo( 'template_directory' );?>/css/bundle.css">
	<link rel="stylesheet" href="<?php echo get_bloginfo( 'template_directory' );?>/style.css">
	
	<script src="<?php echo get_bloginfo( 'template_directory' );?>/lib/foundation/js/vendor/jquery.js"></script>
	<script src="<?php echo get_bloginfo( 'template_directory' );?>/lib/foundation/js/vendor/foundation.min.js"></script>
	<script src="<?php echo get_bloginfo( 'template_directory' );?>/lib/slick/slick.min.js"></script>
	<script src="<?php echo get_bloginfo( 'template_directory' );?>/lib/jquery.mousewheel.min.js"></script>
	<script src="<?php echo get_bloginfo( 'template_directory' );?>/js/bundle.js"></script>
	<?php 
		wp_head();
		global $post;
		$post_slug=$post->post_name;
	?>
</head>
<body>
	<div class="wrapp-app <?= $post_slug != 'inicio' && $post_slug != 'bio' ? 'scroll-wrapp' : $post_slug?>">
		<?php get_sidebar(); ?>