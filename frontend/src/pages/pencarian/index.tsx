import { useState } from "react"
import { Link, createSearchParams, useNavigate } from "react-router-dom";

export const PencarianPage = () => {
    const [find, setFind] = useState<string>("");
    const navigate = useNavigate();

    const hanldeSearch = () => {
        navigate({
            pathname: 'detail',
            search: createSearchParams({
                query: find
            }).toString()
        });
    }

    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="flex flex-col gap-3">
                <div className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        onChange={(e) => setFind(e.target.value)}
                        className="w-full w-[540px] py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-red-600"
                    />
                </div>

                <button onClick={hanldeSearch} className="bg-unisbank-400 px-8  py-3 text-white text-bold text-md rounded-full hover:bg-unisbank-600 ">Cari Jurnal</button>
            </div>
        </div>
    )
}