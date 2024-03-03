<?php

function query_cross_product(){
    include '_conn.php';

    // Menghitung query cross product
    // rumus qcp = bobot_query ^ 2
    
    // Kosongkan tabel 
    $conn->query("TRUNCATE query_cross_product");

    // ambil data query index
    $query = $conn->query("SELECT * FROM query_index ORDER BY ID");

    while($result = mysqli_fetch_array($query)){
        $token = $result['term'];

        $resquery = $conn->query("SELECT * FROM query_index WHERE term = '$token' ");
        $restoken = mysqli_fetch_array($resquery);

        $bobot = $restoken['bobot'];
        $jumlah = $bobot * $bobot; //dipangkatkan
        $r = round($jumlah, 4);

        // Masukkan tabel
        $conn->query("INSERT INTO query_cross_product (token,result_query_cross_product) VALUES ('$token',$r)");

    }
}
?>