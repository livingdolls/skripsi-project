<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type:aplication/json");

    require('../jurnal_buatIndex.php');
    include('../_conn.php');


    jurnal_buatIndex();


    $result = array();

    $result = [
        "msg" => "Berhasil"
    ];

    echo json_encode($result);
?>