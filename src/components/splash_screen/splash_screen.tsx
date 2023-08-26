// todo - splash_screen.tsx

import React, { useState, useEffect } from "react";
import "./splash_screen.css";
import Fon1 from "./fon_1.png";

function SplashScreen() {
    const [displaySize, setDisplaySize] = useState({ maxX: 0, maxY: 0 });
    const [isMousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // * получаем координаты курсора
    function handleMouseMove(event: any) {
        const x = event.clientX;
        const y = event.clientY;
        setMousePosition({ x, y });
        console.log(x, y);
    }

    // *получаем размер дисплея
    useEffect(() => {
        const updateDisplaySize = () => {
            const maxX = Math.floor(window.innerWidth / 2);
            const maxY = Math.floor(window.innerHeight / 2);
            setDisplaySize({ maxX, maxY });
            console.log("Display size:", maxX, maxY);
        };

        updateDisplaySize(); // Обновляем размер дисплея при монтировании компонента

        window.addEventListener("resize", updateDisplaySize); // Добавляем слушатель события изменения размера окна

        return () => {
            // Очищаем слушатель при размонтировании компонента
            window.removeEventListener("resize", updateDisplaySize);
        };
    }, []);

    return (
        <div className="splash-screen" onMouseMove={handleMouseMove}>
            <img src={Fon1} alt="" />
        </div>
    );
}

export default SplashScreen;
