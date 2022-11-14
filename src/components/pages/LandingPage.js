import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

import '../../App.css'
//import BackgroundImage from '../../assets/images/bg.png'

export const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginpage = (event) => {
        navigate("/login");
      };

    return (
        <header style={ HeaderStyle }>
            <h1 className="main-title text-center">Green Energy Cloud</h1>
            <div className="buttons text-center">
                    <button className="primary-button" onClick={handleLoginpage}>log in</button>
                {/* <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link> */}
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: "teal",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}