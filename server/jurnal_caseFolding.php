<?php

function jurnal_case_folding(){

    include '_conn.php';


    // Kosongkan tabel query
    $conn->query("TRUNCATE jurnal_casefolding");
    $jurnal = $conn->query("SELECT * FROM tb_jurnal");

    while($term = mysqli_fetch_array($jurnal)){

        $id_jurnal      = $term['id'];
        $title          = $term['title'];
        $abstrak        = $term['abstrak'];
        $kode_jurnal    = $term['kd_jurnal'];

        // Proses Case Folding
        $kalimat = strtolower($abstrak); //proses pengubahan huruf alfabet kapital menjadi kecil
    
        //hilangkan tanda baca
        $kalimat = str_replace("'", " ", $kalimat);	 
        $kalimat = str_replace("-", " ", $kalimat);	 
        $kalimat = str_replace(")", " ", $kalimat);	 
        $kalimat = str_replace("(", " ", $kalimat);	 	    
        $kalimat = str_replace("\"", " ", $kalimat);	 
        $kalimat = str_replace("/", " ", $kalimat);	 
        $kalimat = str_replace("=", " ", $kalimat);	 
        $kalimat = str_replace(".", " ", $kalimat);	 
        $kalimat = str_replace(",", " ", $kalimat);	 
        $kalimat = str_replace(":", " ", $kalimat);	 
        $kalimat = str_replace(";", " ", $kalimat);	 
        $kalimat = str_replace("!", " ", $kalimat);	
        $kalimat = str_replace("?", " ", $kalimat);	
        $kalimat = str_replace("`", " ", $kalimat);
        $kalimat = str_replace("~", " ", $kalimat);
        $kalimat = str_replace("@", " ", $kalimat);
        $kalimat = str_replace("#", " ", $kalimat);
        $kalimat = str_replace("$", " ", $kalimat);
        $kalimat = str_replace("%", " ", $kalimat);
        $kalimat = str_replace("^", " ", $kalimat);
        $kalimat = str_replace("&", " ", $kalimat);
        $kalimat = str_replace("*", " ", $kalimat);
        $kalimat = str_replace("_", " ", $kalimat);
        $kalimat = str_replace("+", " ", $kalimat);
        $kalimat = str_replace("[", " ", $kalimat);
        $kalimat = str_replace("]", " ", $kalimat);
        $kalimat = str_replace("<", " ", $kalimat);
        $kalimat = str_replace(">", " ", $kalimat);

        $judul = strtolower($title);

        $judul = str_replace("'", " ", $judul);	 
        $judul = str_replace("-", " ", $judul);	 
        $judul = str_replace(")", " ", $judul);	 
        $judul = str_replace("(", " ", $judul);	 	    
        $judul = str_replace("\"", " ",$judul);	 
        $judul = str_replace("/", " ", $judul);	 
        $judul = str_replace("=", " ", $judul);	 
        $judul = str_replace(".", " ", $judul);	 
        $judul = str_replace(",", " ", $judul);	 
        $judul = str_replace(":", " ", $judul);	 
        $judul = str_replace(";", " ", $judul);	 
        $judul = str_replace("!", " ", $judul);	
        $judul = str_replace("?", " ", $judul);	
        $judul = str_replace("`", " ", $judul);
        $judul = str_replace("~", " ", $judul);
        $judul = str_replace("@", " ", $judul);
        $judul = str_replace("#", " ", $judul);
        $judul = str_replace("$", " ", $judul);
        $judul = str_replace("%", " ", $judul);
        $judul = str_replace("^", " ", $judul);
        $judul = str_replace("&", " ", $judul);
        $judul = str_replace("*", " ", $judul);
        $judul = str_replace("_", " ", $judul);
        $judul = str_replace("+", " ", $judul);
        $judul = str_replace("[", " ", $judul);
        $judul = str_replace("]", " ", $judul);
        $judul = str_replace("<", " ", $judul);
        $judul = str_replace(">", " ", $judul);

        $conn->query("INSERT INTO jurnal_casefolding (jurnal_id,title,token,kd_jurnal) VALUES('$id_jurnal','$judul','$kalimat','$kode_jurnal')");	
    }
}

?>