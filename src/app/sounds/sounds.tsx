export const playSound = (audioPath: string) => {
  const audio = new Audio(audioPath);
  audio.play();
};
