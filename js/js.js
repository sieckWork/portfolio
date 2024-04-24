'use strict'

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
            const img = createElement('img', [{ name: 'src', value: '/portfolio/img/assets/0' + index + '.png' }]);
            item.addEventListener('click', () => {
                IMG_ID = index;
                slider.style.display = 'flex';
                let img = document.getElementById("slider-img");



                img.style.backgroundImage = 'url(/portfolio/img/assets/0' + index + '.png)';
                img.setAttribute('value', index);

                document.getElementById("portfolio").style.filter = 'brightness(50%)';
                document.getElementById("nav").style.filter = 'brightness(50%)';
                document.getElementById("slogan").style.filter = 'brightness(50%)';

            });
            item.appendChild(img);
            div.appendChild(item);

        }

        return div;
    };

    return {
        init: function (container) {

            let items = fillGallery();
            container.appendChild(items);




        }
    }
})()

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

                fixImgNegative();
            }
            changeImg();

        });

    };

    function changeImg() {

        let img = document.getElementById("slider-img");

        img.style.backgroundImage = 'url(/portfolio/img/assets/0' + IMG + '.png)';

    }

    function fixImg() {
        let img = document.getElementById("slider-img");
        IMG = img.getAttribute('value');
        if (IMG >= MAX_IMG) {
            IMG = 0;
        } else {
            IMG++;
        }

    }

    function fixImgNegative() {
        let img = document.getElementById("slider-img");
        IMG = img.getAttribute('value');
        if (IMG <= MIN_IMG) {
            IMG = 14;
        } else {

            IMG--;
        }

    }

    function closeBtn() {
        let btn = document.getElementById("close-btn");
        btn.addEventListener('click', () => {

            document.getElementById("slider-img").style.display = 'none';
            document.getElementById("portfolio").style.filter = 'brightness(100%)';
            document.getElementById("nav").style.filter = 'brightness(100%)';
            document.getElementById("slogan").style.filter = 'brightness(100%)';


        });
    }

    return {

        init: function (container) {

            nextImage();
            backImage();
            closeBtn();
        }
    }

})()

window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    Slider.init(document.getElementById('slider'));
    Portfolio.init(document.getElementById('portfolio'));




}, false)