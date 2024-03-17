import { useNavigate } from "react-router-dom";
import { TDataJurnal } from "../../types/jurnal-type"

type props = {
    data: TDataJurnal[] | undefined;
}

export const TableJurnal = (data: props) => {
    const navigate = useNavigate();


    const handleDowloadRedirect = (l: string) => {
        window.open(l, "_blank", "noreferrer");
    }

    const handleViewJurnal = (id: string) => {
        navigate('detail', {
            state: id
        })
    }

    return (
        <div className="shadow-lg overflow-hidden mt-8">
                <table className="w-full table-fixed">
                    <thead>
                        <tr className="bg-unisbank-400">
                            <th className="w-[30%] py-4 px-6 text-left text-white font-bold uppercase">Title</th>
                            <th className="w-[30%] py-4 px-6 text-left text-white font-bold uppercase">Pengarang</th>
                            <th className="w-[20%] py-4 px-6 text-left text-white font-bold uppercase">ISSN</th>
                            <th className="w-[10%] py-4 px-6 text-left text-white font-bold uppercase">Action</th>
                        </tr>
                    </thead>

                    {
                        data.data === undefined 
                        ? <div className="w-100">
                            <p className="text-gray-900 text-bold text-lg">Please Wait...</p>
                          </div> 
                        : 
                        <tbody className="bg-white">
                            {
                                data.data.map((jurnal) => {
                                    return <tr key={jurnal.id}>
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{jurnal.title}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 truncate">{jurnal.pengarang}</td>
                                        <td className="py-4 px-6 border-b border-gray-200">{jurnal.kd_jurnal}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 flex gap-x-2">
                                            <span 
                                                onClick={() => handleViewJurnal(jurnal.link)}
                                                className="bg-green-500 text-white cursor-pointer py-1 px-2 rounded-full text-xs">View</span>
                                            <span 
                                                onClick={() => handleDowloadRedirect(jurnal.link)}
                                                className="bg-blue-500 cursor-pointer text-white py-1 px-2 rounded-full text-xs">pdf</span>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    }
                </table>
            </div>
    )
}