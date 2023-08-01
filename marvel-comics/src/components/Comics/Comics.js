import { API_URL, URL_COMICS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';
import { ROOT_INDEX, ROOT_MODAL } from '../../constants/root';

// Можно целеком импортировать файл CSS
import './Comics.css'

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
                // Т.к к нам отдельно приходят путь и расширение, нужно корректно сформировать ссылку
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                // Комиксы, в url которых есть image_not_available, не имеют обложки

                // Теперь формируем содержание карточек
                hmtlContent += `
                <li class="comics__item">
                    <span class="comics__name">${title}</span>
                    <img class="comics__img" src="${imgSrc}">
                </li>
            `;
            }
        });

        // Т.к ранее мы формировали только сами карточки, теперь их нужно организовать в общий список
        const htmlWrapper = `
            <ul class="comics__containter">
                ${hmtlContent}
            </ul>
        `;

        // Остаётся добавить всё в ROOT элемент на странице
        ROOT_INDEX.innerHTML = htmlWrapper;
    }

}

export default new Comics();