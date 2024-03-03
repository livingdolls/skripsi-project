<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type:aplication/json");
    require('query_case_folding.php');
    require('query_tokenisasi.php');
    require('query_filtering.php');
    require('query_stemming.php');
    require('query_buatIndex.php');
    require('jurnal_caseFolding.php');
    require('jurnal_tokenisasi.php');
    require('jurnal_filtering.php');
    require('jurnal_stemming.php');
    require('jurnal_buatIndex.php');
    require('jurnal_pembobotan.php');
    require('query_pembobotan.php');
    require('dot_product.php');
    require('sum_dot_product.php');
    require('cross_product_jurnal.php');
    require('sum_cross_product.php');
    require('query_cross_product.php');
    require('sum_query_cross_product.php');
    require('sqrt_cross_product.php');
    require('cosine_similarity.php');
    include('_conn.php');

    $data = json_decode(file_get_contents('php://input'));

    $query = $data->query;

    query_case_folding($query);
    query_token();
    query_filtering();
    query_stemming();
    query_buatIndex();

    // jurnal_case_folding();
    // jurnal_token();
    // jurnal_filtering();
    // jurnal_stemming();
    // jurnal_buatIndex();

    jurnal_pembobotan();
    query_pembobotan();

    dot_product();
    sum_dot_product();
    cross_product_jurnal();
    sum_cross_product();
    query_cross_product();
    sum_query_cross_product();
    sqrt_cross_product();
    cosine_similarity();

    $result = array();
    $jurnal = array();
    
    $cs = $conn->query("SELECT jurnal.id,jurnal.title,jurnal.pengarang,jurnal.tahun_terbit,jurnal.abstrak,jurnal.kd_jurnal,cosine.cosine_similarity FROM result_cosine_similarity as cosine INNER JOIN tb_jurnal as jurnal on cosine.jurnal_id = jurnal.id WHERE cosine.cosine_similarity > 0 ORDER BY cosine.cosine_similarity DESC");
    $jml = mysqli_num_rows($cs);

    $result = [
        "query" => $query,
        "jml"   => $jml,
        "data" => []
    ];

    while($res = mysqli_fetch_object($cs)){
        $result['data'][] = $res;
    }

    echo json_encode($result);
?>