import React, { useEffect, useState } from 'react'
import faqsService from './Api';


const Faq = () => {
    const [faqs, setFaqs] = useState([]);
    useEffect(() => {
        getfaq();
    }, [])
    async function getfaq() {
        let res = await faqsService.getFaqs();
        setFaqs(res.data);
        console.log(res.data);
    }
    return (
        <div className='faq' style={{
            fontFamily: "Poppins",
            fontSize: "30px",
            fontWeight: "600",
            textAlign: "center",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }}>
            <h3 style={{ color: "white" }}>FaQ section</h3>
{   faqs.map((arr)=>(


            <div key={arr.faqs_id} style={{ width: "376px", height: "160px", display: "flex", flexDirection: "row", borderRadius: "25px", marginBlockEnd:"10px", backgroundColor: "#EAEFEBCC" }}>
                <div style={{ display: 'flex', flexDirection: "column", alignItems: 'start', paddingInlineStart: "40px", paddingBlockStart: "18px" }}>
                    <img src={`${arr.image_url}`} style={{ width: "105px", height: "90px", borderRadius: "25px" }} />
                    <div>
                        <div style={{ fontSize: "16px", fontWeight: "700",marginBlockStart:"5px", marginInlineStart: "12px", color: "red" }}>{arr.name}</div>
                    </div>
                </div>


                <div style={{ display: 'flex', flexDirection: "column", marginInlineStart:"15px"}}>

                    <div style={{ fontSize: "16px", textAlign: "left", fontWeight: "700", color: "red",marginBlockStart:"20px",marginBlockEnd:"4px" }}>{arr.title}</div>


                    <div style={{ fontSize: "13px",lineHeight: "1.2", fontWeight: "700",maxWidth:"160px", textAlign: "left", color: "#0386D0" }}>{arr.description}</div>

                </div>
            </div>

))}


        </div>
    )
}

export default Faq