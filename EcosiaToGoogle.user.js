// ==UserScript==
// @name         Ecosia to google.
// @namespace    https://github.com/geisterfurz007
// @version      1.1
// @description  Link to google with the same search from Ecosia.
// @author       geisterfurz007
// @match        https://www.ecosia.org/search*
// @match        https://ecosia.org/search*
// @grant        none
// ==/UserScript==
'use strict';

const injectButton = () => {
    const elementId = "ecosia-to-google-debug";
    const injectedButton = document.getElementById(elementId);
    if (injectedButton) return;

    const urlRegex = /https.*?search\?.*?(q=.*)/
    const query = window.location.toString().match(urlRegex)[1];

    const reference = document.querySelector(".main-header__install-cta") || document.querySelector(".personal-counter").parentElement;
    const navBar = reference.parentElement;

    const styleSource = document.querySelector(".personal-counter button");

    const a = document.createElement("a");
    for (const {name, value} of styleSource.attributes) {
        a.setAttribute(name, value);
    }

    a.href = "https://google.com/search?" + query;
    a.innerText = "Link to Google";
    a.id = elementId;

    console.log('Inserting button');
    navBar.insertBefore(a, reference);
};

window.addEventListener('load', function() {
    injectButton();
});

injectButton();
