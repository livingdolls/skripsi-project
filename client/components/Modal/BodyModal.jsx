import { Box, styled } from "@mui/material";

const BodyInfo = styled(Box)((({theme}) => ({
    backgroundColor: '#fff',
    padding: 8,
    fontSize:'15px',
    position:'relative',
    overflow:'scroll',
    height:'70vh'
  })))

const BodyModal = ({ children }) => {
    return(
        <BodyInfo>
            { children }
        </BodyInfo>
    )
}

export default BodyModal;