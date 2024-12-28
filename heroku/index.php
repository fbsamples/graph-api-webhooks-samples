<?php
/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

$token = getenv('TOKEN') ?: 'token';
$received_updates = [];

function verify_token($token) {
    if ($_GET['hub_mode'] == 'subscribe' && $_GET['hub_verify_token'] == $token) {
        echo $_GET['hub_challenge'];
    } else {
        http_response_code(400);
    }
}

function handle_request() {
    global $received_updates;

    $input = file_get_contents('php://input');
    $update = json_decode($input, true);

    if (isset($_SERVER['HTTP_X_HUB_SIGNATURE'])) {
        $signature = $_SERVER['HTTP_X_HUB_SIGNATURE'];
        $expected_signature = 'sha1=' . hash_hmac('sha1', $input, getenv('APP_SECRET'));

        if (!hash_equals($expected_signature, $signature)) {
            http_response_code(401);
            echo 'Invalid signature';
            return;
        }
    }

    $received_updates[] = $update;
    http_response_code(200);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if ($_SERVER['REQUEST_URI'] === '/') {
        echo '<pre>' . json_encode($received_updates, JSON_PRETTY_PRINT) . '</pre>';
    } elseif (in_array($_SERVER['REQUEST_URI'], ['/facebook', '/instagram', '/threads'])) {
        verify_token($token);
    } else {
        http_response_code(404);
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (in_array($_SERVER['REQUEST_URI'], ['/facebook', '/instagram', '/threads'])) {
        handle_request();
    } else {
        http_response_code(404);
    }
} else {
    http_response_code(405);
}
