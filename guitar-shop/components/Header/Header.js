class Header {
    // Создаём метод, который будет открывать/отрисовывать корзину
    handlerOpenShoppingPage() {
        shoppingPage.render();
    }

    render(count) {
        const html = `
            <div class = "header-containter">
                <div class = "header-counter" onclick ="headerPage.handlerOpenShoppingPage();">
                🗑️ ${count}
                </div>
            </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();
// Получаем количество товаров в корзине
const productsStore = localStorageUtil.getProducts();

// Т.к мы получаем массив, можем просто смотреть его длинну и передавать её на рендер
headerPage.render(productsStore.length);