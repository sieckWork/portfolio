'use strict'

function createElement(tagName, attributes) {
    const element = document.createElement(tagName)

    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i].name, attributes[i].value)
    }

    return element
}

const Gallery = (function () {


    let idImage = 0;


    function createPage(container) {


        const div = createElement('div', [{ name: 'class', value: 'gallery' }]);

        const slider = createElement('div', [{ name: 'id', value: 'slider' }]);

        let sliderContainer = createElement('div', [{ name: 'id', value: 'slider-container' }, { name: 'class', value: 'slider-container' }]);

        const imgSliderContainer = createElement('div', [{ name: 'id', value: 'img-slider-container' }, { name: 'class', value: 'img-slider-container' }]);
        const imgSlider = createElement('img', [
            { name: 'src', value: '/img/0' + idImage + '.png' },
            { name: 'alt', value: 'img Slider' },
            { name: 'id', value: 'imgSlider' },
            { name: 'class', value: 'imgSlider' }]);

        const btnClose = createElement('div', [{ name: 'id', value: 'close-btn' }, { name: 'class', value: 'close-btn' }]);
        const imgClose = createElement('img', [{ name: 'src', value: '/img/close.png' }, { name: 'alt', value: 'img close' }]);

        const backContainer = createElement('div', [{ name: 'id', value: 'back' }, { name: 'class', value: 'back-container arrow-container' }]);
        const imgBack = createElement('img', [{ name: 'src', value: '/img/left-arrow.png' }]);

        const nextContainer = createElement('div', [{ name: 'id', value: 'next' }, { name: 'class', value: 'next-container arrow-container' }]);
        const imgNext = createElement('img', [{ name: 'src', value: '/img/right-arrow.png' }]);


        for (let index = 0; index < 15; index++) {


            const item = createElement('div', [{ name: 'name', value: index }, { name: 'class', value: 'item' }]);
            const img = createElement('img', [{ name: 'src', value: '/img/0' + index + '.png' }]);

            item.addEventListener('click', () => {
                idImage = index;
                sliderContainer.style.display = 'flex';
                imgSlider.src = '/img/0' + index + '.png';

            });

            item.appendChild(img);
            div.appendChild(item);
        }

        nextContainer.addEventListener('click', () => {
            imgSlider.src = '/img/0' + (idImage >= 14 ? idImage = 0 : ++idImage) + '.png';
        });

        backContainer.addEventListener('click', () => {
            imgSlider.src = '/img/0' + (idImage <= 0 ? idImage = 14 : --idImage) + '.png';
        });

        container.appendChild(div);

        btnClose.appendChild(imgClose);

        btnClose.addEventListener('click', () => {

            sliderContainer.style.display = 'none';

        });

        backContainer.appendChild(imgBack);
        imgSliderContainer.appendChild(imgSlider);

        nextContainer.appendChild(imgNext);

        sliderContainer.appendChild(btnClose);
        sliderContainer.appendChild(backContainer);
        sliderContainer.appendChild(imgSliderContainer);
        sliderContainer.appendChild(nextContainer);

        slider.appendChild(sliderContainer);

        container.appendChild(slider);


        console.log(container);
        return container;
    }


    return {

        init: function (container) {

            createPage(container);
        }
    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    console.log("Gallery JS");
    Gallery.init(document.getElementById('gallery'));

}, false)