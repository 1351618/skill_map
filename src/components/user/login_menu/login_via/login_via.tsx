// todo - login_via.tsx

import React from "react";
import "./login_via.css";
import GoogleSvg from "./google.svg";
import LinkedinSvg from "./linkedin.svg";
import FacebookSvg from "./facebook.svg";
import VkontakteSvg from "./vkontakte.svg";

function LoginVia() {
    return (
        <div className="login-via">
            <img src={GoogleSvg} alt="" />
            <img src={LinkedinSvg} alt="" />
            <img src={FacebookSvg} alt="" />
            <img src={VkontakteSvg} alt="" />
        </div>
    );
}

export default LoginVia;
