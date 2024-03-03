<?php

    function jurnal_stemming(){
        // include 'stemming_master.php';
        include '_conn.php';

        // Proses stemming

        // Hapus tabel query stemming

        $conn->query("TRUNCATE jurnal_stemming");
        // Ambil token dari hasil proses filtering
        $filter_result = $conn->query("SELECT * FROM jurnal_filtering");

        while($term = mysqli_fetch_array($filter_result)){
            $token      = $term['token'];
            $hasil      = stemming($token);
            $id         = $term['jurnal_id'];
            $kd_jurnal  = $term['kd_jurnal'];

            // masukkan ke table jurnal stemming
            $input = $conn->query("INSERT INTO jurnal_stemming(jurnal_id,token,kd_jurnal) VALUES('$id','$hasil','$kd_jurnal')");
        }

    }
?>