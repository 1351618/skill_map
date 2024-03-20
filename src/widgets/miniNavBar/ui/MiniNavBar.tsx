// mini nav bar

import { useTranslation } from "react-i18next";
import cls from "./miniNavBar.module.scss";

export const MiniNavBar = () => {
  const { t } = useTranslation("navHeader");
  return (
    <nav className={cls.miniNavBar}>
      <a href="/about">{t("about")}</a>
      <a href="">{t("partners")}</a>
    </nav>
  );
};
