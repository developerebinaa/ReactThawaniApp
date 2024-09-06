import * as React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme, styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { createCheckoutSession } from 'src/services/api';
import { SUCCESS_URL, CANCEL_URL } from '../../../config';
// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >

//     </Box>
// );

// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

interface MyPaymentCard {
    product: string;
    orderId: number,
    price: number;
}
const obj: MyPaymentCard[] = [
    {
        product: 'Advance Payment',
        orderId: 1,
        price: 20000
    },
    {
        product: 'Soil Report Payment',
        orderId: 4,
        price: 10000
    },
    {
        product: 'Design Payment',
        orderId: 3,
        price: 410000
    },
    {
        product: 'Final Payment',
        orderId: 2,
        price: 500000
    }
];
export function ProjectDetails() {

    const handleCreateCheckoutSession = async (item: MyPaymentCard) => {
        const checkoutData = {
            client_reference_id: '123412',
            mode: 'payment',
            products: [
                { name: item.product, quantity: 1, unit_amount: item.price },
            ],
            success_url: SUCCESS_URL,
            cancel_url: CANCEL_URL,
            metadata: { 'Customer name': 'Test', 'order id': item.orderId },
        };
        const result = await createCheckoutSession(checkoutData);
        console.log(result);
    }


    return (

        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

                    {obj.map((item: MyPaymentCard, i) => (
                        <Grid key={i} item xs={4}>
                            <Card sx={{ minWidth: 275, p: 3 }}>
                                <CardContent>
                                    <Box component="div" sx={{ display: "flex", justifyContent: "space-between" }}>
                                        <Typography variant="h5" component="div">
                                            {item.product}
                                        </Typography>
                                        <Typography variant="h5" component="div" sx={{ color: "#05d94e" }}>
                                            {item.price} OMR
                                        </Typography>
                                    </Box>
                                    <Typography sx={{ color: 'text.secondary', mb: 1.5, mt: 2 }}>Consultant will prepare drawings for municipality submission after advance payment.</Typography>

                                </CardContent>
                                <CardActions sx={{ display: "flex", justifyContent: "space-between", pb: 4 }}>
                                    <Button variant="outlined"
                                        sx={{ color: "black", borderColor: 'lightgray' }}
                                        startIcon={<KeyboardBackspaceIcon color='primary' />}
                                    >
                                        Back

                                    </Button>
                                    <Button variant="contained"
                                        color='success'
                                        startIcon={<ArrowForward />}
                                        onClick={() => handleCreateCheckoutSession(item)}
                                    >
                                        Pay Now

                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>

                    ))}


                </Grid>
            </Box>

        </>
    )
}
