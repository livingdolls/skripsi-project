import { Add } from "@mui/icons-material";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import AlertModal from "../../components/AlertModal";
import Layout from "../../components/Layout";
import MainButton from "../../components/MainButton";
import ModalDialog from "../../components/ModalDialog";
import AddJurnal from "../../components/jurnal/AddJurnal";
import Jurnal_Info from "../../components/jurnal/Jurnal_Info";
import Jurnal_Table from "../../components/jurnal/Jurnal_Table";

const Jurnal = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({
    isLogin: false,
    user: [],
  });
  const [selectData, setSelectData] = useState({
    id: 0,
    judul: "Sistem Temu Kembali",
    pengarang: "Nanang Setiawan",
    tahun: 2020,
    kd: "FTI",
    abstrak: "Hello World",
  });

  const [alert, setAlert] = useState({
    alert: false,
    pesan: "",
    severity: "success",
  });

  const getSelectData = (id, title, pengarang, tahun, abstrak, kd) => {
    setSelectData({
      id,
      judul: title,
      pengarang: pengarang,
      tahun: tahun,
      abstrak: abstrak,
      kd: kd,
    });
  };

  const [openDialog, setOpenDialog] = useState({
    open: false,
    id: "",
    isLoading: false,
  });

  const handleOpen = () => setOpen(true);

  const handleModal = (id) => {
    setOpenDialog({
      open: true,
      isLoading: false,
      id: id,
      title: "Confirm Delete",
      content: `Apa anda yakin akan menghapus Jurnal dengan id ${id} ?, setelah terhapus data tidak akan bisa dikembalikan `,
    });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = () => {
    try {
      const login = JSON.parse(localStorage.login);
      setUser(login);
    } catch (error) {
      return "";
    }
  };

  const handleAction = async (data) => {
    const { id } = data;
    setOpenDialog({
      open: true,
      id: id,
      isLoading: true,
    });

    await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/API/_hapusJurnal.php?id=` + id
    )
      .then((res) => res.json())
      .then((d) =>
        setOpenDialog({
          open: false,
          id: "",
          isLoading: false,
        })
      );
  };

  return (
    <Layout judulmenu="Data Jurnal">
      <AlertModal
        pesan={alert.pesan}
        severity={alert.severity}
        alert={alert.alert}
        setAlert={alert.setAlert}
      />

      <Box minHeight={"100vh"}>
        {user.isLogin ? (
          <MainButton
            onClick={handleOpen}
            endIcon={<Add />}
            size={"large"}
            sx={{ marginBottom: -3 }}
          >
            Tambah Dokumen Jurnal
          </MainButton>
        ) : (
          ""
        )}

        <Grid container spacing={2} mt={2}>
          <Grid item xs={8}>
            <Jurnal_Table
              getSelectData={getSelectData}
              handleModal={handleModal}
              user={user}
            />
          </Grid>

          <Grid item xs={4}>
            <Jurnal_Info selectData={selectData} />
          </Grid>
        </Grid>

        <AddJurnal open={open} setOpen={setOpen} setAlert={setAlert} />
        <ModalDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          handleAction={handleAction}
        />
      </Box>
    </Layout>
  );
};

export default Jurnal;
