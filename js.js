'use strict'
// module Memoire
const Portfolio = (function () {


    function createElement(tagName, attributes) {
        const element = document.createElement(tagName)

        for (let i = 0; i < attributes.length; i++) {
            element.setAttribute(attributes[i].name, attributes[i].value)
        }

        return element
    }

    function fillGallery(container) {

        let div = createElement('div', [{ name: 'class', value: 'gallery' }]);

        for (let index = 0; index < 15; index++) {
            
            const a = createElement('a', [{name:'href',value:'www.gogle.com'},{name:'taget',value:'_blank'},{name:'class',value:'item'}]);
            // const img = createElement('img', [{ name: 'src', value: 'img/0'+index+'.png' },{name:'class',value:'item'}]);
               const img = createElement('img', [{ name: 'src', value: 'img/0'+index+'.png' }]);
    
            a.appendChild(img);
            div.appendChild(a);
            
        }
        
        return div;
    };

    return {
        init: function (container) {
            console.log("On");
            let items = fillGallery();
            container.appendChild(items);

        }
    }
})()


window.addEventListener('DOMContentLoaded', function loaded(event) {
    window.removeEventListener('DOMContentLoaded', loaded, false)

    // instance d'object Module memoire
    Portfolio.init(document.getElementById('portfolio'));

}, false)