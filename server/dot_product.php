<?php

function dot_product(){
    include '_conn.php';

    // Dot produk untuk menghitung Vektor Q x Dokumen
    // A1 adalah query sebagai data untuk perbandingan
    // B1 adalah data jurnal

    // kosongkan tabel dot product
    $conn->query("TRUNCATE dot_product");

    // Ambil semua data jurnal
    $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id ASC");

    while($result = mysqli_fetch_array($jurnal)){
        $jurnal_id = $result['id'];

        // Ambil data query
        $sql_query = $conn->query("SELECT * FROM query_index ORDER BY id");
        $jml_query = mysqli_num_rows($sql_query);

        while($query = mysqli_fetch_array($sql_query)){
            $id = $query['id'];
            $term = $query['term'];
            $bobot = $query['bobot'];

            // Jumlah jurnal yang mengandung term
            $jumlah_term = $conn->query("SELECT * FROM jurnal_index WHERE token = '$term' AND jurnal_id = $jurnal_id ") or die(mysqli_error());
            $jml_term = mysqli_fetch_array($jumlah_term);
            $bobot_kata = '';

            // Cek jika query tidak sama dengan kata di jurnal maka beri nilai 0
            $data1 = isset($jml_term['bobot']) ? $jml_term['bobot'] : 0;

            $bobot_kata = $data1;

                    
            // jumlah dot product A1xB1
        
            $dot_product = round($bobot * $bobot_kata,4);

            // Masukkan ke database
            $conn->query("INSERT INTO dot_product (jurnal_id, token, result_dot_product) VALUES ($jurnal_id,'$term',$dot_product)") or die(mysqli_error());
        }
    }

}


?>