import fetch from "../config/axios"
import { ResponseQueryFetch } from "../types/response-type";

export const QueryFetchingService = async (query: string): Promise<ResponseQueryFetch> => {
    const respon = await fetch
                        .post('/_getPencarian.php', {
                            query : query
                        })
                        .then((res) => res.data)
    return respon;
}