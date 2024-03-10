<?php

    function query_filtering(){
        include '_conn.php';
        
        $conn->query("TRUNCATE query_filtering");
        
        // Dapatkan token dari proses tokenisasi
        $token = $conn->query("SELECT * FROM query_tokenizing");
        $file_stopword = file_get_contents("stopword.json");
        $stopword = json_decode($file_stopword);
        
        // Proses filtering
        foreach($token as $token_filter){
            $hilang = explode(" ",$token_filter['token']);
            $stop = array_diff($hilang, $stopword);
            
            // Masukkan ke dalam tabel query filtering
            if($stop != null){
                $input = $conn->query("INSERT INTO query_filtering (token) VALUES('$stop[0]') ");
            }
        }
    }


?>