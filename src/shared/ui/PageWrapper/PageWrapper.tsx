import cls from "./pageWrapper.module.scss";
import { ReactNode, useState } from "react";
import { PersonalArea } from "../../../widgets/personalArea/ui/PersonalArea";
import { MiniNavBar } from "../../../widgets/miniNavBar/ui/MiniNavBar";
import { BoxSettings } from "../../../widgets/boxSettings/ui/BoxSettings";
import { Balance } from "../../../widgets/balance/ui/Balance";
import { keyShortSvg, settingsSvg } from "../../../app/images/images";

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
          <img src={keyShortSvg} alt="" />
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
      <button
        className={cls.btnShowHideInterface}
        onClick={() => {
          setShowHideInterface(!isShowHideInterface);
        }}
      >
        X
      </button>
    </div>
  );
};
