export type TJurnal = {
    abstrak: string;
    cosine_similarity: number;
    id: number;
    kd_jurnal: string;
    pengarang: string;
    tahun_terbit: string;
    title: string;
}

export type TDataJurnal = {
    id: number; 
    title: string;
    pengarang: string;
    tahun_terbit: string;
    abstrak: string;
    kd_jurnal: string;
    link: string;
}