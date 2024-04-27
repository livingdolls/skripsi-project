import { Route, Routes } from "react-router"
import { Sidebar } from "../components/layout/sidebar"
import { PencarianPage } from "./pencarian"
import { PencarianDetail } from "./pencarian/pencarian-detail"
import { HomePage } from "./home"
import { DataJurnalPage } from "./data-jurnal"
import { DetailJurnal } from "./data-jurnal/jurnal-detail"
import { DetailPencarianJurnal } from "./pencarian/detail-jurnal"
import { Login } from "./auth"
import { TambahJurnal } from "./data-jurnal/tambah-jurnal"

export const Pages = () => {
    return (
        <div className="flex flex-row">
            <Sidebar />
            <div className="flex-auto h-screen overflow-y-scroll">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/pencarian" element={<PencarianPage />} />
                    <Route path="/pencarian/detail" element={<PencarianDetail />} /> 
                    <Route path="/data-jurnal" element={<DataJurnalPage />} />
                    <Route path="/data-jurnal/tambah" element={<TambahJurnal />} />
                    <Route path="/data-jurnal/detail" element={<DetailJurnal />} />
                    <Route path="/pencarian/detail/jurnal/:id" element={<DetailPencarianJurnal />} />
                </Routes>
            </div>
        </div>
    )
}