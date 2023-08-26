// todo - splash_screen.tsx

import React, { useState, useEffect } from "react";
import "./splash_screen.css";
import Fon1 from "./fon_1.png";
import Fon2 from "./fon_2.jpg";
import Fon3 from "./fon_3.png";

function SplashScreen() {
    const [displaySize, setDisplaySize] = useState({ maxX: 0, maxY: 0 });
    const [isMousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isImageShift1, setImageShift1] = useState({ xImg: -50, yImg: -50 });
    const [isImageShift2, setImageShift2] = useState({ xImg: -50, yImg: -50 });
    const [isImageShift3, setImageShift3] = useState({ xImg: -50, yImg: -50 });

    // * получаем координаты курсора
    function handleMouseMove(event: any) {
        const x = event.clientX;
        const y = event.clientY;
        setMousePosition({ x, y });

        setImageShift1({
            xImg: -((x - displaySize.maxX) / displaySize.maxX) - 50,
            yImg: -((y - displaySize.maxY) / displaySize.maxY) - 50,
        });
        setImageShift2({
            xImg: -(((x - displaySize.maxX) / displaySize.maxX) * 2) - 50,
            yImg: -(((y - displaySize.maxY) / displaySize.maxY) * 2) - 50,
        });
        setImageShift3({
            xImg: -(((x - displaySize.maxX) / displaySize.maxX) * 3) - 50,
            yImg: -(((y - displaySize.maxY) / displaySize.maxY) * 3) - 50,
        });
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
            window.removeEventListener("resize", updateDisplaySize); // Очищаем слушатель при размонтировании компонента
        };
    }, []);

    return (
        <div className="splash-screen" onMouseMove={handleMouseMove}>
            <img
                className="splash-screen__Fon1"
                src={Fon1}
                alt=""
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(${isImageShift1.xImg}%, ${isImageShift1.yImg}%)`,
                }}
            />
            <img
                className="splash-screen__Fon2"
                src={Fon2}
                alt=""
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(${isImageShift2.xImg}%, ${isImageShift2.yImg}%)`,
                }}
            />
            <img
                className="splash-screen__Fon3"
                src={Fon3}
                alt=""
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: `translate(${isImageShift3.xImg}%, ${isImageShift3.yImg}%)`,
                }}
            />
        </div>
    );
}

export default SplashScreen;
