import { Box } from "@mui/material";
import Layout from "../../components/Layout";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Refresh, Visibility } from "@mui/icons-material";
import { useState } from "react";
import MainTabel from "../../components/Tabel/MainTabel";
import TabelHead from "../../components/Tabel/TabelHead";
import HeadCell from "../../components/Tabel/HeadCell";
import MainButton from "../../components/MainButton";
import MainModal from "../../components/Modal/MainModal";
import BodyModal from "../../components/Modal/BodyModal";
import DataIndex from "../../components/buat_index/DataIndex";
  
  const BuatIndex = ({data}) => {
      const [loading, setLoading] = useState(false);
      const [open, setOpen] = useState(false);
      const [kata, setKata] = useState([]);


      const handleRefresh = async () => {
        setLoading(true)

        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_BuatIndex.php`)
        .then(res => res.json())

        setLoading(false)
    }
    
      const handleButton = async (id) => {
        setOpen(true);

        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_getIndexById.php?id=`+id)
            .then(res => res.json())
            .then(d => setKata(d))
      }
    return(
        <Layout judulmenu="Buat Index (Term Frequency)">
              {loading 
                ?
                <MainButton disabled endIcon={<Refresh />} sx={{fontSize:"14px", backgroundColor:"#eee"}}>Refresh...</MainButton>
                :
                <MainButton onClick={handleRefresh} endIcon={<Refresh />} sx={{fontSize:"14px"}}>Refresh</MainButton>
              }

              <Box sx={{mt:1}}>
                  <MainTabel>
                    <TabelHead>
                        <TableRow>
                            <HeadCell align="left" size='small'>No</HeadCell>
                            <HeadCell>Judul Dokumen</HeadCell>
                            <HeadCell>Index Term Frequency</HeadCell>
                        </TableRow>
                    </TabelHead>
                    <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={ row.title }>
                        <TableCell align="left" size='small'>{ index }</TableCell>
                        <TableCell>{ row.title }</TableCell>
                        <TableCell>
                            <MainButton onClick={() => handleButton( row.id )}><Visibility /></MainButton>
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </MainTabel>
            </Box>

            <MainModal
                open={open}
                setOpen={setOpen}
                judulModal="Term Frequency"
            >
                <BodyModal>
                    <DataIndex kata={ kata } />
                </BodyModal>
            </MainModal>
        </Layout>
    )
}

export default BuatIndex;

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_getAllJurnal.php`) 
    const data = await res.json()

    return {
        props: {
            data: data
        }
    }
}