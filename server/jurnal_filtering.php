<?php

function jurnal_filtering(){
    include '_conn.php';

    $conn->query("TRUNCATE jurnal_filtering");
    // Dapatkan token dari proses tokenisasi
    $token = $conn->query("SELECT * FROM jurnal_tokenizing");
    $file_stopword = file_get_contents("stopword.json");
    $stopword = json_decode($file_stopword);
    
    // Proses filtering
    foreach($token as $token_filter){
        $id = $token_filter['jurnal_id'];
        $kd = $token_filter['kd_jurnal'];
        // echo $token_filter['token'];
        // echo "<br>";

        $hilang = explode(" ",$token_filter['token']);
        $stop = array_diff($hilang, $stopword);
        // print_r(array_filter($stop));

        if($stop != null){
            // Masukkan ke dalam tabel query filtering

            $input = $conn->query("INSERT INTO jurnal_filtering (jurnal_id,token,kd_jurnal) VALUES('$id','$stop[0]','$kd') ");
        }

    }
}

?>