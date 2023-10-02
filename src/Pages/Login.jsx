// export default function Login() {
//     return <h1>Login</h1>
//   }

import React, { useState } from "react";
import "../components/LoginSignup.css";

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up")

  return (
    <div className="constainer">
      <div className="header"></div>
      <div className="text">{action}</div>

      <div className="inputs">

        {action === "Login"?<div></div>: <div className="input">
          <input type="text" placeholder="Name"/>
        </div>}
        

        <div className="input">
          <input type="email" placeholder="Email Id"/>
        </div>

        <div className="input">
          <input type="password" placeholder="Password"/>
        </div>

        {action === "Sign Up"?<div></div>: <div className="forgot-password">forgot password ? <span>Click here</span></div>}
        
        <div className="submit-container">
          <div className={action === "Login"?"submit gray":"submit"} onClick={() => {setAction("Sign Up")}}>Signup</div>
          <div className={action === "Sign Up"?"submit gray":"submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
