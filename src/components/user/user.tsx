import React, { useState, useEffect } from "react";
import "./user.css";
import LoginMenu from "./login_menu/login_menu";

function User() {
    const [isLogin, setLogin] = useState(false);
    const [avatarUrl, setAvatarUrl] = useState<string | null>("");

    // todo - вход в ЛК
    function loginAccountClick() {
        setLogin(true);
    }
    // todo - закрытие окна для входа
    function windowClosingClick() {
        setLogin(false);
    }
    // todo - отмена нажатия на компонент внутри
    function menuClick(event: any) {
        event.stopPropagation();
    }
    // todo - загрузка изображениния пользователя
    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
        if (currentUser && typeof currentUser.avatar === "string") {
            setAvatarUrl(currentUser.avatar);
        }
    }, []);
    return (
        <>
            <div className="user__account" onClick={loginAccountClick}>
                {avatarUrl ? (
                    <img src={avatarUrl} alt="Аватар" />
                ) : (
                    <svg
                        id="Capa_1"
                        enableBackground="new 0 0 515.556 515.556"
                        viewBox="0 0 515.556 515.556"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m348.918 37.751c50.334 50.334 50.334 131.942 0 182.276s-131.942 50.334-182.276 0-50.334-131.942 0-182.276c50.334-50.335 131.942-50.335 182.276 0" />
                        <path d="m455.486 350.669c-117.498-79.391-277.917-79.391-395.415 0-17.433 11.769-27.848 31.656-27.848 53.211v111.676h451.111v-111.676c0-21.555-10.416-41.442-27.848-53.211z" />
                    </svg>
                )}
                {avatarUrl ? null : <p>ВОЙТИ</p>}
            </div>
            <div
                className={`user__login ${isLogin ? "" : "hidden"}`}
                onClick={windowClosingClick}
            >
                <p className="user__login_p">&#10006;</p>
                <div onClick={menuClick}>
                    <LoginMenu />
                </div>
            </div>
        </>
    );
}

export default User;
