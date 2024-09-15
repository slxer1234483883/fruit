import React from 'react';


const About = () => {
    return (
        <div  style={{
            fontFamily: "Dosis",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            minHeight: "100vh",
            minWidth: "430px",
            width: "100%",
            background: "linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%)",
            display:"flex",
            justifyContent: "center",
            alignItems:"flex-end"
        }} >
            <div style={{backgroundColor:"white",width: "430px",
                    height:"379px",
                    borderRadius:" 47px 45px 50px 50px",

}} >
                <h1  style={{fontSize:"30px", fontWeight:"500",marginTop:"100px"}}>Fruit.Ai</h1>
                <p style={{fontSize:'15px', fontWeight:"100",color:"#8E9399", marginBottom:"20px"}}>
                    Whether you're looking to discover new fruits, understand their nutritional values, or find the perfect fruit for your diet, our AI-driven chatbot is here to assist. We provide personalized fruit recommendations tailored to your health needs, making it easier for you to integrate the best fruits into your daily routine.
                </p>
                <button style={{width:"258px",height:"50px",backgroundColor:"black", color:"white",borderRadius:"60px"}} >ABOUT</button>
            </div>
        </div>
    );
};

export default About;
