// Чтобы не было ошибки при работе с асинхронными функциями в Parcel/Webpack
// import 'regenerator-runtime/runtime'

import { API_URL, URL_COMICS } from './constants/api';
import { getDataApi } from './utils/getDataApi';

// Если не обработать промис (.then(result => ...)/не обернуть в асинхронную функцию, то в data придёт Promise {<pending>}
(async () => {
    const data = await getDataApi.getData(API_URL + URL_COMICS);
    // В классе прописали выбрасывание false при ошибке - на основании этого можно обработать условие отрисовки
    // if (data) {
        
    // } else {
        
    // }
    console.log(data);
})()