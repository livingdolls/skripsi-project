<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    require('query_case_folding.php');
    require('query_tokenisasi.php');
    require('query_filtering.php');
    require('query_stemming.php');
    require('query_buatIndex.php');


    $query = "penerapan cosine similarity";

    query_case_folding($query);
    query_token();
    query_filtering();
    query_stemming();
    query_buatIndex();

    header('Location:_jurnal_preprocessing.php');


?>