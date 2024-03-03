<?php

    function query_stemming(){
        include 'stemming_master.php';
        include '_conn.php';

        // Proses stemming

        // Hapus tabel query stemming

        $conn->query("TRUNCATE query_stemming");
        // Ambil token dari hasil proses filtering
        $filter_result = $conn->query("SELECT * FROM query_filtering");

        while($term = mysqli_fetch_array($filter_result)){
            $token = $term['token'];
            $hasil = stemming($token);
            // masukkan ke table query stemming
            $input = $conn->query("INSERT INTO query_stemming(token) VALUES('$hasil')");
        }
    }
?>