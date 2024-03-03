<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../_conn.php';

    $id = $_GET['id'];
    $res = array();

    $bobot_cosine = $conn->query("SELECT * FROM cross_product WHERE jurnal_id =  $id");
    $product = $conn->query("SELECT A.jurnal_id,A.dot_product, B.sum_cross_product, C.result_cross_product,C.akar_result, D.cosine_similarity FROM sum_dot_product AS A JOIN sum_cross_product AS B ON A.jurnal_id = B.jurnal_id JOIN akar_cross_product AS C ON B.jurnal_id = C.jurnal_id JOIN result_cosine_similarity AS D ON C.jurnal_id = D.jurnal_id WHERE A.jurnal_id = $id");
    $query_product = $conn->query("SELECT * FROM sum_query_cross_product");

    $query_res = $query_product->fetch_assoc();

    $result = [
        "query" => $query_res,
        "data" => [
            "bobot_kata" => [],
            "jurnal_product" => [],
        ]
    ];

    while($res = mysqli_fetch_object($bobot_cosine)){
        $result['data']['bobot_kata'][] = $res;
    }

    while($res = mysqli_fetch_object($product)){
        $result['data']['jurnal_product'][] = $res;
    }

    echo json_encode($result);

?>