// Каждый компонент представляет class, поэтому название директории и файлов также с заглавной буквы.


import { API_URL, URL_COMICS } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';

// Можно целеком импортировать файл CSS
import './App.css'


class App {
    // Переношу функцию из index.js в метод render
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);
        // В классе прописали выбрасывание false при ошибке - на основании этого можно обработать условие отрисовки
        // if (data) {

        // } else {

        // }
        console.log(data);
    }

}

// По умолчанию экспортируем экземпляр класса
export default new App();