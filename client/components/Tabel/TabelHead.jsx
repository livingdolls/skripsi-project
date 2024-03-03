import { styled, TableHead } from "@mui/material";

const HeadTabel = styled(TableHead)((({theme}) => ({
    backgroundColor: '#ff6b81',
  })))

const TabelHead = ({ ...props }) => {
    return(
        <HeadTabel>
            { props.children }
        </HeadTabel>
    )
}

export default TabelHead;