/* Пишем классами, т.к всё подключается в глобальную область видимости, у каждого компонента будут внутренние переменные, которые не должны
быть доступны за пределами компонента */

class Products {

    render() {
        let htmlCatalogue = '';

        // Можно перебирать по элементу и потом обращаться как элемент.id, элемент.name или деструктурировать сразу
        CATALOGUE.forEach(({ id, name, price, img }) => {
            // Генерируем элемент списка/каталога
            htmlCatalogue += `
                <li>
                    <span>${name}</span>
                    <img src="${img}">
                    <span>${price}</span>
                    <button>Добавить в корзину</button>
                </li>
            `;
        });

        // Собираем все элементы в список
        const html = `
            <ul>
                ${htmlCatalogue};
            </ul>
        `;

        // Рендерим каталог
        ROOT_PRODUCTS.innerHTML = html;
    }
}

const productsPage = new Products();
productsPage.render();