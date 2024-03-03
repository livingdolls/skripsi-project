<?php
    function query_buatIndex(){

        include '_conn.php';

        // kosongkan folder query index
        $conn->query("TRUNCATE query_index");

        // Ambil data jurnal
        $jurnal = $conn->query("SELECT * FROM tb_jurnal");
        $jml_jurnal = mysqli_num_rows($jurnal);

        // Dapatkan token dari hasil stemming

        $stemming_result = $conn->query("SELECT token FROM query_stemming ORDER BY id");
        // Pembobotna query index
        while($term = mysqli_fetch_array($stemming_result)){
            $token_mentah = $term['token'];
            // Hilangkan spasi
            $token = explode(" ", trim($token_mentah));

            foreach($token as $key => $value){
                if($token[$key] != "") {
                    $hitung_baris = $conn->query("SELECT jumlah FROM query_index WHERE term = '$token[$key]' ");
                    $jml_baris = mysqli_num_rows($hitung_baris);

                    if($jml_baris > 0){
                        $jml_term = mysqli_fetch_array($hitung_baris);
                        $count = $jml_term['jumlah'];
                        $count++;

                        $inp = $conn->query("UPDATE query_index SET jumlah = '$count' WHERE term = '$token[$key]'");

                    }
                    else{
                        // Simpan ke query index dan set bobot menjadi 1
                        $inp = $conn->query("INSERT INTO query_index (term, jumlah,bobot) VALUES ('$token[$key]', 1,0)");
                    }

                }
            }
        }
    }

?>