import { API_URL, URL_COMICS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE, URL_CHARACTERS } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX, ROOT_MODAL } from '../../constants/root';

// Можно целеком импортировать файл CSS
import classes from './Comics.module.css'
// Т.к используются postcss модули, импорт будет возвращать объект с ключами в виде классов и значений = класс+хэш
console.log(classes)

class Comics {

    // Тут мы должны запрашивать данные для отрисовки самих комиксов
    async render() {
        const data = await getDataApi.getData(API_URL + URL_COMICS);

        let hmtlContent = '';

        // Поля, которые нам нужны id; название комикса = title; изображение = thumbnail => extension, path;

        // Чтобы каждый раз не проходиться по element.id, element.title, element.thumbnail, можно сделать деструктуризацию
        // Для thumbnail у нас деструктуризация внутри деструктуризации
        data.forEach(({ id, title, thumbnail: { path, extension } }) => {


            if (!path.includes(IMG_NOT_AVAILABLE)) {
                // Мы хотим формировать url, на который нужно отправить запрос, чтобы получить героев комиксов для отрисовки в модалке
                // Должно получиться в сумме v1/public/comics/{comicId}/characters
                const uri = API_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS;

                // Т.к к нам отдельно приходят путь и расширение, нужно корректно сформировать ссылку
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                // Комиксы, в url которых есть image_not_available, не имеют обложки

                // Теперь формируем содержание карточек
                // Чтобы можно было передать uri в другой метод добавляем кастомный аттрибут ("data-") для элемента
                hmtlContent += `
                <li class="comics__item ${classes.comics__item}" data-uri="${uri}">
                    <span class="${classes.comics__name}">${title}</span>
                    <img class="img-contain ${classes.comics__img}" src="${imgSrc}">
                </li>
            `;
            }
        });

        // Т.к ранее мы формировали только сами карточки, теперь их нужно организовать в общий список
        const htmlWrapper = `
            <ul class="${classes.comics__containter}">
                ${hmtlContent}
            </ul>
        `;

        // Остаётся добавить всё в ROOT элемент на странице
        ROOT_INDEX.innerHTML = htmlWrapper;
    }
    // Соответственно, чтобы это работало, нужно вызвать метод в index.js
    eventListener() {
        // Т.к мы начали использовать модули, нужно отдельно добавить элементу класс .comics__item, дабы код ниже прододжал работать
        document.querySelectorAll('.comics__item').forEach(element => {
            // Получаем uri, который мы передавали в элемент в предыдущем методе render()
            const uri = element.getAttribute('data-uri');

            element.addEventListener('click', () => {

                console.log(uri);
            });
        });
    }
}

export default new Comics();