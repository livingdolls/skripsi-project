<?php

    function jurnal_buatIndex(){
        include '_conn.php';
    
        // kosongkan tabel bobot
        $conn->query("TRUNCATE jurnal_index");
    
        // Ambil data jurnal
        $jurnal = $conn->query("SELECT * FROM tb_jurnal ORDER BY id");
        $jml_jurnal = mysqli_num_rows($jurnal);
    
        // Dapatkan token dari hasil stemming
    
        $stemming_result = $conn->query("SELECT * FROM jurnal_stemming ORDER BY id");
        // Pembobotna query index
        while($term = mysqli_fetch_array($stemming_result)){
            $id             = $term['jurnal_id'];
            $kd             = $term['kd_jurnal'];
            $token_mentah   = $term['token'];
            // Hilangkan spasi
            $token = explode(" ", trim($token_mentah));
    
    
            foreach($token as $key => $value){
                if($token[$key] != "") {
                    $hitung_baris = $conn->query("SELECT jumlah FROM jurnal_index WHERE token = '$token[$key]' AND jurnal_id = $id ");
                    $jml_baris = mysqli_num_rows($hitung_baris);
    
    
                    if($jml_baris > 0){
                        $jml_term = mysqli_fetch_array($hitung_baris);
                        $count = $jml_term['jumlah'];
                        $count++;
    
                        $inp = $conn->query("UPDATE jurnal_index SET jumlah = $count WHERE token = '$token[$key]' AND jurnal_id = $id");
    
                    }
                    else{
                        // Simpan ke query index dan set jumlah menjadi 1
                        $inp = $conn->query("INSERT INTO jurnal_index (jurnal_id,token,jumlah,bobot) VALUES ('$id','$token[$key]', 1,0)");
                    }
    
                }
            }
        }
        // Akhir dari pembobotan index
    }

?>