import { useEffect } from 'react';

export const KeyHandler = () => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Проверяем, нажата ли комбинация клавиш Ctrl + Shift + A
      if (event.ctrlKey && event.shiftKey && event.key === 'A') {
        console.log('Комбинация клавиш Ctrl + Shift + A нажата');
      }
      // Проверяем, нажата ли комбинация клавиш Ctrl + Shift + S
      if (event.ctrlKey && event.shiftKey && event.key === 'F') {
        console.log('Комбинация клавиш Ctrl + Shift + F нажата');
      }
    };

    // Добавляем слушатель события keydown
    window.addEventListener('keydown', handleKeyDown);

    // Убираем слушатель события keydown при размонтировании компонента
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Пустой массив зависимостей означает, что эффект будет запускаться только один раз после монтирования компонента

  return <></>;
};
