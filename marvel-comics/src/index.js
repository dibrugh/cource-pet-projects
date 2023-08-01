// Чтобы не было ошибки при работе с асинхронными функциями в Parcel/Webpack
// import 'regenerator-runtime/runtime'

import App from './components/App';
import Comics from './components/Comics/Comics';

// Если не обработать промис (.then(result => ...)/не обернуть в асинхронную функцию, то в data придёт Promise {<pending>}
(async () => {
    // Содержимое перенёс в app.js, и заменил на App.render();
    await App.render();
    // Чтобы использовать eventListener, нужно подключить сюда метод класса Comics
    Comics.eventListener();
})();