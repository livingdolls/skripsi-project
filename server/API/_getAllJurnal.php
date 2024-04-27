<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    include '../_conn.php';

    $data = [];

    $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id ASC");
    $jml_data = mysqli_num_rows($jurnal);

    if($jml_data > 0){
        while($r = mysqli_fetch_object($jurnal)){
            $data[] = [
                'abstrak' => utf8_encode($r->abstrak),
                'id' => $r->id,
                'kd_jurnal' => $r->kd_jurnal,
                'pengarang' => $r->pengarang,
                'tahun_terbit' => $r->tahun_terbit,
                'title' => utf8_encode($r->title),
                'link' => $r->link,
            ];
        }
    }
    else{
        $data[] = "Tidak ditemukan data jurnal";
    }

    echo json_encode($data, JSON_INVALID_UTF8_IGNORE);

?>