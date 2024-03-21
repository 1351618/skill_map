// balance

// import { useTranslation } from "react-i18next";
import cls from "./balance.module.scss";

export const Balance = () => {
  //   const { t } = useTranslation();

  return (
    <div className={cls.balance}>
      {/* {t("Change language")} */}
      <p>8000 </p>
      <span>&nbsp; &#8381;</span>
    </div>
  );
};
