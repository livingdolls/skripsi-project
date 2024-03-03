<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../_conn.php';

    $res = [
        "bobot" => [],
        "product" => []
    ];

    $bobot_query = $conn->query("SELECT * FROM query_index");
    $product_query = $conn->query("SELECT * FROM sum_query_cross_product");
    $jml_data = mysqli_num_rows($bobot_query);

    if($jml_data > 0){
        while($r = mysqli_fetch_object($bobot_query)){
            $res["bobot"][] = $r;
        }

        while($r = mysqli_fetch_object($product_query)){
            $res["product"][] = $r;
        }
    }
    else{
        $res[] = "Query tidak ditemukan";
    }

    echo json_encode($res);

?>