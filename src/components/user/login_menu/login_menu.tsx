import React, { useState } from "react";
import "./login_menu.css";
import Skin from "../../skin/skin";

function LoginMenu() {
    const [isUserWindow, setUserWindow] = useState(0);
    return (
        <div className="login-menu">
            <div className="login-menu__log-in">
                <p>ВОЙТИ</p>
                <span>Логин</span>
                <input type="text" />
                <span>Пароль</span>
                <input type="text" />
                <div className="login-menu__log-in_social-network"></div>
                <button>зарегистрироваться</button>
            </div>
            <div className="login-menu__register">
                <p>РЕГИСТРАЦИЯ</p>
                <span>Логин</span>
                <input type="text" />
                <span>Придумайте пароль</span>
                <input type="text" />
                <span>Повторите пароль</span>
                <input type="text" />
                <div className="login-menu__log-in_social-network"></div>
                <button>войти</button>
            </div>
            <div className="login-menu__register">
                <p>ПРОФИЛЬ</p>
                <Skin />
                <button>выйти</button>
            </div>
        </div>
    );
}

export default LoginMenu;
