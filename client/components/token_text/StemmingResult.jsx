import { Box } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import HeadCell from "../Tabel/HeadCell";
import MainTabel from "../Tabel/MainTabel";
import TabelHead from "../Tabel/TabelHead";

const StemmingResult = ({ data }) => {
   return (
      <Box sx={{ width: "100%", marginLeft: "auto", marginRight: "auto" }}>
         <MainTabel>
            <TabelHead>
               <TableRow>
                  <HeadCell align="left" size="small">
                     No
                  </HeadCell>
                  <HeadCell>Kode Jurnal</HeadCell>
                  <HeadCell>Kata Asli</HeadCell>
                  <HeadCell>Hasil Stemming</HeadCell>
                  <HeadCell>Kode Jurnal</HeadCell>
               </TableRow>
            </TabelHead>

            <TableBody>
               {data.map((d, index) => {
                  return (
                     <TableRow key={index}>
                        <TableCell align="left" size="small">
                           {index}
                        </TableCell>
                        <TableCell>{d.jurnal_id}</TableCell>
                        <TableCell>{d.token_filtering}</TableCell>
                        <TableCell>{d.token_stemming}</TableCell>
                        <TableCell>{d.kd_jurnal}</TableCell>
                     </TableRow>
                  );
               })}
            </TableBody>
         </MainTabel>
      </Box>
   );
};

export default StemmingResult;
