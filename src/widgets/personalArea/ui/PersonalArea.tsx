import { useTranslation } from "react-i18next";
import cls from "./personalArea.module.scss";

export const PersonalArea = () => {
  const { t } = useTranslation("personalArea");
  return (
    <div className={cls.personalArea}>
      <p>{t("enter")}</p>
    </div>
  );
};
