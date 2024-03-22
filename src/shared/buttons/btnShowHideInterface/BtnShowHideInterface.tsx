import cls from "./btnShowHideInterface.module.scss";

interface BtnShowHideInterfaceProps {
  set: (value: boolean) => void;
  is: boolean;
}

export const BtnShowHideInterface = ({
  set,
  is,
}: BtnShowHideInterfaceProps) => {
  return (
    <button
      className={cls.btnShowHideInterface}
      onClick={() => {
        set(!is);
      }}
    >
      X
    </button>
  );
};
