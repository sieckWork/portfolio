'use strict'

function createElement(tagName, attributes) {
    const element = document.createElement(tagName)

    for (let i = 0; i < attributes.length; i++) {
        element.setAttribute(attributes[i].name, attributes[i].value)
    }

    return element
}

const Footer = (function () {



    function createPage(container) {

        

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

    console.log('Footer');
    Footer.init(document.getElementById('footer'));

}, false)