import { useState } from "react";
import { soundSvg } from "../../../app/images/images";
// import { playSound } from "../../../app/sounds/sounds";
import cls from "./btnSound.module.scss";

export const BtnSound = () => {
  const [isPressed, usePressed] = useState(false);

  const btnSoundPush = () => {
    // playSound("./klickBtn.mp3");
    usePressed(!isPressed);
    console.log(isPressed);
  };

  return (
    <button className={cls.btnSound} onClick={btnSoundPush}>
      <img src={soundSvg} alt="" />
    </button>
  );
};
