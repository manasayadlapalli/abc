import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import '../../App.css'

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();


    const login = (e) =>
    {
        e.preventDefault();
        axios.post("http://localhost:3001/api/auth/login",{email: email, password: password}).
        then(async (res) => {
            console.log("success", res);
            localStorage.setItem("email", JSON.stringify(email));
            if (res.status == 200) {
              if (res) {
                console.log("srirM")
                //localStorage.setItem("name", res?.data?.user?.foundUser?.name);
                localStorage.setItem("email", res?.data?.user?.foundUser?.email);
                if(email == "admin@gmail.com") navigate('/admin')
                    else navigate('/airlines')
              }
            
            }
          }).catch((err) => {
            console.log(err)
          });
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home">
            
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required  onChange={(e)=>{setEmail(e.target.value)}}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required onChange={(e)=>{setPassword(e.target.value)}}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit" onClick={login}>Login</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
