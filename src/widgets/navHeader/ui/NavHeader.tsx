import { useTranslation } from "react-i18next";
import cls from "./navHeader.module.scss";

export const NavHeader = () => {
  const { t } = useTranslation("navHeader");
  return (
    <nav className={cls.navHeader}>
      <a href="/about">{t("about")}</a>
      <a href="">{t("partners")}</a>
    </nav>
  );
};
