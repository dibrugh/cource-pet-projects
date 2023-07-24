/* Пишем классами, т.к всё подключается в глобальную область видимости, у каждого компонента будут внутренние переменные, которые не должны
быть доступны за пределами компонента */

class Products {

    constructor() {
        this.classNameActive = 'products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    // Создаём метод, который мы будем вызывать в при клике на кнопки
    // Чтобы понимать на какую кнопку мы нажали/обращаться к конкретной кнопке в обработчике в качестве аргумента будем передавать this
    handleSetLocationStorage(element, id) {
        // При нажатии на кнопку мы хотим корректировать данные в LS, поэтому используем метод класса LocalStorageUtil
        // Вызов метода возвращает объект, поэтому сразу деструктуризируем
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        // Чтобы при добавлении товаров их количество в корзине менялось динамически вешаем обработчик событий/передаём в onclick-функцию
        headerPage.render(products.length);
    }

    render() {
        // Обращаемся к объекту класса, созданного для работы с Local Storage
        const productsStore = localStorageUtil.getProducts();


        let htmlCatalogue = '';

        // Можно перебирать по элементу и потом обращаться как элемент.id, элемент.name или деструктурировать сразу
        CATALOGUE.forEach(({ id, name, price, img }) => {
            // Добавляем переменные для работы с изменением состояния/отображения кнопки при клике
            let activeClass = '';
            let activeText = '';

            // Смотрим, есть ли элемент в LS
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            }
            else {
                // Если элемент в корзине, будем добавлять доп. класс, т.к нужен пробел между классами, добавляем пробел в начало строки
                activeClass = this.classNameActive;
                activeText = this.labelRemove;
            }

            // Генерируем элемент списка/каталога
            htmlCatalogue += `
                <li class = "products-element">
                    <span class = "products-element__name">${name}</span>
                    <img class = "products-element__img" src="${img}">
                    <span class = "products-element__price">💲 ${price.toLocaleString()} USD</span>
                    <button class = "products-element__btn ${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">
                    ${activeText}
                    </button>
                </li>
            `;
        });

        // Собираем все элементы в список
        const html = `
            <ul class = "products-containter">
                ${htmlCatalogue};
            </ul>
        `;

        // Рендерим каталог
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();

/* // Переношу строку ниже в index.js в рамках рефакторинга
productsPage.render(); */