<?php

    function query_token(){
        include '_conn.php';

        //Bersihkan tabel query token
        $conn->query("TRUNCATE query_token");

        // Proses tokenisasi
        
        // ambil query dari hasil case folding
        $get_query_casefolding = $conn->query("SELECT * FROM query_case_folding");

        while($term = mysqli_fetch_array($get_query_casefolding)){
            $query = $term['term'];

            // pemecahan menjadi token
            $token = str_word_count(strtolower($query), 1);

            foreach($token as $key => $token_result){
                // Masukkan ke tabel query token
                $conn->query("INSERT INTO query_token (token) VALUES('$token_result')");
            }
        }
    }

?>