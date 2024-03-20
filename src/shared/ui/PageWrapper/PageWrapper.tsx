import cls from "./pageWrapper.module.scss";
import { ReactNode } from "react";
import { PersonalArea } from "../../../widgets/personalArea/ui/PersonalArea";
import { MiniNavBar } from "../../../widgets/miniNavBar/ui/MiniNavBar";
import { BtnShowHideInterface } from "../../../widgets/btnShowHideInterface/ui/btnShowHideInterface";
import { BoxSettings } from "../../../widgets/boxSettings/ui/BoxSettings";

export const PageWrapper = ({ children }: { children: ReactNode }) => {
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
      <section className={cls.sectionBoxSettings}>
        <BoxSettings />
      </section>
      <section className={cls.sectionBtnShowHideInterface}>
        <BtnShowHideInterface />
      </section>
    </div>
  );
};
