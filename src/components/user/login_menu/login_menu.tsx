import React, { useState } from "react";
import "./login_menu.css";
import Skin from "../../skin/skin";
import LoginVia from "./login_via/login_via";

function LoginMenu() {
    // const [isUserWindow, setUserWindow] = useState("log-in");
    // const [isUserWindow, setUserWindow] = useState("register");
    const [isUserWindow, setUserWindow] = useState("profile");
    return (
        <div className="login-menu">
            <div
                className={`login-menu__log-in ${
                    isUserWindow === "log-in" ? "" : "hiden"
                }`}
            >
                <p>ВОЙТИ</p>
                <span>Логин</span>
                <input type="text" />
                <span>Пароль</span>
                <input type="text" />
                <p className="login-menu__log-in_forgot-password">
                    Забыл пароль
                </p>
                <button className="login-menu__log-in_inter">ВХОД</button>
                <div className="login-menu__log-in_social-network">
                    <p>Войти через</p>
                    <LoginVia />
                </div>
                <button className="login-menu__log-in_register">
                    зарегистрироваться
                </button>
            </div>
            <div
                className={`login-menu__register ${
                    isUserWindow === "register" ? "" : "hiden"
                }`}
            >
                <p>РЕГИСТРАЦИЯ</p>
                <span>Логин</span>
                <input type="text" />
                <span>Придумайте пароль</span>
                <input type="text" />
                <span>Повторите пароль</span>
                <input type="text" />
                <div className="login-menu__log-in_social-network">
                    <p>Зарегистрироваться через</p>
                    <LoginVia />
                </div>
                <button>РЕГИСТРАЦИЯ</button>
            </div>
            <div
                className={`login-menu__profile ${
                    isUserWindow === "profile" ? "" : "hiden"
                }`}
            >
                <p>ПРОФИЛЬ</p>
                <Skin />
                <button>выйти</button>
            </div>
        </div>
    );
}

export default LoginMenu;
