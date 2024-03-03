import { Box, Card, CardActions, CardContent, CardHeader, styled, Typography } from "@mui/material";
import Link from "next/link";

const BoxInfo = styled(Box)({
    backgroundColor: '#ff6b81',
    padding: 5,
    fontSize:'15px',
    color:'#fff',
    marginLeft:4,
})

const CardJurnal = ({d}) => {
    return (
            <Card sx={{width:'700px'}} elevation={3} key={d.id}>
                <CardHeader 
                    title={<Typography variant="h6" fontWeight={'bolder'}>{d.title}</Typography>}
                    subheader={<Typography variant="subtitle2">{d.pengarang}</Typography>}
                    action={
                        <Typography variant="subtitle1" fontWeight={'bold'} sx={{marginTop:1}}>{d.kd_jurnal}</Typography>
                    }
                />

                <CardContent sx={{mt:-3}}>
                    <Typography variant="body1">
                        {d.abstrak.substring(0,300)}
                    </Typography>
                </CardContent>

                <CardActions disableSpacing sx={{mt:-1}}>
                    <BoxInfo>
                        <Typography variant="body2" fontWeight={'bolder'}>Kemiripan : {Number(d.cosine_similarity * 100).toFixed(2)} %</Typography>
                    </BoxInfo>

                            <Link href={`/pencarian/${d.id}`}>
                    <BoxInfo>
                        <Typography variant="body2" fontWeight={'bolder'}>
                                Lihat Selengkapnya
                        </Typography>
                    </BoxInfo>
                            </Link>
                </CardActions>
            </Card>
    )
}

export default CardJurnal;