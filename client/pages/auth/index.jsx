import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FormPage from "../../components/Login/FormPage";
import LogoPage from "../../components/Login/LogoPage";

const MainLogin = () => {
    const router = useRouter();

    useEffect(() => {
        fetchLogin();
    },[])

    const fetchLogin = () => {

        try {
            const login = JSON.parse(localStorage.login)
            
            if(login.isLogin){
                router.push('/')
            }
        } catch (error) {
            return ''           
        }
    }
    return(
        <Grid container sx={{backgroundColor:'hsl(0 0% 90%)', minHeight:'100vh',margin:-1}}>
            <Grid item xs={6} sx={{backgroundColor:'#ff6b81', display:'flex', justifyContent:'center', alignItems:'center'}}>
                <LogoPage />
            </Grid>

            <Grid item xs={6} sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <FormPage />
            </Grid>
        </Grid>
    )
}

export default MainLogin;