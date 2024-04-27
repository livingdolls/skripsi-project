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

export type TFCosine = {
    akar_result : string;
    cosine_similarity: string;
    dot_product: string;
}

type MergeUnionOfRecordTypes<U extends Record<string, unknown>> = { [K in (U extends unknown ? keyof U : never)]: U extends unknown ? K extends keyof U ? U[K] : never : never}

export type TRDetailPencarianJurnal = MergeUnionOfRecordTypes<TDataJurnal | TFCosine>