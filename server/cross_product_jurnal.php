<?php

function cross_product_jurnal(){
    include '_conn.php';

    // Menghitung cross produk untuk setiap jurnal
    // Rumus crossproduct = bobot_jurnal * bobot_jurnal

    // kosongkan tabel cross product
    $conn->query("TRUNCATE cross_product");
    // ambil semua jurnal
    $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id");

    while($result = mysqli_fetch_array($jurnal)){
        $id = $result['id'];

        // ambil bobot pada jurnal_index pada setiap jurnal
        $bobot = $conn->query("SELECT * FROM jurnal_index WHERE jurnal_id = $id ");

 
        while($res = mysqli_fetch_array($bobot)){
            $bobot_kata = $res['bobot'];
            $token      = $res['token'];

            
            // bobot tiap kata akan dipangkatkan
            $cross_product = round($bobot_kata * $bobot_kata ,4);

            // Masukkan ke tabel cross produc sesuai id jurnal
            $conn->query("INSERT INTO cross_product (jurnal_id,token, result_cross_product) VALUES ($id,'$token',$cross_product) ");

        }
    }
}

?>