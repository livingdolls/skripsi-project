import { Box, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import HeadCell from "../Tabel/HeadCell";
import MainTabel from "../Tabel/MainTabel";
import TabelHead from "../Tabel/TabelHead";
import CardJurnal from "./CardJurnal";

const BoxResult = ({ result, queryInfo }) => {
    const data = result.data;
    const product = queryInfo.product[0].result;
    const query = queryInfo.bobot;

    return(
        <Box display={'flex'} flexDirection={'row'} gap={10}>
            <Box display={'flex'} flexDirection={'column'} gap={2}>

                <Typography variant="subtitle2">
                    Menampilkan {result.jml} Jurnal yang memiliki kesamaan dengan kata kunci
                </Typography>
                
                {data.map((d) => (
                    <CardJurnal d={d} key={d.id} />
                ))} 
            </Box>

            <Box width={400}>
                {query.length !== 0 ?
                    <MainTabel>
                        <TabelHead>
                            <TableRow>
                                <HeadCell>Token</HeadCell>
                                <HeadCell>Jumlah (TF)</HeadCell>
                                <HeadCell>Bobot</HeadCell>
                            </TableRow>
                        </TabelHead>
                        <TableBody>
                                {query.map((info) => {
                                    return(
                                        <TableRow key={ info.id }>
                                            <TableCell>{ info.term }</TableCell>
                                            <TableCell>{ info.jumlah }</TableCell>
                                            <TableCell>{ info.bobot }</TableCell>
                                        </TableRow>
                                    )
                                })}
                        </TableBody>
                    </MainTabel>
                    : ''
                }
            </Box>

        </Box>
    )
}

export default BoxResult;