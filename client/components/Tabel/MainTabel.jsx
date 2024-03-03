import { Table,  TableContainer } from "@mui/material";
import Paper from '@mui/material/Paper';


const MainTabel = ({ ...props }) => {
    return (
        <TableContainer component={Paper} elevation={0}>
            <Table sx={{ minWidth: 300 }} aria-label="simple table">
                {props.children}
            </Table>
        </TableContainer>
    )
}

export default MainTabel;