// todo login_menu_registr.tsx

import React, { useState, useEffect, ChangeEvent } from "react";
import "./login_menu_registr.css";
import LoginVia from "../login_via/login_via";

function LoginMenuRegistr() {
    const [isloginsList, setLoginsList] = useState<string[]>([]);

    const dataUser =
        "https://64fc82c2605a026163ae91a5.mockapi.io/api/1351618/skill_map/database/user";

    const [isLoginContents, setLoginContents] = useState(false);
    const [isLoginText, setLoginText] = useState("");
    const [isLoginError, setLoginError] = useState("none");

    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [isPasswordError, setPasswordError] = useState("none");

    // выодим толь когда произошли изменения
    useEffect(() => {
        // console.log(isLoginContents);
        if (isLoginContents === true) {
            // запускаем get запрос и получаем список пользоватедей
            // создаем промис
            let userLoginDataPromise = new Promise(function (resolve, reject) {
                fetch(dataUser, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((data) => {
                        data.forEach((item: { login: string }) => {
                            setLoginsList((prevLoginsList) => [
                                ...prevLoginsList,
                                item.login,
                            ]);
                        });
                        // console.log(isloginsList);
                    })
                    .catch((error: Error) => {
                        console.log("Сервер не отвечает");
                    });
            });
        }
    }, [isLoginContents]);

    // проверка  логина на уникальность
    function uniquenessCheck(inputContent: any) {
        // console.log(isloginsList.indexOf(inputContent));
        setLoginError(
            isloginsList.indexOf(inputContent) === 0 ? "doubleLog" : "none"
        );
    }

    // отслеживание поля логина
    function handleInputChangeLogin(event: ChangeEvent<HTMLInputElement>) {
        const inputContent = event.target.value.trim();
        setLoginContents(inputContent ? true : false);
        setLoginText(event.target.value.trim());

        setLoginError(
            inputContent.length >= 1 && inputContent.length <= 5
                ? "6sim"
                : "none"
        );
        if (inputContent.length >= 6) {
            uniquenessCheck(inputContent);
        }
    }

    //todo создание паролей
    const handleInputChangePassword_1 = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setPassword1(event.target.value);
    };

    const handleInputChangePassword_2 = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setPassword2(event.target.value);
    };

    useEffect(() => {
        let x: string = "";
        if (password1 !== "") {
            x = "6sim";
            if (password1.length >= 6) {
                x = "passNotDubl";
                if (password1 === password2) {
                    x = "none";
                    setPasswordMatch(true);
                }
            }
        } else {
            setPasswordMatch(false);
        }
        setPasswordError(x);
        // console.log(x);
    }, [password1, password2]);

    return (
        <div className="login-menu-registr">
            <p>РЕГИСТРАЦИЯ</p>
            <span>Логин</span>

            <input type="text" onChange={handleInputChangeLogin} />
            <div className="login-menu-registr__logError">
                <p className={`${isLoginError === "6sim" ? "" : "hidden"}`}>
                    не менее 6 символов
                </p>
                <p
                    className={`${
                        isLoginError === "doubleLog" ? "" : "hidden"
                    }`}
                >
                    такой логин зарегистрирован
                </p>
            </div>
            <span>Придумайте пароль</span>

            <input type="text" onChange={handleInputChangePassword_1} />
            <span>Повторите пароль</span>
            <input type="text" onChange={handleInputChangePassword_2} />
            <div className="login-menu-registr__passError">
                <p className={`${isPasswordError === "6sim" ? "" : "hidden"}`}>
                    короткий пароль
                </p>
                <p
                    className={`${
                        isPasswordError === "passNotDubl" ? "" : "hidden"
                    }`}
                >
                    пароль не совпадает
                </p>
            </div>

            <div className="login-menu__log-in_social-network">
                <p>Зарегистрироваться через</p>
                <LoginVia />
            </div>
            <button className="login-menu-registr__button active">
                РЕГИСТРАЦИЯ
            </button>
        </div>
    );
}

export default LoginMenuRegistr;
