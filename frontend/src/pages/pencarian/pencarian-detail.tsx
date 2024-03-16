import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom"
import { QueryFetchingService } from "../../service/fetching-query";
import React from "react";
import { ResponseQueryFetch } from "../../types/response-type";
import { SearchBarUi } from "../../components/@ui/search-bar";
import { CardJurnal } from "./card-jurnal";
import { QuerySkeletonUi } from "../../components/@ui/query-skeleton";
import { ZeroResult } from "./zero-result";
import { SumResult } from "./sum-result";

export const PencarianDetail = () => {
    const [params, setParams] = useSearchParams();
    const navigate = useNavigate();
    const getQuery = params.get('query');

    
    React.useEffect(() => {
        if (getQuery === null) {
            navigate('/pencarian');
            return
        }
        
        fetchQuery.refetch();
    }, [])

    if(getQuery === null) {
        navigate('/pencarian');
        return
    }

    const handleChangeSearch = (query: string) => {
        setParams({
            query: query
        })
    }
    
    const fetchQuery = useQuery<ResponseQueryFetch, Error>({
        queryKey: ["fetching-query-pencarian"],
        queryFn: (): Promise<ResponseQueryFetch> => QueryFetchingService(getQuery),
        refetchOnWindowFocus: false,
        enabled: false
    })

    const handleEnter = (e: React.KeyboardEvent) => {
        if(e.key !== 'Enter') {
            return
        }

        fetchQuery.refetch()
    }

    const handleSearch = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        if(getQuery.length <= 0) {
            // TODO :: Alert
            console.log('Alert')
            return
        }
        fetchQuery.refetch();
    }

    if(fetchQuery.data === undefined) {
        return <span>Please Wait...</span>
    }

    return (
        <div className="p-5">
            <SearchBarUi 
                onChange={handleChangeSearch} 
                onEnter={handleEnter}
                onSearch={handleSearch}
                value={getQuery} 
            />

            <SumResult sum={fetchQuery} />

            <div className="mt-4 p-2 flex flex-col gap-y-6 ">
                {fetchQuery.isFetching 
                    ? <QuerySkeletonUi />
                    : fetchQuery.data.jml === 0
                        ? <ZeroResult />
                        : fetchQuery.data.data.map((jurnal) => {
                                return <CardJurnal props={jurnal} />
                            })
                }
            </div>
        </div>
    )
}