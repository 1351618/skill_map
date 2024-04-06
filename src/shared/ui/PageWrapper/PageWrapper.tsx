import cls from "./pageWrapper.module.scss";
import { ReactNode, useState } from "react";
import { Balance } from "../../../widgets/balance/ui/Balance";
import { MiniNavBar } from "../../../widgets/miniNavBar/ui/MiniNavBar";
import { BoxSettings } from "../../../widgets/boxSettings/ui/BoxSettings";
import { PersonalArea } from "../../../widgets/personalArea/ui/PersonalArea";
import {
  aboutSvg,
  keyShortSvg,
  questionSvg,
  settingsSvg,
} from "../../assets/images/images";
import { BtnShowHideInterface } from "../../buttons/btnShowHideInterface/BtnShowHideInterface";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
  const [isSettingsShow, setSettingsShow] = useState(false);
  const [isShowHideInterface, setShowHideInterface] = useState(true);
  const ShowInterface = isShowHideInterface ? cls.showInterface : "";

  return (
    <div className={cls.app}>
      <section className={`${cls.sectionPersonalArea} ${ShowInterface}`}>
        <PersonalArea />
      </section>
      <section className={`${cls.sectionBalance} ${ShowInterface}`}>
        <button className={cls.keyShort}>
          <img src={keyShortSvg} alt="keyShort alt+q+p+n" />
        </button>
        <button className={cls.keyShort}>
          <img src={questionSvg} alt="question" />
        </button>
        <button className={cls.keyShort}>
          <img src={aboutSvg} alt="about" />
        </button>
        <Balance />
      </section>
      <section className={`${cls.sectionMiniNavBar} ${ShowInterface}`}>
        <MiniNavBar />
      </section>
      <section className={`${cls.sectionMain} ${ShowInterface}`}>
        <main className="main">
          <div className="Home__inner">{children}</div>
        </main>
      </section>
      <section
        className={`${cls.sectionBoxSettings} ${
          isSettingsShow ? "" : cls.showSettings
        } ${ShowInterface}`}
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
        <BtnShowHideInterface
          is={isShowHideInterface}
          set={setShowHideInterface}
        />
      </section>
    </div>
  );
};
