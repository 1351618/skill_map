import { soundSvg } from "../../../app/images/images";
import { playSound } from "../../../app/sounds/sounds";
import cls from "./btnSound.module.scss";

export const BtnSound = () => {
  return (
    <button
      className={cls.btnSound}
      onClick={() => {
        playSound("./klickBtn.mp3");
      }}
    >
      <img src={soundSvg} alt="" />
    </button>
  );
};
