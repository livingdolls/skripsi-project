<?php

  function query_case_folding($query){

      include '_conn.php';

      $query_asli = $query;

      // Kosongkan tabel query
      $trn_sql = $conn->query("TRUNCATE query");

      //input query ke database
      $inp_query = $conn->query("INSERT INTO query (term) VALUES('$query_asli')");


      // Proses Case Folding
      $kalimat = strtolower($query_asli); //proses pengubahan huruf alfabet kapital menjadi kecil

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


      // Bersihkan Tabel wuery case folding
      $conn->query("TRUNCATE query_case_folding");
      $masukkan=$conn->query("INSERT INTO query_case_folding (term) VALUES('$kalimat')");	
    // ===AKHIR DARI CASE FOLDING===
  }

?>