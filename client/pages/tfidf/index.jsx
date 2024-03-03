import { TableBody, TableRow } from "@mui/material";
import Layout from "../../components/Layout";
import MainTabel from "../../components/Tabel/MainTabel";
import TableCell from '@mui/material/TableCell';
import TabelHead from "../../components/Tabel/TabelHead";
import HeadCell from "../../components/Tabel/HeadCell";
import MainButton from "../../components/MainButton";
import { Visibility } from "@mui/icons-material";
import { useState } from "react";
import MainModal from "../../components/Modal/MainModal";
import BodyModal from "../../components/Modal/BodyModal";
import TabelData from "../../components/tfidf/TabelData";

const Tfidf = ({ data }) => {
    const [text, setText] = useState([]);
    const [open, setOpen] = useState(false);

    const handleButton = async (id) => {
        setOpen(true)
        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_getTfidfById.php?id=`+id)
        .then(res => res.json())
        .then(d => setText(d))

        return ""
    }

    return (
        <Layout judulmenu = "Term Frequency Inverse Document Frequency">
            <MainTabel>
                <TabelHead>
                    <TableRow>
                        <HeadCell>No</HeadCell>
                        <HeadCell>Judul Jurnal</HeadCell>
                        <HeadCell>Kode Jurnal</HeadCell>
                        <HeadCell>Aksi</HeadCell>
                    </TableRow>
                </TabelHead>
                <TableBody>
                    {data.map((row,index) => (
                    <TableRow key={row.id} >
                        <TableCell>{ index }</TableCell>
                        <TableCell>{ row.title }</TableCell>
                        <TableCell>{ row.kd_jurnal }</TableCell>
                        <TableCell><MainButton onClick={() => handleButton(row.id)}><Visibility /></MainButton></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </MainTabel>

            <MainModal 
                data={text} 
                open={open}
                setOpen={setOpen}
                judulModal={"TF-IDF"}
            >
                <BodyModal>
                    <TabelData data={ text } />
                </BodyModal>
            </MainModal>

        </Layout>
    )
}

export default Tfidf;

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_getAllJurnal.php`) 
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}