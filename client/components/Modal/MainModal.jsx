import { Close } from "@mui/icons-material";
import { Box, Modal, styled } from "@mui/material";


const HeadInfo = styled(Box)((({theme}) => ({
    backgroundColor: '#fff',
    padding: 8,
    fontSize:'19px',
    fontWeight: 'bolder',
    color: '#fff',
    borderRadius: '5px 5px 0 0',
    display:'flex',
    justifyContent:'space-between'
  })))

const MainBox = styled(Box)({
    position:'absolute',
    left:300,
    top:50,
    width:'70%'
})

const MainModal = ({open, setOpen, judulModal, children}) => {
    return(
        <Modal open={open}>
            <MainBox>
                <HeadInfo>
                    { judulModal }
                    <Close onClick={() => setOpen(false)} sx={{color:"#ff6b81"}} />
                </HeadInfo>

                { children }
            </MainBox>
        </Modal>
    )
}

export default MainModal;