import { useLocation } from "react-router-dom"

export const DetailJurnal = () => {
    const {state} = useLocation();

    return (
        <div>
            {state}
        </div>
    )
}