import React, { useState } from "react";
import "./login_menu.css";
import Skin from "../../skin/skin";
import LoginVia from "./login_via/login_via";
import dataUser from "./user.json";

function LoginMenu() {
    // todo - окно по нажатию на поле user
    const [isUserWindow, setUserWindow] = useState("log-in");
    // const [isUserWindow, setUserWindow] = useState("profile");
    // todo логин пароль
    const [isUserLogin, setUserLogin] = useState("");
    const [isUserPassword, setUserPassword] = useState("");
    // todo ошибка входа
    const [isLoginError, setLoginError] = useState("");

    // todo обработчики полей входа
    function handleUserLogin(event: React.ChangeEvent<HTMLInputElement>) {
        setUserLogin(event.target.value);
    }
    function handleUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
        setUserPassword(event.target.value);
    }

    // todo - обработка логина-пароля
    function handleClickLogin() {
        const user = dataUser.find(
            (userData) => userData.userLogin === isUserLogin
        );
        if (user) {
            if (user.userPassword === isUserPassword) {
                // console.log("вход выполнен");
                setLoginError("");
                //! действия при входе
                //! отправить данные в хранилище
                //! перезагрузить страницу чтоб подгрузить данные
            } else {
                // console.log("не верный пароль");
                setLoginError("UserErrorPassword");
            }
        } else {
            // console.log("пользователь не зарегистрирован");
            setLoginError("UserNotFound");
        }
    }

    // todo - переход на окно регистрации
    function handleClickWindRegister() {
        setUserWindow("register");
    }

    // todo - переход на окно входа
    function handleClickWindInter() {
        setUserWindow("log-in");
    }

    return (
        <div className="login-menu">
            <div
                className={`login-menu__log-in ${
                    isUserWindow === "log-in" ? "" : "hiden"
                }`}
            >
                <p>ВОЙТИ</p>
                <div className="input-block">
                    <span>Логин</span>
                    <input
                        type="text"
                        value={isUserLogin}
                        onChange={handleUserLogin}
                    />
                    <div className="login-menu__log-in_LogPass-failed">
                        <p
                            className={`${
                                isLoginError === "UserNotFound"
                                    ? ""
                                    : "inactive"
                            }`}
                        >
                            пользователь не зарегистрирован
                        </p>
                    </div>
                </div>
                <span>Пароль</span>
                <input
                    type="text"
                    value={isUserPassword}
                    onChange={handleUserPassword}
                />
                <div className="login-menu__log-in_LogPass-failed">
                    <p
                        className={`${
                            isLoginError === "UserErrorPassword"
                                ? ""
                                : "inactive"
                        }`}
                    >
                        не верный пароль
                    </p>
                </div>
                <p className="login-menu__log-in_forgot-password">
                    Забыл пароль
                </p>
                <button
                    className={`login-menu__log-in_inter ${
                        isUserLogin === "" || isUserPassword === ""
                            ? "inactive"
                            : ""
                    }`}
                    onClick={handleClickLogin}
                >
                    ВХОД
                </button>
                <div className="login-menu__log-in_social-network">
                    <p>Войти через</p>
                    <LoginVia />
                </div>
                <button
                    className="login-menu__log-in_register"
                    onClick={handleClickWindRegister}
                >
                    зарегистрироваться
                </button>
            </div>
            <div
                className={`login-menu__register ${
                    isUserWindow === "register" ? "" : "hiden"
                }`}
            >
                <button
                    className="back-wind-entry"
                    onClick={handleClickWindInter}
                >
                    &larr; вернуться на поле входа
                </button>
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
