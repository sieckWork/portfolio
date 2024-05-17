'use strict'

const Spinner = (function () {

    function hideSpinner() {

        const submit = document.getElementById('sub_spinner');
        const spinner = document.getElementById('spinner');

        submit.addEventListener('click', function () {
            spinner.style.display = 'block'

            window.setTimeout(() => {
                spinner.style.display = 'none'
            }, 5000);

        });
    }


    return {

        init: function () {
            hideSpinner();
        }
    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    Spinner.init();

}, false)