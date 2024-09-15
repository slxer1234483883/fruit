import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PiChatTextLight } from "react-icons/pi";

const SplashScreen = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            navigate('/chatapp'); 
        }, 1000);

        return () => clearTimeout(timer);
    }, [history]);

    if (loading) {
        return (
            <div style={{
                fontFamily: "Dosis",
                fontSize: "30px",
                fontWeight: "600",
                lineHeight: "37.92px",
                minHeight: "100vh",
                minWidth: "430px",
                backgroundColor:"white"
                
            }}>
                <PiChatTextLight style={{ marginTop:"300px",paddingLeft:"50px", color:"#c476f5"}} />
                <div style={{paddingLeft:"50px", fontWeight:"100"}}>Hello</div>
                <div style={{paddingLeft:"50px",color:"#c476f5"}}>Chat.</div>
                <div style={{paddingLeft:"50px",fontSize:"16px",fontWeight:"100", color:"#cacaca"}}>The last chat app you'll ever need.</div>
               
            </div>
        );
    }

    return null;
}

export default SplashScreen;
