<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../_conn.php';

    // $data = json_decode(file_get_contents('php://input'));

    $id = $_GET['id'];
    $res = array();

    $jurnal = $conn->query("SELECT jurnal.id,jurnal.title,jurnal.pengarang,jurnal.tahun_terbit,jurnal.abstrak,jurnal.kd_jurnal,dot.dot_product,akar.akar_result,cosine.cosine_similarity FROM result_cosine_similarity as cosine INNER JOIN tb_jurnal as jurnal on cosine.jurnal_id = jurnal.id INNER JOIN sum_dot_product AS dot on jurnal.id = dot.jurnal_id INNER JOIN akar_cross_product as akar on dot.jurnal_id = akar.jurnal_id WHERE jurnal.id =  $id");
    $jml_data = mysqli_num_rows($jurnal);

    if($jml_data > 0){
        while($r = mysqli_fetch_object($jurnal)){
            $res = [
                "data" => $r
            ];
        }
    }
    else{
        $res[] = "Jurnal tidak ditemukan";
    }

    echo json_encode($res);

?>