import cls from "./pageWrapper.module.scss";
import { ReactNode, useState } from "react";
import { PersonalArea } from "../../../widgets/personalArea/ui/PersonalArea";
import { MiniNavBar } from "../../../widgets/miniNavBar/ui/MiniNavBar";
import { BtnShowHideInterface } from "../../../widgets/btnShowHideInterface/ui/btnShowHideInterface";
import { BoxSettings } from "../../../widgets/boxSettings/ui/BoxSettings";
import settingsSvg from "./settings.svg";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const [isSettingsShow, setSettingsShow] = useState(false);
  return (
    <div className={cls.app}>
      <section className={cls.sectionPersonalArea}>
        <PersonalArea />
      </section>
      <section className={cls.sectionMiniNavBar}>
        <MiniNavBar />
      </section>

      <main className="main">
        <div className="Home__inner">{children}</div>
      </main>
      <section
        className={`${cls.sectionBoxSettings} ${
          isSettingsShow ? cls.show : ""
        }`}
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
        <BtnShowHideInterface />
      </section>
    </div>
  );
};
