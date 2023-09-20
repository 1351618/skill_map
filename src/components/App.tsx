import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { getData } from "../local_storage/local_storage";
import User from "./user/user";
import SkillMap from "./skill_map/skill_map";
import SplashScreen from "./splash_screen/splash_screen";
//! редукс толкит ''''''''''''''''''''''''''''''''''''''''\
import { useSelector } from "react-redux";
//! редукс толкит ......................................../

function App() {
    //! редукс толкит ''''''''''''''''''''''''''''''''''''''''\
    const todos = useSelector((state: any) => state.todos.todos);
    useEffect(() => {
        // console.log(todos, "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
        setSkinStyle(todos);
    }, [todos]);
    //! редукс толкит ......................................../

    const [skinStyle, setSkinStyle] = useState(getData("skinStyle"));

    const [HideShowMenu, setHideShowMenu] = useState(true);
    const [isHidenScreensaver, setHidenScreensaver] = useState(true);

    // todo--------------скрыть показать мню
    function handleHideShowMenuClick() {
        setHideShowMenu((prevState) => !prevState);
    }

    //todo скрытие заставки
    useEffect(() => {
        const profileData = JSON.parse(localStorage.getItem("currentUser")!);
        if (profileData) {
            setHidenScreensaver(false);
        } else {
            setHidenScreensaver(true);
        }
    }, []);

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
                <div className="window-skill-map hidden">
                    <SkillMap />
                </div>
                <div
                    className={`App-content__splash-screen ${
                        isHidenScreensaver ? "" : "hidden"
                    }`}
                >
                    <SplashScreen />
                </div>
            </div>
        </div>
    );
}

export default App;
