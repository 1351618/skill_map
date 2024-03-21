// mini nav bar

import { useTranslation } from "react-i18next";
import cls from "./miniNavBar.module.scss";
import { CursorTracker } from "../../../shared/сursorTracker/CursorTracker";

export const MiniNavBar = () => {
  const { t } = useTranslation("navHeader");
  return (
    <nav className={cls.miniNavBar}>
      <CursorTracker />
      <a href="/about">{t("about")}</a>
      <a href="">{t("partners")}</a>
    </nav>
  );
};
