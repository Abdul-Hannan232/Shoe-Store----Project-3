import Button from '@mui/material/Button';

import { useParams, useNavigate } from "react-router-dom"
import ShoesAPI from "../ShoesAPI.json"

function ProductsItem() {
    const navigate = useNavigate();
    const { item } = useParams();
    const shoe = ShoesAPI[item];
    console.log(item)
    console.log(shoe);

    return(
        <div>
            <p style={{display: "flex", justifyContent: "flex-start", alignItems: "center", }}>
                    <Button  style={{color: "rgb(100, 100, 100)"}}  onClick={()=> navigate("/")}>Home</Button>  &gt;  <Button  style={{color: "rgb(100, 100, 100)"}} onClick={()=> navigate("/products")} >Products</Button>  &gt;  <Button  style={{color: "rgb(100, 100, 100)"}} >{shoe.name}</Button>
                </p>
            <div style={{fontFamily: "Arial", margin: "5%"}}>

                <h1 style={{color: "blue"}}>{shoe.name}</h1>
                <h4 style={{color: "red"}}>${shoe.price}</h4>
                <img src={shoe.image} alt={shoe.name} height={500}/>
                <p style={{color: "rgb(100, 100, 100)"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    );
}
export default ProductsItem;