<?php
    require('jurnal_caseFolding.php');
    require('jurnal_tokenisasi.php');
    require('jurnal_filtering.php');
    require('jurnal_stemming.php');
    require('jurnal_buatIndex.php');

    jurnal_case_folding();
    jurnal_token();
    jurnal_filtering();
    jurnal_stemming();
    jurnal_buatIndex();

    header('Location:_tfidf.php');

?>