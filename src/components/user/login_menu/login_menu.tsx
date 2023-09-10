import React, { useState, useEffect } from "react";
import "./login_menu.css";
import Skin from "../../skin/skin";
import LoginVia from "./login_via/login_via";
import ProfileSettings from "./profile_settings/profile_settings";
import LoginMenuRegistr from "./login_menu_registr/login_menu_registr";

function LoginMenu() {
    const dataUser =
        "https://64fc82c2605a026163ae91a5.mockapi.io/api/1351618/skill_map/database/user";

    // todo - окно по нажатию на поле user
    const [isUserWindow, setUserWindow] = useState<string | null>("log-in");
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
    // !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    useEffect(() => {
        const idAvailability = JSON.parse(localStorage.getItem("currentUser")!);
        if (idAvailability) {
            setUserWindow("profile");
        } else {
            setUserWindow("log-in");
        }
    }, []);
    // !>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    // todo - обработка логина-пароля

    function handleClickLogin() {
        let userDataPromise = new Promise(function (resolve, reject) {
            // console.log("обещание созданно");
            fetch(dataUser)
                .then((response) => response.json())
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    console.log("Сервер не отвечает");
                });
        });

        userDataPromise.then(function (data: any) {
            // console.log(data);
            const user = data.find(
                (item: { login: string }) => item.login === isUserLogin
            );
            if (user) {
                console.log("найден ", isUserLogin);
                if (user.password === isUserPassword) {
                    console.log("вход выполнен");
                    setLoginError("");
                    // Отправка данных пользователя в локальное хранилище
                    localStorage.setItem("currentUser", JSON.stringify(user));
                    console.log(
                        "Данные пользователя сохранены в локальном хранилище"
                    );
                    // перезагрузка страницы
                    window.location.reload();
                } else {
                    console.log("не верный пароль");
                    setLoginError("UserErrorPassword");
                }
            } else {
                console.log("пользователь не зарегистрирован");
                setLoginError("UserNotFound");
            }

            // console.log("обещание выполнено");
        });
    }

    // todo - переход на окно регистрации
    function handleClickWindRegister() {
        setUserWindow("register");
    }

    // todo - переход на окно входа
    function handleClickWindInter() {
        setUserWindow("log-in");
    }
    //todo   кнопка выхода
    function handleClickExit() {
        setUserWindow("log-in");
        localStorage.clear();
        window.location.reload();
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
                {/* поле регистрации */}
                <LoginMenuRegistr />
            </div>
            <div
                className={`login-menu__profile ${
                    isUserWindow === "profile" ? "" : "hiden"
                }`}
            >
                <p>ПРОФИЛЬ</p>
                <ProfileSettings />
                <Skin />
                <button onClick={handleClickExit}>выйти</button>
            </div>
        </div>
    );
}

export default LoginMenu;
