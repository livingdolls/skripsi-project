import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeadCell from "../Tabel/HeadCell";
import MainTabel from "../Tabel/MainTabel";
import TabelHead from "../Tabel/TabelHead";

const TokenText = ({ data }) => {
    return (
        <Box
            sx={{
                mt: 3,
                width: "90%",
                marginLeft: "auto",
                marginRight: "auto",
            }}
        >
            <MainTabel>
                <TabelHead>
                    <TableRow>
                        <HeadCell align="left" size="small">
                            No
                        </HeadCell>
                        <HeadCell>Jurnal id</HeadCell>
                        <HeadCell>Token</HeadCell>
                        <HeadCell>Kode Jurnal</HeadCell>
                    </TableRow>
                </TabelHead>

                <TableBody>
                    {data.map((d, index) => {
                        return (
                            <TableRow>
                                <TableCell align="left" size="small">
                                    {index}
                                </TableCell>
                                <TableCell>{d.jurnal_id}</TableCell>
                                <TableCell>{d.token}</TableCell>
                                <TableCell>{d.kd_jurnal}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </MainTabel>
        </Box>
    );
};

export default TokenText;
