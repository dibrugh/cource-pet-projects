import { ROOT_INDEX } from '../../constants/root';
import classes from './Error.module.css';

class Error {

    render() {
        const htmlWrapper = `
            <div class = "${classes.error__containter}">
                <span>
                    <p class = "${classes.error__alert}">Произошла ошибка</p>
                    <p class = "${classes.error__alert}">Попробуйте зайти позже</p>
                </span>
            </div>
        `;

        ROOT_INDEX.innerHTML = htmlWrapper;
    }
}

export default new Error();