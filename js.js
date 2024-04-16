'use strict'
// module Memoire

function createElement(tagName, attributes) {
    const element = document.createElement(tagName)

    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i].name, attributes[i].value)
    }

    return element
}

const Portfolio = (function () {

    let IMG_ID = null;



    function fillGallery(container) {

        let div = createElement('div', [{ name: 'class', value: 'gallery' }]);
        let slider = document.getElementById('slider-img');


        for (let index = 0; index < 15; index++) {

            const item = createElement('div', [{ name: 'name', value: index }, { name: 'class', value: 'item' }]);
            // const img = createElement('img', [{ name: 'src', value: 'img/0'+index+'.png' },{name:'class',value:'item'}]);
            const img = createElement('img', [{ name: 'src', value: 'img/0' + index + '.png' }]);
            item.addEventListener('click', () => {
                IMG_ID = index;
                slider.style.display = 'flex';
                let img = document.getElementById("slider-img");



                img.style.backgroundImage = 'url(img/0' + index + '.png)';
                img.setAttribute('value', index);

            });
            item.appendChild(img);
            div.appendChild(item);

        }

        return div;
    };

    return {
        init: function (container) {
            console.log("On Porfolio");

            let items = fillGallery();
            container.appendChild(items);
            console.log("Slider Portfolio ID");




        }
    }
})()

'use strict'
// module Memoire
const Slider = (function () {

    let IMG = null;
    let MAX_IMG = 14;
    let MIN_IMG = 0;

    function nextImage() {

        let next = document.getElementById("next");


        next.addEventListener("click", function () {


            if (IMG != null) {



                if (IMG >= MAX_IMG) {
                    IMG = 0;
                } else {
                    IMG++;
                }

            } else {

                let img = document.getElementById("slider-img");
                IMG = img.getAttribute('value');
                console.log(IMG);

                fixImg();


            }

            changeImg();

        });



    };

    function backImage() {

        let next = document.getElementById("back");

        next.addEventListener("click", function () {
            if (IMG != null) {
                if (IMG <= MIN_IMG) {
                    IMG = 14;
                } else {

                    IMG--;
                }
            } else {

                let img = document.getElementById("slider-img");
                IMG = img.getAttribute('value');
                console.log(IMG);

                fixImgNegative();
            }
            changeImg();

        });

    };

    function changeImg() {

        let img = document.getElementById("slider-img");
        console.log(img.getAttribute('value'));

        img.style.backgroundImage = 'url(img/0' + IMG + '.png)';

    }

    function fixImg() {
        let img = document.getElementById("slider-img");
        IMG = img.getAttribute('value');
        if (IMG >= MAX_IMG) {
            IMG = 0;
        } else {
            IMG++;
        }
        console.log("fix:" + IMG);

    }

    function fixImgNegative() {
        let img = document.getElementById("slider-img");
        IMG = img.getAttribute('value');
        if (IMG <= MIN_IMG) {
            IMG = 14;
        } else {

            IMG--;
        }
        console.log("fix:" + IMG);

    }

    return {

        init: function (container) {

            nextImage();
            backImage();


        }
    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    Slider.init(document.getElementById('slider'));
    Portfolio.init(document.getElementById('portfolio'));




}, false)