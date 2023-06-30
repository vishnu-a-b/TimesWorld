import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImg from "../assets/loginImg.png";
import fb from "../assets/fb.png";
import google from "../assets/google.png";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedIn.png";

function Login() {
  const nav = useNavigate();
  const userName="vishnu"
  const pass="123"
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");
    if (savedUsername === userName && savedPassword === pass) {
      nav("/home");
    }
  }, []);

  function submit(e) {
    e.preventDefault();

    if (name === userName && password === pass) {
      if (rememberMe) {
        localStorage.setItem("username", name);
        localStorage.setItem("password", password);
      } 
      nav("/home");
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div className="container">
      <div className="login">
        <h1>SignIn</h1>
        <h4>
          New user? <a>Create an account</a>
        </h4>
        <form action="POST">
          <input
            type="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            placeholder="Username or email"
          />
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            placeholder="Password"
          />
          <label>
            <input
              type="checkbox"
              className="checkbox"
              name="signed"
              checked={rememberMe}
              onChange={(e) => {
                setRememberMe(e.target.checked);
              }}
            />
            Keep me signed in
          </label>

          <input
            type="submit"
            className="button"
            value="Login"
            onClick={submit}
          />
        </form>
  
        <h6> Or Sign In With </h6>

        <div className="social">
          <img src={google} alt={google} />
          <img src={fb} alt={fb} />
          <img src={linkedIn} alt={linkedIn} />
          <img src={twitter} alt={twitter} />
        </div>
      </div>
      <img src={loginImg} className="imageLogin" alt={loginImg} />
    </div>
  );
}

export default Login;
