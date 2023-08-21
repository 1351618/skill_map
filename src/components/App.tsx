import React, { useState, useEffect } from "react";
import "./App.css";
import Skin from "./skin/skin";
import { getData } from "../local_storage/local_storage";
import User from "./user/user";

function App() {
    const [skinStyle, setSkinStyle] = useState(getData("skinStyle"));
    const [HideShowMenu, setHideShowMenu] = useState(true);

    useEffect(() => {
        // Обновляем состояние при изменении данных в локальном хранилище
        const updatedSkinStyle = getData("skinStyle");
        setSkinStyle(updatedSkinStyle);

        // Выводим данные в консоль при изменении
        // console.log(updatedSkinStyle, "App - Updated Skin Style");
    }, []);

    // console.log(getData("skinStyle"), "App");
    // todo--------------скрыть показать мню
    function handleHideShowMenuClick() {
        setHideShowMenu((prevState) => !prevState);
    }

    return (
        <div className={`App ${skinStyle}`}>
            <div className="App-content">
                <button
                    className="button-hide-show-menu"
                    onClick={handleHideShowMenuClick}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div
                    className={`App-content__user ${
                        HideShowMenu ? "" : "hidden"
                    }`}
                >
                    <User />
                    <Skin />
                </div>

                <div
                    className={`App-content__navigation ${
                        HideShowMenu ? "" : "hidden"
                    }`}
                ></div>
            </div>
        </div>
    );
}

export default App;
