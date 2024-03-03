import { TableBody, TableCell, TableRow } from "@mui/material";
import HeadCell from "../Tabel/HeadCell";
import MainTabel from "../Tabel/MainTabel";
import TabelHead from "../Tabel/TabelHead";

const TabelData = ({data}) => {
    return (
        <MainTabel>
            <TabelHead>
                <TableRow>
                    <HeadCell>Jurnal ID</HeadCell>
                    <HeadCell>Token</HeadCell>
                    <HeadCell>Term Frequency</HeadCell>
                    <HeadCell>Bobot</HeadCell>
                </TableRow>
            </TabelHead>
            <TableBody>
                {data.map((row) => (
                <TableRow key={ row.id } >
                    <TableCell>{ row.jurnal_id }</TableCell>
                    <TableCell>{ row.token }</TableCell>
                    <TableCell>{ row.jumlah }</TableCell>
                    <TableCell>{ row.bobot }</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </MainTabel>
    )
}

export default TabelData;