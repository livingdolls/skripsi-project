import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom"
import { FetchDetailPencarianJurnal } from "../../service/fetching-query";
import { TRDetailPencarianJurnal } from "../../types/jurnal-type";
import fetch from "../../config/axios";

export const DetailPencarianJurnal = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    let id = params.id;

    if(id == undefined) {
        navigate('/pencarian')
        return
    }

    const data = useQuery<TRDetailPencarianJurnal, Error>({
        queryKey: ["detail-jurnal-pencarian", id],
        queryFn: (): Promise<TRDetailPencarianJurnal> =>  FetchDetailPencarianJurnal(id),
        refetchOnWindowFocus: false,
    })

    const bobot = useQuery({
        queryKey: [`detail-token-pencarian-${id}`, id],
        queryFn: async () => {
            let {data} = await fetch.get(`/API/_resultPembobotan.php?id=${id}`)

            return data
        }
    })

    return (
        <div className="overflow-hidden p-5 mt-8">
            <table className="w-full table-fixed">
                <tbody>
                    <tr>
                        <td className="border-b py-4 px-6">Kemiripan</td>
                        <td className="border-b py-4 px-6">{data.data?.cosine_similarity}</td>
                    </tr>
                    <tr>
                        <td className="border-b py-4 px-6">Title</td>
                        <td className="border-b py-4 px-6">{data.data?.title}</td>
                    </tr>
                    <tr>
                        <td className="border-b py-4 px-6">Abstrak</td>
                        <td className="border-b py-4 px-6">{data.data?.abstrak}</td>
                    </tr>
                    <tr>
                        <td className="border-b py-4 px-6">Pengarang</td>
                        <td className="border-b py-4 px-6">{data.data?.pengarang}</td>
                    </tr>
                    <tr>
                        <td className="border-b py-4 px-6">Kode Jurnal</td>
                        <td className="border-b py-4 px-6">{data.data?.kd_jurnal}</td>
                    </tr>
                    <tr>
                        <td className="border-b py-4 px-6">Penerbit</td>
                        <td className="border-b py-4 px-6">{data.data?.tahun_terbit}</td>
                    </tr>
                    <tr>
                        <td className="border-b py-4 px-6">Download</td>
                        <td className="border-b py-4 px-6">{data.data?.link}</td>
                    </tr>
                </tbody>
            </table>

            {/* Table Preprocessing */}

            <div className="flex flex-row gap-3">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-unisbank-400">
                            <th className="w-[30%] py-4 px-6 text-left text-white font-bold uppercase">Kata</th>
                            <th className="w-[30%] py-4 px-6 text-left text-white font-bold uppercase">Kemunculan Kata</th>
                            <th className="w-[20%] py-4 px-6 text-left text-white font-bold uppercase">Term Frequency</th>
                            <th className="w-[10%] py-4 px-6 text-left text-white font-bold uppercase">Bobot Kata</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                bobot.data !== undefined 
                                ?
                                    bobot.data.map((e: any) => {
                                        return (
                                            <tr key={e.id}>
                                                <td className="py-4 px-6 border-b border-gray-200 truncate">{e.token}</td>
                                                <td className="py-4 px-6 border-b border-gray-200 truncate">{e.jumlah}</td>
                                                <td className="py-4 px-6 border-b border-gray-200 truncate">{e.term_freq}</td>
                                                <td className="py-4 px-6 border-b border-gray-200 truncate">{e.bobot}</td>
                                            </tr>
                                        )
                                    })
                                :
                                <div></div>
                            }
                    </tbody>
                </table>
            </div>
        </div>
    )
}