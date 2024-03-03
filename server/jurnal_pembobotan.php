<?php

function jurnal_pembobotan(){
    
        include '_conn.php';
    
        // Cek jumlah jurnal
        $jml    = $conn->query("SELECT DISTINCT jurnal_id FROM jurnal_bobot");
        $n      = mysqli_num_rows($jml);
    
        // Ambil data dari jurnal bobot
        $bobot = $conn->query("SELECT * FROM jurnal_bobot ORDER BY id");
        $jml_index = mysqli_num_rows($bobot);
    
        while($token = mysqli_fetch_array($bobot)){
            $t  = $token['token'];
            $tf     = $token['jumlah'];
            $id     = $token['jurnal_id'];
    
            // jumlah dokumen yang mengandung term
            $jumlah_term = $conn->query("SELECT COUNT(*) as jml FROM jurnal_bobot WHERE token='$t' ");
            $jml_term = mysqli_fetch_array($jumlah_term);
    
            // Tambahkan dari query jika ada
            $query = $conn->query("SELECT * from query_index WHERE term = '$t' ");
            $res_query = mysqli_fetch_array($query);
            $res = mysqli_num_rows($query);
    
            if($res > 0){
                $term = $jml_term['jml'] + $res_query['jumlah'];
            }
            else
            {
                $term = $jml_term['jml'];
            }

        
            // Hitung tf idf
            $dok = $n+1;
            $w = ($tf * log10($dok/$term));
            $tfidf = round($w,4);
    
            // Update Bobot
            $conn->query("UPDATE jurnal_bobot SET bobot = $tfidf WHERE jurnal_id = $id AND id = $token[id] ");
            
        }
}
?>