<?php
/*
Plugin Name: Custom Form Handler
Plugin URI: http://yourwebsite.com/
Description: Handles form submissions, sends notifications, and saves to the database.
Version: 1.0
Author: Jiang
Author URI: http://yourwebsite.com/
*/

// If this file is called directly, abort.
if (!defined('WPINC')) {
    die;
}

// Register REST API route
add_action('rest_api_init', function () {
    register_rest_route('custom-form/v1', '/submit', array(
        'methods' => 'POST',
        'callback' => 'handle_form_submission',
        'permission_callback' => '__return_true',
    ));
});

function handle_form_submission($request) {
    $params = $request->get_json_params();

    $name = sanitize_text_field($params['name']);
    $email = sanitize_email($params['email']);
    $subject = sanitize_text_field($params['subject']);
    $message = sanitize_textarea_field($params['message']);

    // Here you can handle the form data, e.g., send an email, save to database, etc.
    $to = get_option('admin_email');
    $headers = array('Content-Type: text/html; charset=UTF-8');
    $body = "Name: $name<br>Email: $email<br>Subject: $subject<br>Message: $message";

    $mail_sent = wp_mail($to, $subject, $body, $headers);

    if ($mail_sent) {
        return new WP_REST_Response('Form submitted successfully', 200);
    } else {
        return new WP_REST_Response('Form submission failed', 500);
    }
}