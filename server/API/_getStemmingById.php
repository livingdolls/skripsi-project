<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    include '../_conn.php';


    $id = $_GET['id'];
    $res = array();

    $jurnal = $conn->query("SELECT * FROM `jurnal_stemming` WHERE jurnal_id = $id");
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