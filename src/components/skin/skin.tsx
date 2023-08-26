// todo skinStyle.tsx

import React, { useState, useEffect } from "react";
import "./skin.css";
import { saveData, getData } from "../../local_storage/local_storage";

function Skin() {
    const [inputChecked, setInputChecked] = useState(() =>
        getData("skinStyle")
    );
    // При первой загрузке страницы, если в локальном хранилище нет значения, установите значение по умолчанию
    useEffect(() => {
        const storedSkinStyle = getData("skinStyle");
        if (!storedSkinStyle) {
            saveData("skinStyle", "darkClassical");
            setInputChecked("darkClassical"); // Установите начальное состояние здесь
        } else {
            setInputChecked(storedSkinStyle);
        }
    }, []);

    // нажатие на импуты
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setInputChecked(event.target.id);
        saveData("skinStyle", event.target.id);
    }

    return (
        <div className="skin">
            <h1>ТЕМА</h1>

            <p>класическая</p>
            <section>
                <label htmlFor="">темная</label>
                <input
                    type="radio"
                    name="skin"
                    id="darkClassical"
                    value="dark"
                    checked={inputChecked === "darkClassical"}
                    onChange={handleInputChange}
                />
            </section>
            <section>
                <label htmlFor="">светлая</label>
                <input
                    type="radio"
                    name="skin"
                    id="lightClassical"
                    value="light"
                    checked={inputChecked === "lightClassical"}
                    onChange={handleInputChange}
                />
            </section>
            <p>игровая</p>
            <section>
                <label htmlFor="">темная</label>
                <input
                    type="radio"
                    name="skin"
                    id="darkGame"
                    value="dark"
                    checked={inputChecked === "darkGame"}
                    onChange={handleInputChange}
                />
            </section>
            <section>
                <label htmlFor="">светлая</label>
                <input
                    type="radio"
                    name="skin"
                    id="lightGame"
                    value="light"
                    checked={inputChecked === "lightGame"}
                    onChange={handleInputChange}
                />
            </section>
        </div>
    );
}

export default Skin;
