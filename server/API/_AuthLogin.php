<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type:aplication/json");
    
    include '../_conn.php';

    $inp = json_decode(file_get_contents('php://input'));


    if($_SERVER['REQUEST_METHOD'] == "POST"){
        $uname = $inp->uname;
        $upass = $inp->upass;
    
        $get_user = $conn->query("SELECT id,nama,uname,role_status FROM tb_user WHERE uname = '$uname' AND pass = '$upass' ");
        $data = $get_user->fetch_assoc();
        $jml = mysqli_num_rows($get_user);
    
        $res = [
            "isLogin" => false,
            "msg" => "",
            "user" => []
        ];
    
        if($jml > 0){
            $res = [
                "isLogin" => true,
                "msg" => "Berhasil Login",
                "user" => $data
            ];
        }
        else{
            $res = [
                "isLogin" => false,
                "msg" => "Username / Password tidak ditemukan",
                "user" => []
            ];
        }
    }

    echo json_encode($res);

?>