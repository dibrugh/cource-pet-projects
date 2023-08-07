// Каждый компонент представляет class, поэтому название директории и файлов также с заглавной буквы.

import Comics from '../Comics/Comics';
// Можно целеком импортировать файл CSS
import './App.css'


class App {
    // Переношу функцию из index.js в метод render
    async render() {
        // Дожидаемся выполнения запроса 
        await Comics.render();
    }

}

// По умолчанию экспортируем экземпляр класса
export default new App();