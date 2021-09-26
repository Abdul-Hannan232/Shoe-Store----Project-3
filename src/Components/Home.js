import Button from '@mui/material/Button';
import { useState } from 'react';

import { useNavigate } from "react-router-dom"
import ShoesAPI from "../ShoesAPI.json";


const styles = {
    h1: {
        color: "rgb(219, 179, 0)",
        margin: "2% 0",
        fontFamily: "arial"
    },
    h4: {
        color: "rgb(255, 123, 0)",
        margin: "2% 0",
        fontFamily: "arial"
    },
    img: {
        height: "50vw"
    }

}

function Home() {
    const navigate = useNavigate();
    const urls = Object.values(ShoesAPI).map(({image, name})=> image);
    const [count, setCount] = useState(0);
    const [imageUrl, setImageUrl] = useState(urls[count]);

    setInterval(()=>{
        
        if(count===9){
            setCount(0);
            setImageUrl(urls[count]);
        }
        else{
            setCount(count+1);
            setImageUrl(urls[count]);
        }
    }, 1000);

    return(
        <div>
            <p style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                <Button style={{color: "rgb(100, 100, 100)"}} onClick={()=> navigate("/")}>Home</Button> 
            </p>

            <h1 style={styles.h1}>PanaChappal Store</h1>

            <h4 style={styles.h4}>We have all variety of Shoes</h4>

            <img src={imageUrl} height={400} alt="Shoe Pic" />

        </div>
    );
}
export default Home;