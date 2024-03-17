import fetch from "../config/axios"
import { TDataJurnal, TJurnal } from "../types/jurnal-type";
import { ResponseQueryFetch } from "../types/response-type";

export const QueryFetchingService = async (query: string): Promise<ResponseQueryFetch> => {
    const respon = await fetch
                        .post('/_getPencarian.php', {
                            query : query
                        })
                        .then((res) => res.data)
    return respon;
}

export const JurnalFetchingService = async (): Promise<Array<TDataJurnal>> => {
    const respon = await fetch
                            .get('/API/_getAllJurnal.php')
                            .then((res) => res.data)
    return respon;
}