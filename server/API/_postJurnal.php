<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type:aplication/json");

    include '../_conn.php';

    $data = json_decode(file_get_contents('php://input'));

    $result = [];

    if($_SERVER['REQUEST_METHOD'] == "POST"){
        if(empty($data->title)){
            $result = [
                "status" => 500,
                "msg"   => "Judul masih kosong"
            ];
        }
    
        elseif(empty($data->pengarang)){
            $result = [
                "status" => 500,
                "msg"   => "Pengarang masih kosong"
            ];
        }
    
        elseif(empty($data->tahun)){
            $result = [
                "status" => 500,
                "msg"   => "Tahun masih kosong"
            ];
        }
    
        elseif(empty($data->kd_jurnal)){
            $result = [
                "status" => 500,
                "msg"   => "Kode Jurnal masih kosong"
            ];
        }
    
        elseif(empty($data->abstrak)){
            $result = [
                "status" => 500,
                "msg"   => "Abstrak masih kosong"
            ];
        }

        else{
            $title      = $data->title;
            $pengarang  = $data->pengarang;
            $tahun      = $data->tahun;
            $kd_jurnal  = $data->kd_jurnal;
            $abstrak    = $data->abstrak;
        
            // Masukkan ke database
            $inp = $conn->query("INSERT INTO tb_jurnal(title,pengarang,tahun_terbit,abstrak,kd_jurnal) VALUES ('$title','$pengarang','$tahun','$abstrak','$kd_jurnal')");
    
            if($inp){
                $result = [
                    "status" => 201,
                    "msg" => "Berhasil menambah data"
                ];
            }
        }
    }

    echo json_encode($result);
?>