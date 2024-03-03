import { Box, styled, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import MainInput from "../Form/MainInput";
import MainButton from "../MainButton";

const FormLayout = styled(Box)({
    display: 'flex', 
    flexDirection:'column', 
    gap:15
})

const FormPage = () => {
    const [loading, setLoading] = useState(false);
    const [formLogin, setFormLogin] = useState({
        username:'',
        password:''
    })
    const router = useRouter();

    const loginHandle = async (e) => {
        e.preventDefault();

        await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/API/_AuthLogin.php`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                'uname':formLogin.username,
                'upass':formLogin.password
            })
        })
        .then(res => res.json())
        .then((d) => {
            if(!d.isLogin){
                return alert(d.msg)
            }
            localStorage.setItem('login', JSON.stringify(d))
            router.push('/')
        }
        )
    }

    const handleForm = (e) => {
        const newForm = {...formLogin}
        newForm[e.target.id] = e.target.value;
        setFormLogin(newForm);
      }

    return(
        <Box padding={5} borderRadius={2} sx={{border:'1px solid #ff6b81', minWidth:'60%'}}>
            <form onSubmit={loginHandle}>
                <FormLayout>
                    <Typography
                        variant={'overline'}
                        align={'center'}
                        sx={{fontSize:'24px',color: '#ff6b81', fontWeight:'bold'}}
                    >
                        Form Login
                    </Typography>
                    
                    <MainInput
                        label="Username"
                        variant="outlined"
                        id="username"
                        onChange={(e) => handleForm(e)}
                    />

                    <MainInput
                        label="Password"
                        variant="outlined"
                        id="password"
                        type="password"
                        onChange={(e) => handleForm(e)}
                    />

                    {loading 
                        ?
                        <MainButton disabled fullWidth sx={{padding:1, fontSize:15}}>
                            Loading ...
                        </MainButton>
                        : 
                        <MainButton type='submit' fullWidth sx={{padding:1, fontSize:15}}>
                            Login
                        </MainButton>
                    }

                </FormLayout>
            </form>
        </Box>
    )
}

export default FormPage;