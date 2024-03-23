import cls from "./registration.module.scss";

export const Registration = () => {
  return (
    <div className={cls.registration}>
      <div className={cls.registrationContent}>
        <h3>login</h3>

        <div className={cls.inputBox}>
          <span>E</span>
          <input type="text" required />
          <label>Email</label>
        </div>

        <div className={cls.inputBox}>
          <span>P</span>
          <input type="password" required />
          <label>Password</label>
        </div>

        <div>чекбокс | забыл пароль</div>
        <button>вход</button>
        <span>зарегистрироваться</span>
      </div>
    </div>
  );
};
