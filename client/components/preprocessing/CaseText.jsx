import { Paper, Typography, Divider } from "@mui/material";

const CaseText = ({data}) => {
    return (            
        <Paper elevation={3} sx={{width:'90%',p:5, marginLeft:'auto', marginRight:'auto'}}>
            <Divider />
            <Typography variant={'h6'} fontWeight={'bolder'} align={'center'} sx={{mt:2}}>ABSTRAK</Typography>
            <Typography variant={'body'} align={'justify'} sx={{fontSize:'20px'}}>{data.term}</Typography>
            <Divider sx={{mt:5}} />
            <Typography varian={'body'}>{data.kd_jurnal}</Typography>
        </Paper>
    )
}

export default CaseText;