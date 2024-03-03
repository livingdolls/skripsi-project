import { Box, Grid, Typography } from "@mui/material";
import Navbar from "./Navbar";


const Layout = ({...props}) => {
    return(
        <Grid container direction={'row'} spacing={3} p={3} sx={{backgroundColor:'hsl(0 0% 90%)'}}>
            <Grid item xs={2}>
                <Navbar />
            </Grid>

            <Grid item xs={10}>
            <Box display={'flex'} flexDirection={'column'} gap={2} sx={{backgroundColor:'#fff', padding:1, paddingLeft:5}}>
              <Box sx={{padding:'15px', backgroundColor:'#ff6b81', ml:-5, mt:-1, mr:-1}}>
                <Typography fontWeight={'bolder'} variant="h6" sx={{color:'#fff'}}>{props.judulmenu}</Typography>
              </Box>

                <Box marginLeft={-4}>
                    {props.children}
                </Box>
            </Box>
            </Grid>
        </Grid>
    )
}

export default Layout;