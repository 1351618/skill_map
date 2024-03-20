import { useTranslation } from "react-i18next";
import { useTheme } from "../../../app/providers/themeProvider/lib/useTheme";
import cls from "./header.module.scss";
import { useEffect, useState } from "react";
import { NavHeader } from "../../navHeader/ui/NavHeader";
import MenuBtnSvg from "./menu_btn.svg";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const languagesArray = ["ru", "en", "cn"];
  const [counter, setCounter] = useState(0);
  const { changeTheme } = useTheme();
  const [isMobileWind, setMobileWind] = useState(false);
  const [isMobileMenu, setMobileMenu] = useState(false);

  const handleResize = () => {
    setMobileWind(globalThis.innerWidth <= 765);
  };

  useEffect(() => {
    handleResize(); // Вызываем функцию обработчика события при первой отрисовке
    globalThis.addEventListener("resize", handleResize);

    return () => {
      globalThis.removeEventListener("resize", handleResize);
    };
  }, []);

  // ! при клике на смену языка после загрузки - срабатывает со второго раза
  counter === languagesArray.length ? setCounter(0) : null;

  const toggle = async (): Promise<void> => {
    void (await i18n.changeLanguage(languagesArray[counter]));
  };

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log("нажал");
    setMobileMenu(false);
    e.stopPropagation();
  };

  return (
    <header className={cls.header}>
      <div className={cls.headerLogo}>
        <a href="/">Logo</a>
      </div>

      <div className={`${cls.headerDesktop}  ${isMobileWind ? cls.hide : ""}`}>
        <NavHeader />
      </div>
      <div className={`${cls.headerMobile} ${isMobileWind ? "" : cls.hide}`}>
        <button
          onClick={() => {
            setMobileMenu(true);
          }}
        >
          <img src={MenuBtnSvg} alt="" />
        </button>
      </div>
      <div className={cls.headerBacLang}>
        <button
          onClick={() => {
            toggle();
            setCounter((prev) => prev + 1);
          }}
        >
          {t("Change language")}
        </button>

        <button onClick={changeTheme}>{t("Change theme")}</button>
      </div>
      <div
        className={`${cls.mobileMenu} ${isMobileMenu ? "" : cls.hide}`}
        onClick={handleContainerClick}
      >
        <NavHeader />
      </div>
    </header>
  );
};
