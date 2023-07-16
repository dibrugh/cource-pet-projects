/* Пишем классами, т.к всё подключается в глобальную область видимости, у каждого компонента будут внутренние переменные, которые не должны
быть доступны за пределами компонента */

class Products {

    render() {
        let htmlCatalogue = '';

        // Можно перебирать по элементу и потом обращаться как элемент.id, элемент.name или деструктурировать сразу
        CATALOGUE.forEach(({ id, name, price, img }) => {
            // Генерируем элемент списка/каталога
            htmlCatalogue += `
                <li class = "products-element">
                    <span class = "products-element__name">${name}</span>
                    <img class = "products-element__img" src="${img}">
                    <span class = "products-element__price">💲 ${price.toLocaleString()} USD</span>
                    <button class = "products-element__btn">🗑️ Добавить в корзину</button>
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
productsPage.render();