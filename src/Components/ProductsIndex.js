// 1

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import { Link, useNavigate } from "react-router-dom"
import ShoesAPI from "../ShoesAPI.json";

function ProductsIndex() {
    const navigate = useNavigate();
    return (
        <div>

            <p style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                <Button style={{ color: "rgb(100, 100, 100)" }} onClick={() => navigate("/")}>Home</Button>  &gt;  <Button style={{ color: "rgb(100, 100, 100)" }} onClick={() => navigate("/products")} >Products</Button>
            </p>

            <Paper elevation={3}>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                    {Object.entries(ShoesAPI).map(([tag, { name, image, price }]) => (
                        <Link to={tag} key={tag} style={{ textDecoration: "none", margin: "2% 0" }}>
                            <Grid item xs={12} >
                                <Card sx={{ maxWidth: 345, maxHeight: 400, minHeight: 400 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={image}
                                            alt={name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {name}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                ${price}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Buy Now
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Link>
                    ))
                    }
                </Grid>
            </Paper>
        </div>
    );
}
export default ProductsIndex;