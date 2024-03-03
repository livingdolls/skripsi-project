<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type:aplication/json");
    require('jurnal_caseFolding.php');
    require('jurnal_tokenisasi.php');
    require('jurnal_filtering.php');
    require('jurnal_stemming.php');
    require('jurnal_buatIndex.php');
    include('_conn.php');
    include 'stemming_master.php';

    $data = json_decode(file_get_contents('php://input'));

    jurnal_case_folding();
    jurnal_token();
    jurnal_filtering();
    jurnal_stemming();
    jurnal_buatIndex();


    $result = array();

    $result = [
        "msg" => "Berhasil"
    ];

    echo json_encode($result);
?>