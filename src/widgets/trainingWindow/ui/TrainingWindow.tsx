import cls from "./trainingWindow.module.scss";

export const TrainingWindow = () => {
  return (
    <div className={cls.trainingWindow}>
      <div className={cls.videoW}>видео</div>
      <div className={cls.resultW}>отображение результата</div>
      <div className={cls.htmlW}>html</div>
      <div className={cls.cssW}>css</div>
      <div className={cls.jsW}>js</div>
    </div>
  );
};
