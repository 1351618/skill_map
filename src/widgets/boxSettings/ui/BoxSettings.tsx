import { useTranslation } from "react-i18next";
import cls from "./boxSettings.module.scss";
import { useTheme } from "../../../app/providers/themeProvider/lib/useTheme";
import { useState } from "react";
import { dayAndNightSvg, languageSvg } from "../../../app/images/images";

export const BoxSettings = () => {
  const { changeTheme } = useTheme();
  const { i18n } = useTranslation();
  const [counter, setCounter] = useState(0);
  const languagesArray = ["ru", "en", "cn"];

  // ! при клике на смену языка после загрузки - срабатывает со второго раза
  counter === languagesArray.length ? setCounter(0) : null;

  const toggle = async (): Promise<void> => {
    void (await i18n.changeLanguage(languagesArray[counter]));
  };
  return (
    <div className={cls.boxSettings}>
      {/* <button onClick={changeTheme}>{t("Change theme")}</button> */}
      <button onClick={changeTheme}>
        <img src={dayAndNightSvg} alt="" />
      </button>
      <button
        onClick={() => {
          toggle();
          setCounter((prev) => prev + 1);
        }}
      >
        {/* {t("Change language")} */}
        <img src={languageSvg} alt="" />
      </button>
    </div>
  );
};
