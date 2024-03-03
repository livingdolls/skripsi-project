<?php
    function sum_dot_product(){
        include '_conn.php';

        // Menghitung jumlah total dot product
        // Rumus = jumlah = (dotproduk + dotproduk + dotproduk..........)

        // Kosongkat tabel sum dot product

        $conn->query("TRUNCATE sum_dot_product");

        // Ambil semua jurnal
        $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id ASC");

        while($result = mysqli_fetch_array($jurnal)){
            $jurnal_id = $result['id'];

            // hitung jumlah dot produk tiap jurnal
            $sum_dot_product = $conn->query("SELECT SUM(result_dot_product) AS jumlah FROM dot_product WHERE jurnal_id = $jurnal_id");

            while($result = mysqli_fetch_array($sum_dot_product)){
                $jumlah = round($result['jumlah'],4);

                // Masukkan ke tabel sum dot produk sesuai jurnalnya

                $conn->query("INSERT INTO sum_dot_product (jurnal_id, dot_product) VALUES($jurnal_id, $jumlah) ");
            }
        }

    }

?>