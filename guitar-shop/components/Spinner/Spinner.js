class Spinner {

    // Создаём метод, который будет скрывать пре-лоадер после успешного рендера страницы
    handleClear() {
        ROOT_SPINNER.innerHTML = '';
    }

    render() {
        const html = `
            <div class = "spinner-container">
                <img src = "./components/Spinner/img/spinner.svg" class = "spinner__img">
            </div>
        `;

        ROOT_SPINNER.innerHTML = html;
    }
}

const spinnerPage = new Spinner();
