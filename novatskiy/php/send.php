<?php

header('Content-Type: application/json');
sleep(2);
echo json_encode($_POST);