<?php
function sum_cross_product(){
    include '_conn.php';

    // proses menghitung jumlah cross product tiap jurnal
    // rumus = jumlah = (cross_p + cross_p + cross_p .... dst)

    // kosongkan tabel sum cross product
    $conn->query("TRUNCATE sum_cross_product");
    // ambil data jurnal
    $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id");

    while($result = mysqli_fetch_array($jurnal)){
        $jurnal_id = $result['id'];

        $sum_cross_product = $conn->query("SELECT SUM(result_cross_product) AS jumlah FROM cross_product WHERE jurnal_id = $jurnal_id");

        while($result = mysqli_fetch_array($sum_cross_product)){
            $jumlah = round($result['jumlah'], 4);
            
            // Masukkan tabel result cross product
            $conn->query("INSERT INTO sum_cross_product (jurnal_id,sum_cross_product) VALUES ($jurnal_id, $jumlah)");
        }

    }
}

?>