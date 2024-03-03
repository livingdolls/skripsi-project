###Alur Program

1.case folding
2.tokenisasi
3.filtering
4.stemming

5.buat index
6.pembobotan
7.dot product (query * jurnal ke-n)
8. sum dot product (sum(query * jurnal ke-n))
9. cross product jurnal = menghitung bobot kata jurnal pangkat 2
10. Sum cross product = jumlah dari hasil perhitungan cross product jurnal
11. query cross product = menghitung bobot query pangkat 2
12. Sum query cross product = jumlah dari hasil perhitungan query cross product
13. sqrt_cross_product = menghitung akar dari hasil sum(cross product * query cross product)
14. cosine similarity = pembagian dari hasil dot product jurnal ke-n / hasil akar cross product jurnal ke n