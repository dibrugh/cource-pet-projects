// Импортируем axios из модулей
import axios from 'axios';
/* Axios отправит запрос на сервер и вернёт promise; Второй аргумент axios принимает объект параметров
Можно получать данные так, но эффективнее будет использовать класс, поэтому оставляю этот вариант закомментированным
axios.get(url, {
    params: {
        apikey: API_KEY
    }
})
    .then(result => console.log(result.data.data.results))
    .catch(error => console.log(error.message)) */

import { API_KEY } from '../constants/api';

// Делаем универсальный класс, который отправляет запрос к серверу и возвращает promise, с которым можно работать
// (т.е promise содержит .then(result => console.log(result.data.data.results)))

class GetDataApi {
    async getData(url) {
        // Т.к в асинхронной функции не можем обработать ошибки через .then, оборачиваем в trycatch
        try {
            // Чтобы функция дождалась выполнения axios указываю await, т.е сначала дожидаемся выполнения запроса, а потом помещаем в константу
            const response = await axios.get(url, {
                // Параметры ниже указываются не для axios, а для API, к которому мы обращаемся
                params: {
                    apikey: API_KEY,
                    // Указываем лимит получаемых записей
                    limit: 100
                }
            });

            return response.data.data.results;

        } catch (error) {
            console.log(error.message)
            return false;
        }
    }
}

// Создаю экземпляр класса и экспортирую
export const getDataApi = new GetDataApi();