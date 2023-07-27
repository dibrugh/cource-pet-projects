// Чтобы не было ошибки при работе с асинхронными функциями в Parcel/Webpack
// import 'regenerator-runtime/runtime'

// Импортируем axios из модулей
import axios from 'axios';

const API_KEY = 'a5837db97d72016c81a7a776f4240db9';
const url = 'https://gateway.marvel.com/v1/public/comics';

// Отправит запрос на сервер и вернёт promise; Второй аргумент axios принимает объект параметров
// Можно получать данные так, но эффективнее будет использовать класс, поэтому оставляю этот вариант закомментированным
// axios.get(url, {
//     params: {
//         apikey: API_KEY
//     }
// })
//     .then(result => console.log(result.data.data.results))
//     .catch(error => console.log(error.message))

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

// Создаю экземпляр класса
const getDataApi = new GetDataApi();

// Если не обработать промис (data.then(result => ...)/не обернуть в асинхронную функцию, то в data придёт Promise {<pending>}

(async () => {
    const data = await getDataApi.getData(url);
    // В классе прописали выбрасывание false при ошибке - на основании этого можно обработать условие отрисовки
    // if (data) {
        
    // } else {
        
    // }
})()