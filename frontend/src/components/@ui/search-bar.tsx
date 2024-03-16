import React from "react";

type SearchBarUiProps = {
    onChange : (query: string) => void;
    onEnter : (e: React.KeyboardEvent) => void;
    onSearch: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
    value: string;
}

export const SearchBarUi = (SearchBarUiProps: SearchBarUiProps) => {
    return (
        <div className="flex w-full h-full">
            <div className="flex flex-col gap-3 w-1/3">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Tulis Kata Kunci"
                        className="w-full w-[3/4] py-3 pl-4 pr-10 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-red-600"
                        onChange={(e) => SearchBarUiProps.onChange(e.target.value)}
                        onKeyDown={(e) => SearchBarUiProps.onEnter(e)}
                        value={SearchBarUiProps.value}
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute cursor-pointer top-0 bottom-0 w-6 h-6 my-auto text-gray-400 right-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        onClick={(e) => SearchBarUiProps.onSearch(e)}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}