import React, { useState, useEffect } from "react";
import "./App.css";
import { getData } from "../local_storage/local_storage";
import User from "./user/user";
import SkillMap from "./skill_map/skill_map";
import SplashScreen from "./splash_screen/splash_screen";

function App() {
    const [skinStyle, setSkinStyle] = useState(getData("skinStyle"));
    const [HideShowMenu, setHideShowMenu] = useState(true);

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
                </div>

                <div
                    className={`App-content__navigation ${
                        HideShowMenu ? "" : "hidden"
                    }`}
                ></div>
                <div className="window-skill-map hiden">
                    <SkillMap />
                </div>
                <div className="App-content__splash-screen">
                    <SplashScreen />
                </div>
            </div>
        </div>
    );
}

export default App;
