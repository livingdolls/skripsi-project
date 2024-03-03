<?php
function cosine_similarity(){

    include '_conn.php';

    // perhitungan cosine similarity
    // setelah semua nilai cross product dan akar dipenuhi
    // rumus cs = dot_product / akar_cross_product

    // kosongkan tabel
    $conn->query("TRUNCATE result_cosine_similarity");

    // ambil data
    $dot_product = $conn->query("SELECT * FROM sum_dot_product");
    while($result = mysqli_fetch_array($dot_product)){
        $jurnal_id = $result['jurnal_id'];
        $result_dot_product = $result['dot_product'];

        // ambil data dari hasil akar cross product
        $akar_cross_product = $conn->query("SELECT * FROM akar_cross_product WHERE jurnal_id = $jurnal_id");
        while($res = mysqli_fetch_array($akar_cross_product)){
            $akar = $res['akar_result'];
            $cosine = $result_dot_product / $akar;
            $r = round($cosine,4);

            // masukkan tabel cosine
            $conn->query("INSERT INTO result_cosine_similarity (jurnal_id,cosine_similarity) VALUES ($jurnal_id,$r)");
        }
    }
}
?>