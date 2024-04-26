'use strict'

function createElement(tagName, attributes) {
    const element = document.createElement(tagName)

    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i].name, attributes[i].value)
    }

    return element
}

const Gallery = (function () {


    let IMG_ID = null;


    function createPage(container) {


        const div = createElement('div', [{ name: 'class', value: 'gallery' }]);

        const sliderContainer = createElement('div', [{ name: 'id', value: 'slider' }]);

        let sliderImg = createElement('div', [{ name: 'id', value: 'slider-img' }, { name: 'class', value: 'slider-container' }]);
        sliderImg.style.backgroundImage = "url('img/00.png')";

        const btnClose = createElement('div', [{ name: 'id', value: 'close-btn' }, { name: 'class', value: 'close-btn' }]);
        const imgClose = createElement('img', [{ name: 'src', value: '/img/close.png' }, { name: 'alt', value: 'img close' }]);

        const backContainer = createElement('div', [{ name: 'id', value: 'back' }, { name: 'class', value: 'arrow' }]);
        const imgBack = createElement('img', [{ name: 'src', value: '/img/left-arrow.png' }]);

        const nextContainer = createElement('div', [{ name: 'id', value: 'next' }, { name: 'class', value: 'arrow' }]);
        const imgNext = createElement('img', [{ name: 'src', value: '/img/right-arrow.png' }]);


        for (let index = 0; index < 15; index++) {


            const item = createElement('div', [{ name: 'name', value: index }, { name: 'class', value: 'item' }]);
            const img = createElement('img', [{ name: 'src', value: '/img/0' + index + '.png' }]);

            item.addEventListener('click', () => {

                console.log(index);
                
            });

            item.appendChild(img);
            div.appendChild(item);
        }

        container.appendChild(div);

        btnClose.appendChild(imgClose);


        backContainer.appendChild(imgBack);
        nextContainer.appendChild(imgNext);

        sliderImg.appendChild(btnClose);
        sliderImg.appendChild(backContainer);
        sliderImg.appendChild(nextContainer);

        sliderContainer.appendChild(sliderImg);

        container.appendChild(sliderContainer);


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