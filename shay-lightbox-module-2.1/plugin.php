<?php
/*
Plugin Name:	Shay Lightbox Module
Description:	A simple custom solution for adding lightboxes to images.
Version:		2.1.0
Author:		Shay Pottle
License:		MIT

This plugin is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

This plugin is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with This plugin. If not, see {URI to Plugin License}.
*/

if ( ! defined( 'WPINC' ) ) {
	die;
}

add_action( 'wp_enqueue_scripts', 'custom_enqueue_files' );


function custom_enqueue_files() {
	// if this is not the front page, abort.
	// if ( ! is_front_page() ) {
	// 	return;
	// }

	// loads a CSS file in the head.
	wp_enqueue_style( 'shay-lightbox-css', plugin_dir_url( __FILE__ ) . 'assets/shay-lightbox.css' );

	// loads JS files in the footer.
	wp_enqueue_script( 'shay-lightbox-js', plugin_dir_url( __FILE__ ) . 'assets/shay-lightbox.js', '', '1', true );

}