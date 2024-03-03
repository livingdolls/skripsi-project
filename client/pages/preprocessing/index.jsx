import Layout from "../../components/Layout";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Refresh, Visibility } from "@mui/icons-material";
import MainButton from "../../components/MainButton";
import MainTabel from "../../components/Tabel/MainTabel";
import HeadCell from "../../components/Tabel/HeadCell";
import TabelHead from "../../components/Tabel/TabelHead";
import MainModal from "../../components/Modal/MainModal";
import BodyModal from "../../components/Modal/BodyModal";
import CaseText from "../../components/preprocessing/CaseText";
import TokenIndex from "../../components/token_text/TokenIndex";

const Preprocessing = ({ data }) => {
  const [text, setText] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleButton = async (kunci, id) => {
    setOpen(true);

    if (kunci === "casefolding") {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/API/_getCasefolding.php?id=` + id
      )
        .then((res) => res.json())
        .then((d) => setText(d));

      // return ""
    }

    if (kunci === "tokenisasi") {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/API/_getTokenisasi.php?id=` + id
      )
        .then((res) => res.json())
        .then((d) => setText(d));

      //   return "";
    }

    if (kunci === "filtering") {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/API/_getFiltering.php?id=` + id
      )
        .then((res) => res.json())
        .then((d) => setText(d));

      //   return "";
    }

    if (kunci === "stemming") {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/API/_getStemming.php?id=` + id
      )
        .then((res) => res.json())
        .then((d) => setText(d));
      //   return "";
    }
  };

  const handleRefresh = async () => {
    setLoading(true);

    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/_textPreprocessing.php`
    ).then((res) => res.json());

    setLoading(false);
  };

  return (
    <Layout judulmenu={"Text Preprocessing"}>
      {loading ? (
        <MainButton
          disabled
          endIcon={<Refresh />}
          sx={{ fontSize: "14px", backgroundColor: "#eee", marginBottom: 1 }}
        >
          Refresh...
        </MainButton>
      ) : (
        <MainButton
          onClick={handleRefresh}
          endIcon={<Refresh />}
          sx={{ fontSize: "14px", marginBottom: 1 }}
        >
          Refresh
        </MainButton>
      )}

      <MainTabel>
        <TabelHead>
          <TableRow>
            <HeadCell align="left" size="small">
              No
            </HeadCell>
            <HeadCell>Judul Dokumen</HeadCell>
            <HeadCell>Case Folding</HeadCell>
            <HeadCell>Tokenisasi</HeadCell>
            <HeadCell>Filtering</HeadCell>
            <HeadCell>Stemming</HeadCell>
          </TableRow>
        </TabelHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              <TableCell align="left" size="small">
                {index}
              </TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>
                <MainButton onClick={() => handleButton("casefolding", row.id)}>
                  <Visibility />
                </MainButton>
              </TableCell>
              <TableCell>
                <MainButton onClick={() => handleButton("tokenisasi", row.id)}>
                  <Visibility />
                </MainButton>
              </TableCell>
              <TableCell>
                <MainButton onClick={() => handleButton("filtering", row.id)}>
                  <Visibility />
                </MainButton>
              </TableCell>
              <TableCell>
                <MainButton onClick={() => handleButton("stemming", row.id)}>
                  <Visibility />
                </MainButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MainTabel>

      <MainModal open={open} setOpen={setOpen} judulModal={"Preprocessing"}>
        <BodyModal>
          {text.term && <CaseText data={text} />}
          {text[0] && <TokenIndex data={text} />}
        </BodyModal>
      </MainModal>
    </Layout>
  );
};

export default Preprocessing;

export const getStaticProps = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/API/_getAllJurnal.php`
  );
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
};
