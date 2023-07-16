// Создаём класс для работы с Local Storage
class LocalStorageUtil {
    constructor() {
        this.keyName = 'products';
    }

    getProducts() {
        // Получаем товар по ключу
        const productsLocalStorage = localStorage.getItem(this.keyName);
        // Если есть значение в LS - вернётся строка, иначе null. Поэтому нужна проверка.
        if (productsLocalStorage !== null) {
            // Если пришла строка, её нужно распарсить 
            return JSON.parse(productsLocalStorage);
        }
        return [];
    }


    putProducts(id) {
        // Проверяем LS и добавляем новый id
        let products = this.getProducts();

        // Проверяем новый элемент или уже добавленный
        let pushProduct = false;

        // Также нужно проверять на наличие id, чтобы не дублировать элементы по повторному вызову метода, а удалять
        const index = products.indexOf(id);
        // Получаем индекс, если же элемент не найден, вернёт -1
        if (index === -1) {
            products.push(id);
            pushProduct = true;
        } else {
            //Удаляем элемент
            products.splice(index, 1);
        }

        products.push(id);
        // В setItem первый аргумент - куда, второй аргумент - что (принимает только строку).
        localStorage.setItem(this.keyName, JSON.stringify(products));

        // Т.к нужно вернуть pushProduct и массив, лучше возвращать в виде объекта
        return {
            // Если у объекта ключ и значение совпадают (pushProduct: pushProduct), можно написать просто ключ
            pushProduct,
            products,
        }
    }
}

const localStorageUtil = new LocalStorageUtil();