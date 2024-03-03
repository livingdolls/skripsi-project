<?php

function sum_query_cross_product(){
    include '_conn.php';

    // Menghitung total bobot query
    // rumus = sqcp = (bobot_kata + bobot_kata .... dst)
    $conn->query("TRUNCATE sum_query_cross_product");

    $jumlah_query = $conn->query("SELECT SUM(result_query_cross_product) AS jumlah from query_cross_product");
    while($result = mysqli_fetch_array($jumlah_query)){
        $jumlah = round($result['jumlah'],4);

        // Masukkan tabel
        $conn->query("INSERT INTO sum_query_cross_product (result) VALUES ($jumlah) ");
    }
}
?>