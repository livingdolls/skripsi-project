<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../_conn.php';

    $id = $_GET['id'];
    $res = array();

    $hapus_jurnal = $conn->query("DELETE FROM tb_jurnal WHERE id =  $id");

    if($hapus_jurnal){
        $res["msg"] = "Berhasil Hapus";
    }
    else{
        $res["msg"] = "Ada yang salah";
    }

    echo json_encode($res);

?>