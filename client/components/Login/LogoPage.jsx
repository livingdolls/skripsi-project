import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import Logo from '../../src/img/Logo.png';

const LayoutLogo = styled(Box)({
    width:'50%',
    display:'flex',
    flexDirection:'column'
})

const LogoPage = () => {
    return (
        <LayoutLogo>
            <Image
                src={Logo}
                alt={'Logo Unisbank'}
            />

            <Typography
                variant={'overline'}
                align={'center'}
                sx={{fontSize:'24px', color:'hsl(0 0% 90%)'}}
            >
                SISTEM TEMU KEMBALI INFORMASI PENCARIAN JURNAL ILMIAH UNISBANK
            </Typography>
        </LayoutLogo>
    )
}

export default LogoPage;