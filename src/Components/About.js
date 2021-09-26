import Button from '@mui/material/Button';

import { useNavigate } from "react-router-dom"


const styles = {
    h1: {
        color: "rgb(255, 123, 0)",
        margin: "2% 0",
        fontFamily: "arial"
    }
}


function About() {
    const navigate = useNavigate();

    return(
        <div>
            <p style={{display: "flex", justifyContent: "flex-start", alignItems: "center"}}>
                <Button style={{color: "rgb(100, 100, 100)"}} onClick={()=> navigate("/")}>Home</Button>  &gt;  <Button style={{color: "rgb(100, 100, 100)"}} onClick={()=> navigate("/about")} >About</Button>
            </p>
            <h1 style={styles.h1}>Welcome To About Page</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
    );
}
export default About;