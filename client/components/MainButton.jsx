import { Button, styled } from "@mui/material";

const ButtonAccent = styled(Button)((({theme}) => ({
    backgroundColor: '#fe6b81',
    fontSize:'12px',
    borderRadius:0,
    fontWeight: 'bolder',
    color: '#fff',
    marginLeft:2,
    '&:hover': {
        backgroundColor: '#ae6b81',
      }
  })))

const MainButton = ({ children, ...props }) => {
    return(
        <ButtonAccent variant="contained"
        {...props}
        >
            {children}
        </ButtonAccent>
    )
}

export default MainButton;