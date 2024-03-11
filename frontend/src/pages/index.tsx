import { Route, Routes } from "react-router"
import { Sidebar } from "../components/layout/sidebar"
import { PencarianPage } from "./pencarian"
import { PencarianDetail } from "./pencarian/pencarian-detail"

export const Pages = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-auto">
                <Routes>
                    <Route path="/pencarian" element={<PencarianPage />} />
                    <Route path="/pencarian/detail" element={<PencarianDetail />} /> 
                </Routes>
            </div>
        </div>
    )
}