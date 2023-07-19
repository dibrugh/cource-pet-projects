class Header {

    render(count) {
        const html = `
            <div class = "header-containter">
                <div class = "header-counter">
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