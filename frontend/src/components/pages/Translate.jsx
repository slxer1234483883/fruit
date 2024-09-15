import React, { useState } from 'react';
import { MdTranslate } from "react-icons/md";

const Translator = () => {
    const [text, setText] = useState('');
    const [translatedText, setTranslatedText] = useState(''); 

    
    
    const translateText = () => {
      
        setTranslatedText(text.split(''));
    };

    return (
        <div style={{
            fontFamily: "Dosis",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "37.92px",
            textAlign: "center",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ color: "#FFFFFF", fontWeight: "100", marginBottom: "20px" }}>Translator</div>
            <div style={{ color: "#FFFFFF", fontWeight: "100", fontSize: "15px", marginBottom: "20px" }}>"Translate Text!"</div>

            <div style={{
                width: "100%",
                maxWidth: "600px",
                display: "flex",
                flexDirection: "column",
                gap: "20px"
            }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to translate"
                    style={{
                        height: "40px",marginLeft:"20px",
                        paddingInlineStart:"10px",
                        width:"350px",
                        padding: "10px",
                        fontSize: "18px",
                        borderRadius: "10px",
                        border: "1px solid #FFFFFF33",
                        backgroundColor: "#FFE5C2",
                        color: "#C84AD3"
                    }}
                />
                <button
                    onClick={translateText}
                    style={{
                        height: "40px",
                        marginLeft:"20px",
                        paddingInlineStart:"10px",
                        width:"370px",
                        borderRadius: "10px",
                        border: "none",
                        backgroundColor: "#C84AD3",
                        color: "#FFFFFF",
                        fontSize: "18px",
                        cursor: "pointer"
                    }}
                >
                    <MdTranslate style={{ marginRight: "10px" }} /> Translate
                </button>
                <div style={{
                    padding: "20px",
                    marginLeft:"20px",
                        width:"330px",
                    borderRadius: "10px",
                    border: "1px solid #FFFFFF33",
                    backgroundColor: "#C2F0FF",
                    color: "#C84AD3",
                    fontSize: "18px"
                }}>
                    {translatedText}
                </div>
            </div>
        </div>
    );
}

export default Translator;
