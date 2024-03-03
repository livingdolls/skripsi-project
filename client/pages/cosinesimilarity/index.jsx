import { Visibility } from "@mui/icons-material";
import { TableBody, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import Layout from "../../components/Layout";
import MainButton from "../../components/MainButton";
import BodyModal from "../../components/Modal/BodyModal";
import MainModal from "../../components/Modal/MainModal";
import HeadCell from "../../components/Tabel/HeadCell";
import MainTabel from "../../components/Tabel/MainTabel";
import TabelHead from "../../components/Tabel/TabelHead";
import DataCosine from "../../components/cosine/DataCosine";

const CosineSimilarity = ({ data }) => {
    const [text, setText] = useState({
        data:{
            bobot_kata : [{
                "id": "17",
                "jurnal_id": "36",
                "token": "terap",
                "result_cross_product": "0.031"
              },
              {
                "id": "18",
                "jurnal_id": "36",
                "token": "terap",
                "result_cross_product": "0.031"
              }],
            jurnal_product:[{
                "jurnal_id": "36",
                "dot_product": "0.031",
                "sum_cross_product": "17.5597",
                "result_cross_product": "1.6331",
                "akar_result": "1.2779",
                "cosine_similarity" : "0.0243"
            }]
        },
        query:[{
            "id": "1",
            "result": "0.093",
        }]
    });
    const [open, setOpen] = useState(false);

    const handleButton = async (id) => {
        setOpen(true)
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_getCosine.php?id=`+id)
        .then(res => res.json())
        .then((d) => setText(d))
    }

    return (
        <Layout judulmenu="Cosine Similarity">
            <MainTabel>
                <TabelHead>
                    <TableRow>
                        <HeadCell>No</HeadCell>
                        <HeadCell>Judul Jurnal</HeadCell>
                        <HeadCell>Kode Jurnal</HeadCell>
                        <HeadCell>Cosine Similarity</HeadCell>
                        <HeadCell>Aksi</HeadCell>
                    </TableRow>
                </TabelHead>
                <TableBody>
                {data.map((row,index) => (
                    <TableRow key={row.id} >
                        <TableCell>{ index }</TableCell>
                        <TableCell>{ row.title }</TableCell>
                        <TableCell>{ row.kd_jurnal }</TableCell>
                        <TableCell>{ row.cosine_similarity }</TableCell>
                        <TableCell><MainButton onClick={() => handleButton(row.jurnal_id)}><Visibility /></MainButton></TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </MainTabel>

            <MainModal
                open={open}
                setOpen={setOpen}
                judulModal={"Cosine Similarity"}
            >
                <BodyModal>
                    <DataCosine data = { text }/>
                </BodyModal>
            </MainModal>
        </Layout>
    )
}

export default CosineSimilarity;

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_getJurnalCosine.php`) 
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}