<?php
$TOKEN = "8306201335:AAEutENxkpYiamK7QE1-Ycdqvl9k5wcghcg";
$CHAT_ID = "273331969";

$data = json_decode(file_get_contents("php://input"), true);

$text = "🛠 AstroUsta yangi murojaat:\n"
      . "👤 Ism: {$data['name']}\n"
      . "📧 Email: {$data['email']}\n"
      . "💬 Xabar: {$data['message']}";

$url = "https://api.telegram.org/bot$TOKEN/sendMessage";

file_get_contents($url . "?" . http_build_query([
  "chat_id" => $CHAT_ID,
  "text" => $text
]));
