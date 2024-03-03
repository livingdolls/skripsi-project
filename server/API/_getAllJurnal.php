<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    include '../_conn.php';

    $data = [];

    $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id ASC");
    $jml_data = mysqli_num_rows($jurnal);

    if($jml_data > 0){
        while($r = mysqli_fetch_object($jurnal)){
            $data[] = $r;
        }
    }
    else{
        $data[] = "Tidak ditemukan data jurnal";
    }

    echo json_encode($data);

?>