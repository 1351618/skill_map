import React, { useState, useEffect } from "react";
import "./App.css";
import Skin from "./skin/skin";
import { getData } from "../local_storage/local_storage";

function App() {
    const [skinStyle, setSkinStyle] = useState(getData("skinStyle"));

    useEffect(() => {
        // Обновляем состояние при изменении данных в локальном хранилище
        const updatedSkinStyle = getData("skinStyle");
        setSkinStyle(updatedSkinStyle);

        // Выводим данные в консоль при изменении
        console.log(updatedSkinStyle, "App - Updated Skin Style");
    }, []);

    console.log(getData("skinStyle"), "App");

    return (
        <div className={`App ${skinStyle}`}>
            <div className="App-content">
                <Skin />

                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </div>
    );
}

export default App;
