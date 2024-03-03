import { Box, Button, Modal, styled, Typography } from "@mui/material";

const TitleDialog = styled(Box)({
    backgroundColor: '#ff6b81',
    color:'#fff',
    fontSize:'24px',
    marginLeft:-15,
    marginTop:-15,
    marginRight:-15,
    borderRadius:'13px',
    padding:15
})

const ModalDialog = ({openDialog, setOpenDialog, handleAction}) => {
    const { open, isLoading, title, content } = openDialog;
    return(
        <Modal open={open}>
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{height:'100vh'}}>
                <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'} height={250} width={400} borderRadius={3} p={2} sx={{backgroundColor:'#fff'}}>
                    <TitleDialog>
                        { title }
                    </TitleDialog>

                    <Box>
                        <Typography variant="caption" fontSize={18}>
                            { content }
                        </Typography>
                    </Box>

                    <Box display={'flex'} flex={'row'} gap={1}>
                        {isLoading 
                            ? 
                            <Button fullWidth disabled variant={'contained'} >Loading...</Button>
                            : 
                            <Button fullWidth variant={'contained'} onClick={() => handleAction(openDialog)} >Ya</Button>
                        }
                        <Button fullWidth variant={'contained'} color={'error'} onClick={() => setOpenDialog({open:false})} >Tidak</Button>
                    </Box>
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalDialog;