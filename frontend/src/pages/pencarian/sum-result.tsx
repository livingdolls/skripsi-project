import { UseQueryResult } from "react-query"
import { ResponseQueryFetch } from "../../types/response-type"

type props = {
    sum: UseQueryResult<ResponseQueryFetch, Error>
}

export const SumResult = ({sum}: props) => {
    return (
        <p className="text-gray-500 text-sm mt-3 px-2">
            Menampilkan 
                {
                    sum.isFetching 
                        ? '...' 
                        : sum.data !== undefined 
                            ? <b> {sum.data.jml} </b>
                            : null
                }
            Jurnal yang Memiliki Kesamaan dengan Kata Kunci
        </p>
    )
}