class Shopping {
    // Создаём метод, который будет очищать узел Shopping(т.е закрывать корзину)
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {

        // Для отрисовки элементов в корзине можем взять алгоритм отрисовки из Products.js и убрать картинки
        const productsStore = localStorageUtil.getProducts()
        let htmlCatalogue = '';
        let sumCatalogue = 0;

        CATALOGUE.forEach(({ id, name, price }) => {
            // Нужны только товары из LS
            if (productsStore.indexOf(id) !== -1) {
                // Оборажение будет в виде таблицы, поэтому создаём элементы, которые поместим внутрь <table>
                htmlCatalogue += `
                    <tr>
                        <td class = "shopping-element__name">🎸 ${name}</td>
                        <td class = "shopping-price">${price.toLocaleString()} USD</td>
                    </tr>
                `;
                sumCatalogue += price;
            }

        });

        const html = `
            <div class = "shopping-container">
                <div class = "shopping__close" onclick = "shoppingPage.handleClear()">
                </div>
                <table>
                    ${htmlCatalogue}
                    <tr>
                        <td class = "shopping-element__name">💰 Сумма:</td>
                        <td class = "shopping-price">${sumCatalogue.toLocaleString()} USD</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();

// Напрямую не вызываем компонент Shopping, т.к хотим вызывать его при клике на корзину