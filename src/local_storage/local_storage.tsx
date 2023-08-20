// local_storage.tsx

// Сохранение данных в локальное хранилище
export function saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
}

// Получение данных из локального хранилища
export function getData(key: string): string | null {
    return localStorage.getItem(key);
}
