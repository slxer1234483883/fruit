import React from 'react';
import { MdGTranslate } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Box = ({ value, onClick, style }) => {
    return (
        <div 
            onClick={onClick}
            style={{
                height: "139px",
                width: "137px",
                border: "1px solid #FFFFFF33",
                borderRadius: "20px",
                color: "#C84AD3",
                fontSize: "48px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer", 
                ...style
            }}
        >
            {value}
        </div>
    );
};

const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            fontFamily: "Dosis",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "37.92px",
            textAlign: "center",
            minHeight: "100vh",
            minWidth: "46vh",
            width: "100%",
            background: "linear-gradient(90deg, #E0BCF3 0%, #7EE7EE 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ color: "#FFFFFF", fontSize:"30px", fontWeight: "100" }}>Fruit.Ai</div>
            <div style={{ color: "#FFFFFF", fontWeight: "100", fontSize: "15px", marginBottom: "20px" }}>"Be Healthy!"</div>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "20px",
                width: "100%",
                maxWidth: "600px"
            }}>
                <Box 
                    value="Chat"
                    onClick={() => navigate('/splash')} 
                    style={{ backgroundColor: "#FFE5C2" }} 
                />
                <Box 
                    value="" 
                    style={{
                        boxShadow: "6px 2px 66px 9px rgba(194,255,208,1)",
                        background: "linear-gradient(91.93deg, #AAFFB2 51.49%, #E1FFE4 98.35%)"
                    }} 
                />
                <Box 
                    value="" 
                    style={{
                        boxShadow: "4px 4px 37px 0px rgba(239,255,194,1)",
                        background: "linear-gradient(91.93deg, #E9FFAA 51.49%, #F7FFE1 98.35%)",
                        color: "#EFFFC2"
                    }} 
                />
                <Box 
                    value={<MdGTranslate style={{ color: "#007AFF", fontSize: "58px" }} />} 
                    onClick={() => navigate('/translate')} 
                    style={{ backgroundColor: "#C2F0FF" }} 
                />
                <Box 
                    value="FAQs" 
                    onClick={() => navigate('/faq')} 
                    style={{ color: "#3B5998", fontSize: "36px", backgroundColor: "#E4CAFF" }} 
                />
                <Box 
                    value="About" 
                    onClick={() => navigate('/about')} 
                    style={{ color: "#C84AD3", fontSize: "32px", backgroundColor: "#FFC2F2" }} 
                />
            </div>
                        
        </div>
    );
}

export default Homepage;
