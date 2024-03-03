import { Box, Button, TableCell, TableHead, TableRow } from "@mui/material";
import MainTabel from "../Tabel/MainTabel";

const MainPage = ({user}) => {
    return(
        <Box sx={{width:'400px'}}>
          <MainTabel>
            <TableHead>
              <TableRow>
                <TableCell>Nama Akun</TableCell>
                <TableCell>{ user.user.nama}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Username Akun</TableCell>
                <TableCell>{ user.user.uname}</TableCell>
              </TableRow>
            </TableHead>
          </MainTabel>
          <Button variant={'contained'} color={'error'} sx={{mt:1}}>Logout</Button>
        </Box>
    )
}

export default MainPage;