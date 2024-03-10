<?php

function jurnal_token(){
    include '_conn.php';

    $conn->query("TRUNCATE jurnal_tokenizing");
    // ambil jurnal hasil case folding
    $jurnal = $conn->query("SELECT * FROM jurnal_casefolding");

    while($term = mysqli_fetch_array($jurnal)){
        $abstrak    = $term['title']." ".$term['token'];
        $id         = $term['jurnal_id'];
        $kd_jurnal  = $term['kd_jurnal'];


        // pemecahan menjadi token
        $token = str_word_count(strtolower($abstrak), 1);

        
        foreach($token as $key => $token_result){
            // Masukkan ke tabel query token
            $conn->query("INSERT INTO jurnal_tokenizing (jurnal_id,token,kd_jurnal) VALUES('$id','$token_result','$kd_jurnal')");
        }
    }
}
?>