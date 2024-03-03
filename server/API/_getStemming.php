<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../_conn.php';

    $id = $_GET['id'];
    $res = array();

    $jurnal = $conn->query("SELECT A.jurnal_id AS jurnal_id,A.token AS token_stemming, B.token AS token_filtering, A.kd_jurnal FROM `jurnal_stemming` as A JOIN jurnal_filtering as B ON A.id = B.id");
    $jml_data = mysqli_num_rows($jurnal);

    if($jml_data > 0){
        while($r = mysqli_fetch_object($jurnal)){
            $res[] = $r;
        }
    }
    else{
        $res[] = "Jurnal tidak ditemukan";
    }

    echo json_encode($res);

?>