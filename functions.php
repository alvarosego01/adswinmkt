<?php

function theme_enqueue_styles()
{
  wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', []);
  wp_enqueue_style('main.css', get_stylesheet_directory_uri() . '/dist/styles/main.css', []);

  // Enqueue the main JavaScript file
  wp_enqueue_script('main.js', get_stylesheet_directory_uri() . '/dist/scripts/main.js', [], null, true);

}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles', 20);

function avada_lang_setup()
{
  $lang = get_stylesheet_directory() . '/languages';
  load_child_theme_textdomain('Avada', $lang);
}
add_action('after_setup_theme', 'avada_lang_setup');


add_action('init', 'enable_testimonial_translation_polylang');

function enable_testimonial_translation_polylang() {
    // Verifica si Polylang está activo
    if (function_exists('pll_register_string')) {

        // 1. Registrar el CPT "testimonial" para traducción
        if (post_type_exists('testimonial')) {

            // Opción A: Habilitar traducción desde código (Polylang Pro)
            $polylang_options = get_option('polylang');

            if (is_array($polylang_options)) {
                // Añade "testimonial" a los post types traducibles
                if (!isset($polylang_options['post_types']) || !in_array('testimonial', $polylang_options['post_types'])) {
                    $polylang_options['post_types'][] = 'testimonial';
                    update_option('polylang', $polylang_options);
                }
            }

            // Opción B: Forzar registro (alternativa)
            add_filter('pll_get_post_types', 'add_testimonial_to_polylang', 10, 2);
            function add_testimonial_to_polylang($post_types, $is_settings) {
                if ($is_settings) {
                    $post_types['testimonial'] = 'testimonial';
                }
                return $post_types;
            }
        }
    }
}
