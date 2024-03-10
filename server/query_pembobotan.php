<?php
function query_pembobotan(){
    include '_conn.php';
    
        // Ambil data index jurnal
        $index_jurnal   = $conn->query("SELECT DISTINCT jurnal_id FROM jurnal_index");
        $jml_index      = mysqli_num_rows($index_jurnal);
    
        // Ambil data query
        $query = $conn->query("SELECT * FROM query_index");
    
        while($n = mysqli_fetch_array($query)){
            $t   = $n['term'];
            $jumlah = $n['jumlah'];
            $id     = $n['id'];
    
            $jumlah_term = $conn->query("SELECT COUNT(*) as total_term FROM jurnal_index WHERE token = '$t' ");
            $jml_term = mysqli_fetch_array($jumlah_term);
            $term   = $jml_term['total_term'] + $jumlah;
 
    
            // Hitung TF-IDF
            // rumus w = tf * log(n/N)
            $doc = $jml_index + 1;
            $w  = ($jumlah * log10($doc/$term));
            $tfidf = round($w,4);

    
            // Update bobot query
    
            $up = $conn->query("UPDATE query_index SET bobot = $tfidf WHERE id = $id");
        }
}

?>