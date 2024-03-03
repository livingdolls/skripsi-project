<?php
function sqrt_cross_product(){
    include '_conn.php';
    
    // Menghitung dan meng akarkan cross product dari query dan jurnal

    $conn->query("TRUNCATE akar_cross_product");

    // ambil semua data cross product dari sum cross product jurnal
    $sum_cross_product = $conn->query("SELECT * FROM sum_cross_product");

    while($result = mysqli_fetch_array($sum_cross_product)){
        $jurnal_id = $result['jurnal_id'];
        $hasil     = $result['sum_cross_product'];

        // ambil data cross product dari query
        $query_cross_product = $conn->query("SELECT * FROM sum_query_cross_product");
        while($res = mysqli_fetch_array($query_cross_product)){
            $bobot_query = $res['result'];
            $hitung = round($hasil * $bobot_query,4); 
            $akar = sqrt($hitung);
            $r = round($akar,4);

            // Masukkan tabel
            $conn->query("INSERT INTO akar_cross_product (jurnal_id,result_cross_product,akar_result) VALUES ($jurnal_id,$hitung, $r )");
        }
    }
}
?>