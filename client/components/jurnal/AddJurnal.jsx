import { Close } from "@mui/icons-material";
import { Box, Modal, styled } from "@mui/material";
import { useState } from "react";
import MainInput from "../Form/MainInput";
import MainButton from "../MainButton";

const HeadInfo = styled(Box)({
  backgroundColor: "#ff6b81",
  padding: 16,
  fontSize: "19px",
  fontWeight: "bolder",
  color: "#fff",
  borderRadius: "5px 5px 0 0",
  width: "700px",
});

const BodyInfo = styled(Box)({
  backgroundColor: "#fff",
  padding: 8,
  fontSize: "15px",
});

const AddJurnal = ({ open, setOpen, setAlert }) => {
  const [formData, setFormData] = useState({
    title: "",
    pengarang: "",
    tahun: "",
    abstrak: "",
    kode: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_postJurnal.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: formData.title,
        pengarang: formData.pengarang,
        tahun: formData.tahun,
        abstrak: formData.abstrak,
        kd_jurnal: formData.kode,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setFormData({
          title: "",
          pengarang: "",
          tahun: "",
          abstrak: "",
          kode: "",
        });

        setAlert({ alert: true, pesan: data.msg, severity: "info" });
        setTimeout(() => {
          setAlert({ alert: false, pesan: "data.msg", severity: "info" });
        }, 3000);
      });
  };

  const handleForm = (e) => {
    const newForm = { ...formData };
    newForm[e.target.id] = e.target.value;
    setFormData(newForm);
  };

  return (
    <Modal open={open}>
      <Box sx={{ position: "absolute", right: 20, top: 50 }}>
        <HeadInfo display={"flex"} justifyContent="space-between">
          Tambah Jurnal
          <Close onClick={() => setOpen(false)} />
        </HeadInfo>

        <BodyInfo>
          <form onSubmit={handleSubmit}>
            <Box
              mt={1}
              mb={2}
              paddingX={2}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <MainInput
                label="Judul Jurnal"
                variant="outlined"
                fullWidth
                value={formData.title}
                id="title"
                onChange={(e) => handleForm(e)}
              />

              <MainInput
                label="Pengarang"
                variant="outlined"
                fullWidth
                value={formData.pengarang}
                id="pengarang"
                onChange={(e) => handleForm(e)}
              />

              <MainInput
                label="Tahun Terbit"
                variant="outlined"
                fullWidth
                value={formData.tahun}
                id="tahun"
                onChange={(e) => handleForm(e)}
              />

              <MainInput
                label="Kode Jurnal"
                variant="outlined"
                fullWidth
                value={formData.kode}
                id="kode"
                onChange={(e) => handleForm(e)}
              />

              <MainInput
                label="Abstrak"
                variant="outlined"
                fullWidth
                multiline
                rows={5}
                value={formData.abstrak}
                id="abstrak"
                onChange={(e) => handleForm(e)}
              />

              {loading ? (
                <MainButton disabled type="submit" sx={{ padding: "10px" }}>
                  Loading...
                </MainButton>
              ) : (
                <MainButton type="submit" sx={{ padding: "10px" }}>
                  Tambah Jurnal
                </MainButton>
              )}
            </Box>
          </form>
        </BodyInfo>
      </Box>
    </Modal>
  );
};

export default AddJurnal;
