import { Alert, Box, Slide } from "@mui/material"

const AlertModal = ({pesan, severity, alert}) => {

    return(
        <Slide direction="left" in={alert}>
            <Box zIndex={1500} sx={{position:'fixed', top:50, right:20}}>
                <Alert severity={severity}>{pesan}</Alert>
            </Box>
        </Slide>
    )
}

export default AlertModal;