import { Box, TableBody, TableCell, TableRow } from "@mui/material";
import HeadCell from "../Tabel/HeadCell";
import MainTabel from "../Tabel/MainTabel";
import TabelHead from "../Tabel/TabelHead";

const DataCosine = ({ data }) => {
    const cosine = data.data.bobot_kata;
    const product = data.data.jurnal_product[0];
    const query = data.query.result;

    return(
        <Box sx={{display:'flex', alignItems:'flex-start', gap:2}}>
            <Box width={'65%'}>
                <MainTabel>
                    <TabelHead>
                        <TableRow>
                            <HeadCell>Jurnal ID</HeadCell>
                            <HeadCell>Token</HeadCell>
                            <HeadCell>Bobot Cosine</HeadCell>
                        </TableRow>
                    </TabelHead>
                    <TableBody>
                        {cosine.map((row) => (
                            <TableRow key={ row.id } >
                                <TableCell>{ row.jurnal_id }</TableCell>
                                <TableCell>{ row.token }</TableCell>
                                <TableCell>{ row.result_cross_product }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </MainTabel>
            </Box>

            <Box sx={{
                border:"1px solid #ff6b81",
                width: "600px"}}
            >
                <MainTabel>
                    <TableBody>
                        <TableRow>
                            <TableCell>Dot Product (Q*D)</TableCell>
                            <TableCell>{ product.dot_product }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Jurnal Cross Product (D^2)</TableCell>
                            <TableCell>{ product.sum_cross_product }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Query Cross Product (Q^2) </TableCell>
                            <TableCell>{ query }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Akar Cross Product SQRT(Q^2*Q^2)</TableCell>
                            <TableCell>{ product.result_cross_product }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dot Product / Akar Cross Product</TableCell>
                            <TableCell>{ product.akar_result }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Nilai Cosine</TableCell>
                            <TableCell>{ product.cosine_similarity }</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dalam %</TableCell>
                            <TableCell>{ (product.cosine_similarity*100).toFixed(2) } %</TableCell>
                        </TableRow>
                    </TableBody>
                </MainTabel>
                
            </Box>
        </Box>
    )
}

export default DataCosine;
