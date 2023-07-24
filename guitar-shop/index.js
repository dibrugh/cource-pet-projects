/* Создаём корневой JS файл, который будет точкой входа на рендер */
function render() {

    const productsStore = localStorageUtil.getProducts();


    headerPage.render(productsStore.length);
    productsPage.render();
}

// Добавил компонент Spinner (pre-loader)
spinnerPage.render();

//Перенёс данные из константы catalogue.js в catalogue.json, имитируя получение этих данных с сервера
//Отредактировал файл в соответствии с синтаксисом JSON (двойные кавычки, последний ключ без запятой, нет точки запятой в конце и т.п)
//Комментарий перенёс сюда, т.к в json нельзя оставлять комменты

//Меняю переменную CATALOGUE, т.к теперь она будет принимать данные с json
let CATALOGUE = [];




// Создаю запрос на псевдо-сервер
// Также можно получать данные с реального сервера https://api.jsonserve.com/DSTA93
fetch('server/catalogue.json')
    // Обрабатываю промис
    .then(res => res.json())
    .then(body => {
        CATALOGUE = body;
        // Пока ждём ответ от сервера крутим спиннер :)
        spinnerPage.handleClear();
        // Чтобы рендер шёл не с пустым массивом, объявленным выше, а с уже обработанным ответом, помещаю рендер ниже
        render();
    })
    // Обрабатываю ошибки
    .catch(error => {
        // Т.к ошибка это уже результат, убираю pre-loader
        spinnerPage.handleClear();
        // Вызываю метод инстанса Error, т.е обрабатываю ошибку
        errorPage.render();
    });


// Чтобы решить проблему с CORS, нужно развернуть сервер, используя nmp http-server
// Т.к теперь данные идут с сервера, они могут кэшироваться, поэтому нужно будет принудительно обновлять страницу без учёта кэша (ctrl+shift+r)

