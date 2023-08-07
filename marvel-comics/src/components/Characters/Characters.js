import { IMG_NOT_AVAILABLE } from '../../constants/api';
import { ROOT_MODAL } from '../../constants/root';
import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { getDataApi } from '../../utils/getDataApi';

import Notification from '../Notification/Notification';

import classes from './Characters.module.css';

/* Подключаю картинку с символом закрытия модалки. Мы не можем просто указать пусть там, где надо, т.к на этапе сборки путь будет уже другой
и будет добавлен хэш */
import imgClose from './img/close-white.svg'

class Characters {
    // Отображение списка персонажей, если данные получены
    renderContent(data) {

        let hmtlContent = '';

        // Нужны name, thumbnail.extension и thumbnail.path
        data.forEach(({ name, thumbnail: { extension, path } }) => {
            if (!path.includes(IMG_NOT_AVAILABLE)) {
            // Путь строим точно так же, как в Comics.js
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

            // Формируем чистые элементы, поэтому <li>
            hmtlContent += `
                <li class = "${classes.characters__item}">
                <img class="img-cover ${classes.characters__img}" src="${imgSrc}">
                    <span class = "${classes.characters__name}">${name}</span>
                </li>
            `;
            };
        });

        // Собираем единый список и добавляем кнопку закрытия (навешиваем onlick и находим по id и чистим содержимое)
        const htmlWrapper = `
            <div class = "${classes.wrapper}">
                <ul class = "${classes.characters__container}">
                    ${hmtlContent}
                </ul>
                <button 
                class = "btn bg-contain ${classes.characters__close}"
                onclick = "modal.innerHTML = ''"
                style = "background-image: url(${imgClose})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    // Render должен принимать URI (url, по которому бы будем делать запрос на получение карточек персонажей)
    // Т.к имеем дело с запросами, оборачиваем всё в async await
    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : Notification.render();
    }
}

export default new Characters();