import { Box, styled, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const HeadInfo = styled(Box)({
    backgroundColor: '#ff6b81',
    padding: 16,
    fontSize:'19px',
    fontWeight: 'bolder',
    color: '#fff',
    borderRadius: '5px 5px 0 0'
  })

const BodyInfo = styled(Box)({
    backgroundColor: '#fff',
    padding: 8,
    fontSize:'15px'
  })

const Jurnal_Info = ({selectData}) => {
    
    return(
        <Box>
            <HeadInfo>
                Detail Informasi
            </HeadInfo>

            <BodyInfo>
                <TableContainer >
                    <Table sx={{minWidth:'100%'}}>
                        <TableBody>

                        <TableRow>
                            <TableCell>Judul</TableCell>
                            <TableCell align="left">{selectData.judul}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Pengarang</TableCell>
                            <TableCell align="left">{selectData.pengarang}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Tahun Terbit</TableCell>
                            <TableCell align="left">{selectData.tahun}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Fakultas</TableCell>
                            <TableCell align="left">{selectData.kd}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>Abstrak</TableCell>
                            <TableCell align="left">{selectData.abstrak}</TableCell>
                        </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer>
            </BodyInfo>
        </Box>
    )
}

export default Jurnal_Info;