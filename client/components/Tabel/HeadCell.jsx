import { styled, TableCell } from "@mui/material";

const HeaderCell = styled(TableCell)((({theme}) => ({
    fontSize:'18px',
    fontWeight:'bolder',
    color:'#fff'
  })))
  
const HeadCell = ({children, ...props }) => {
    return (
        <HeaderCell {...props}>
            { children }
        </HeaderCell>
    )
}

export default HeadCell;