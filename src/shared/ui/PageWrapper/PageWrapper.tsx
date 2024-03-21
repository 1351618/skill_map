import cls from "./pageWrapper.module.scss";
import { ReactNode, useState } from "react";
import { PersonalArea } from "../../../widgets/personalArea/ui/PersonalArea";
import { MiniNavBar } from "../../../widgets/miniNavBar/ui/MiniNavBar";
import { BoxSettings } from "../../../widgets/boxSettings/ui/BoxSettings";
import settingsSvg from "./settings.svg";
import { Balance } from "../../../widgets/balance/ui/Balance";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const [isSettingsShow, setSettingsShow] = useState(false);
  const [isShowHideInterface, setShowHideInterface] = useState(true);
  return (
    <div className={cls.app}>
      <section
        className={`
      ${cls.sectionPersonalArea}
      ${isShowHideInterface ? cls.showInterface : ""}
      `}
      >
        <PersonalArea />
      </section>

      <section
        className={`
      ${cls.sectionBalance}
      ${isShowHideInterface ? cls.showInterface : ""}
      `}
      >
        <Balance />
      </section>

      <section
        className={`
        ${cls.sectionMiniNavBar} 
        ${isShowHideInterface ? cls.showInterface : ""}
        `}
      >
        <MiniNavBar />
      </section>

      <main className="main">
        <div className="Home__inner">{children}</div>
      </main>
      <section
        className={`
        ${cls.sectionBoxSettings} 
        ${isSettingsShow ? "" : cls.showSettings}
        ${isShowHideInterface ? cls.showInterface : ""}
        `}
      >
        <button
          onClick={() => {
            setSettingsShow(!isSettingsShow);
          }}
        >
          <img className={cls.settingsSvg} src={settingsSvg} alt="" />
        </button>
        <BoxSettings />
      </section>
      <section className={cls.sectionBtnShowHideInterface}>
        <button
          className={cls.btnShowHideInterface}
          onClick={() => {
            setShowHideInterface(!isShowHideInterface);
          }}
        >
          X
        </button>
        ;
      </section>
    </div>
  );
};
