import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { IoMdMore } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import { GrAttachment } from "react-icons/gr";
import { RiMic2Line } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';


const messages = [
    { id: 1, sender: 'Jon Doe', text: 'This is a sample big message with a longer text paragraph?' },
    { id: 2, sender: 'User', text: 'This is another sample big message with longer text paragraph.' },
    { id: 3, sender: "User", name: 'Orange', price: 8.00, quantity: 2, total: 16.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsa3K1PkfEgVzc6JeayE-uGwejpsBDBbVBUw&s' },
    { id: 4, sender: "User", name: 'Cucumber', price: 11.76, quantity: 1, total: 11.76, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE623s2qhrV8wclXeG8CyuvOg-R1H71buOjw&s' },
    { id: 5, sender: "User", name: 'Tangerine', price: 6.40, quantity: 4, total: 25.60, image: 'https://resources.markon.com/sites/default/files/styles/large/public/pi_photos/Citrus_Tangerines_Hero.jpg' },
    { id: 6, sender: 'User', text: 'This is a sample message for a chat.' },
    { id: 7, sender: 'Jon Doe', text: 'This is a sample message for a chat.' },


];  

const Chatapp = () => {
    const [input, setInput] = useState('');
    const [updatedMessages, setUpdatedMessages] = useState(messages);
    const navigate=useNavigate();

    const handleQuantityChange = (id, type) => {
        const updated = updatedMessages.map(msg => {
            if (msg.id === id && msg.name) {
                const newQuantity = type === 'increment' ? msg.quantity + 1 : msg.quantity - 1;
                if (newQuantity >= 0) {
                    return { ...msg, quantity: newQuantity, total: newQuantity * msg.price };
                }
            }
            return msg;
        });
        setUpdatedMessages(updated);
    };

    const handleSend = () => {
        if (input.trim() === '') return;
        setInput('');
    };

    return (
        <div style={{
            fontFamily: "Dosis",
            fontSize: "16px",
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#F7F7F7"
        }}>
            <header style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px solid #ddd",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)"
            }}>
                <IoIosArrowBack onClick={()=>{
                    navigate('/home');
                }} style={{ fontSize: "24px", cursor: "pointer", marginLeft: "25px" }} />
                <div style={{ display: "flex", alignItems: "center", flex: 1, marginLeft: "10px" }}>
                    <FaUserCircle style={{ fontSize: "36px", color: "#C84AD3" }} />
                    <div style={{ marginLeft: "10px" }}>
                        <div style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>Jon Doe</div>
                        <div style={{ fontSize: "14px", color: "#999" }}>online</div>
                    </div>
                </div>
                <IoMdMore style={{ fontSize: "24px", cursor: "pointer", marginRight: "25px" }} />
            </header>

            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#FFF",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                padding: "20px",
                overflowY: "scroll",
                maxHeight: "calc(100vh - 160px)",
                marginTop: "10px"
            }}>
                {updatedMessages.map(msg => (
                    <div key={msg.id} style={{
                        marginBottom: "10px",
                        display: "flex",
                        flexDirection: msg.sender === 'User' ? 'row-reverse' : 'row',
                        alignItems: 'flex-start',
                        justifyContent: "space-between"
                    }}>
                        {!msg.name ? (
                            <div style={{
                                backgroundColor: msg.sender === 'User' ? "#c475f5" : "#ebebeb",
                                color: msg.sender === 'User' ? "white" : "black",
                                borderRadius: "15px",
                                padding: "10px",
                                maxWidth: "70%",
                                wordWrap: "break-word"
                            }}>
                                {msg.text}
                            </div>
                        ) : (
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "10px",
                                marginBottom: "10px",
                                borderRadius: "30px",
                                height:"69px",
                                color:"red",
                                boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "#FFF",
                                width: "100%",
                                textAlign: msg.sender === 'User' ? 'right' : 'left',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={msg.image} alt={msg.name} style={{ width: "50px", height: "50px", borderRadius: "10px", marginRight: "10px" }} />
                                    <div>
                                        <div style={{ fontSize: "16px", fontWeight: "bold" }}>{msg.name}</div>
                                        <div style={{ fontSize: "14px", }}>Price: ${msg.price.toFixed(2)}</div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                                        <button onClick={() => handleQuantityChange(msg.id, 'decrement')} style={{
                                             border: "none", background:"transparent", color: "red", fontSize:"16px", cursor: "pointer", marginRight: "5px"
                                        }}><CiCircleMinus /></button>
                                        <div>{msg.quantity}</div>
                                        <button onClick={() => handleQuantityChange(msg.id, 'increment')} style={{
                                         border: "none", background:"transparent",fontSize:"16px", color: "red", cursor: "pointer", marginLeft: "5px"
                                        }}><CiCirclePlus /></button>
                                    </div>
                                    <div style={{ fontSize: "16px", fontWeight: "bold" }}>Total: ${msg.total.toFixed(2)}</div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                backgroundColor: "#fff",
                boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.1)",
                borderTop: "1px solid #ddd"
            }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    style={{
                        flex: 1,
                        height: "40px",
                        padding: "10px 40px 10px 40px",
                        fontSize: "16px",
                        borderRadius: "20px",
                        border: "1px solid #ebebeb",
                        backgroundColor: "#f5f5f5",
                        color: "#333"
                    }}
                />
                <GrAttachment style={{
                    position: "absolute",
                    left: "30px",
                    fontSize: "24px",
                    color: "#aeaeae",
                    cursor: "pointer"
                }} />
                <RiMic2Line style={{
                    position: "absolute",
                    right: "80px",
                    fontSize: "24px",
                    color: "#aeaeae",
                    cursor: "pointer"
                }} />
                <button
                    onClick={handleSend}
                    style={{
                        height: "40px",
                        marginLeft: "10px",
                        borderRadius: "50%",
                        border: "none",
                        backgroundColor: "#C84AD3",
                        color: "#FFFFFF",
                        cursor: "pointer",
                        padding: "8px"
                    }}
                >
                    <IoSend style={{ fontSize: "22px" }} />
                </button>
            </div>
        </div>
    );
};

export default Chatapp;
