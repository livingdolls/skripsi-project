import {
  Box,
  Divider,
  Paper,
  Typography,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import Layout from "../../components/Layout";
import MainTabel from "../../components/Tabel/MainTabel";

const jurnalDetail = (props) => {
  const { data } = props.data;
  return (
    <Layout judulmenu={data.title}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        sx={{ backgroundColor: "#fff", padding: 1 }}
      >
        <Paper elevation={3} sx={{ width: "70%", p: 5 }}>
          <Typography variant={"button"}>{data.pengarang}</Typography>

          <Divider />

          <Typography
            variant={"h6"}
            fontWeight={"bolder"}
            align={"center"}
            sx={{ mt: 2 }}
          >
            ABSTRAK
          </Typography>

          <Typography
            variant={"body"}
            align={"justify"}
            sx={{ fontSize: "20px" }}
          >
            {data.abstrak}
          </Typography>

          <Divider sx={{ mt: 5 }} />

          <Typography varian={"body"}>
            {data.kd_jurnal} , {data.tahun_terbit}
          </Typography>
        </Paper>

        <Box sx={{ mt: 3, width: "50%" }}>
          <MainTabel>
            <TableBody>
              <TableRow>
                <TableCell>Rumus Cosine Similarity</TableCell>
                <TableCell align="left">
                  (Query*Dokumen)/(akar(Query*Dokumen))
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Nilai didapatkan</TableCell>
                <TableCell align="left">
                  {data.dot_product} / {data.akar_result}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Nilai Cosine</TableCell>
                <TableCell align="left">{data.cosine_similarity}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Dalam bentuk %</TableCell>
                <TableCell align="left">
                  {Number(data.cosine_similarity * 100).toFixed(2)} %
                </TableCell>
              </TableRow>
            </TableBody>
          </MainTabel>
        </Box>
      </Box>
    </Layout>
  );
};

export default jurnalDetail;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/API/_getPencarianId.php?id=` +
      params.jurnalDetail
  );
  const data = await res.json();

  return {
    props: {
      data: data,
      fallback: false,
    },
  };
}
