import { useQuery } from "react-query"
import { TDataJurnal } from "../../types/jurnal-type"
import { JurnalFetchingService } from "../../service/fetching-query"
import { TableJurnal } from "./table-jurnal"

export const DataJurnalPage = () => {

    const fetchJurnal = useQuery<TDataJurnal[], Error>({
        queryKey: ["fetching-list-jurnal"],
        queryFn: (): Promise<TDataJurnal[]> => JurnalFetchingService(),
        refetchOnWindowFocus: false
    })

    return (
        <div className="p-5 mt-5">
            <span className="bg-unisbank-400 text-white rounded-full p-2">Data Jurnal Tersimpan</span>

            {fetchJurnal.isLoading ? <p>Loading...</p> : ''}

            <TableJurnal data={fetchJurnal.data} />
        </div>
    )
}