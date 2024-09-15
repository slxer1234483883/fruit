import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';
import { IoFingerPrint } from "react-icons/io5";

const Login = () => {
  return (
    <div style={{backgroundColor:"white",width:"100vh", minWidth:"375px", maxWidth:"430px", minHeight:"100vh", height:"100%"}}> 
      <div style={{ textAlign: "center", fontSize: "40px", fontWeight: "400", lineHeight: "55.86px", marginBottom: "10px",paddingBlockStart:"20px" }}>Login</div>
      <div style={{ color: "#6b5e5e", fontSize: "20px", textAlign: "center" }}>By signing in you are agreeing</div>
      <div style={{ textAlign: "center", color: "#6b5e5e", fontSize: "20px", marginBlockStart: "15px" }}>our <Link style={{ textDecoration: "none", color: "#036BB9" }}>Term and privacy policy</Link></div>
      <Loginbox />
    </div>
  );
}

const Loginbox = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate=useNavigate();
  
  const handleLogin = () => {
    if (email && password) {
      setMessage("Login successful!");
      navigate("/home");
      
    } else {
      setMessage("Invalid email or password.");
    }
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBlockStart: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <div 
          onClick={() => toggleTab("login")} 
          style={{ paddingTop: "15px",
            marginRight: "20px",
            cursor: "pointer",
            fontSize: "20px", fontWeight: "400",
            color: activeTab === "login" ? "#036bb9" : "#A6A6A6",
            borderBottom: activeTab === "login" ? "1px solid black" : "none"
          }}
        >
          Login
        </div>
        <div 
          onClick={() => toggleTab("register")} 
          style={{
            cursor: "pointer",
            fontSize: "20px",
            paddingTop: "15px", fontWeight: "400",
            color: activeTab === "register" ? "#036bb9" : "#A6A6A6",
            borderBottom: activeTab === "register" ? "1px solid black" : "none"
          }}
        >
          Register
        </div>
      </div>

      <input 
        placeholder='Email Address' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ paddingLeft:"10px", marginBottom: "35px", fontWeight: "400", lineHeight: "34.91px", fontSize: "20px", width: "318px", height: "40px", backgroundColor: "transparent", borderStyle: "none", borderBottom: "2px solid #ccc" }} 
      />
      <input 
        placeholder='Password' 
        type='password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{paddingLeft:"10px", marginBottom: "25px", fontWeight: "400", lineHeight: "34.91px", fontSize: "20px", width: "318px", height: "40px", backgroundColor: "transparent", borderStyle: "none", borderBottom: "2px solid #ccc" }} 
      />
      <div style={{ marginBottom: "45px", marginBlockStart: "20px", display: "flex", justifyContent: "space-between", width: "318px" }}>
        <div>
          <label style={{ paddingInlineEnd: "40px", color: "#6B5E5E" }}>
          <input type='checkbox' style={{ border: "2px solid #6B5E5E", accentColor: "#6B5E5E" }} />
            Remember password</label>
        </div>
        <Link style={{ textDecoration: "none", color: "#0386d0" }}>Forget Password</Link>
      </div>

      <button 
        onClick={handleLogin}
        style={{
          width: "318px",
          height: "45px",
          borderRadius: "5px",
          backgroundColor: "#0386d0",
          fontSize: "19px",
          color: "white",
          marginBottom: "15px", 
          border:"none" 
        }}
      >
        Login
      </button>

      {message && <div style={{ color: message === "Login successful!" ? "green" : "red", marginBottom: "15px" }}>{message}</div>}

      <div style={{ color: "#747070", textAlign: "center", fontSize: "25px", fontWeight: "400", lineHeight: '34.91px' }}> or connect with</div>

      <div style={{ marginBlockStart: "11px", textAlign: "center", fontSize: "39px" }}>
        <FaFacebook style={{ color: "#3b5998", marginInline: "10px" }} /> 
        <FaInstagram style={{ fontSize: "29px", color: "#dae0ec", backgroundColor: "#3b5998", borderRadius: "50%", padding: "5px", marginInline: "10px" }} /> 
        <FaPinterest style={{ color: "#cb2027", marginInline: "10px" }} /> 
        <TiSocialLinkedin style={{ color: "#f1f2f2", backgroundColor: "#007ab9", borderRadius: "50%", marginInline: "10px" }} />
      </div>

      <IoFingerPrint style={{ marginBlockStart: "50px", padding: "3px", borderRadius: "10px", fontSize: "55px", color: "white", backgroundColor: "#0386d0" }} />
    </div>
  );
}

export default Login;
