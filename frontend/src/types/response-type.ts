import { TJurnal } from "./jurnal-type"

export type ResponseQueryFetch = {
    data: TJurnal[];
    jml: number;
    query: string;
}