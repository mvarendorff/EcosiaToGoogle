// ==UserScript==
// @name         Ecosia to google.
// @namespace    https://github.com/geisterfurz007
// @version      1.4
// @description  Link to google with the same search from Ecosia.
// @author       geisterfurz007
// @match        https://www.ecosia.org/search*
// @match        https://ecosia.org/search*
// @grant        none
// ==/UserScript==
'use strict';

const injectButton = () => {
    const elementId = "ecosia-to-google";
    const injectedButton = document.getElementById(elementId);
    if (injectedButton) return;

    const urlRegex = /https.*?search\?.*?(q=.*)/
    const query = window.location.toString().match(urlRegex)[1];

    const reference = document.querySelector(".main-header__space") || document.querySelector(".main-header__install-cta") || document.querySelector(".personal-counter").parentElement;
    const navBar = reference.parentElement;

    const injectedStyle = `
    #${elementId} {
      width: unset;
      border: var(--color-brand-primary) solid 1px;
      border-radius: 100px;
      padding: .5rem 1rem;
    }

    #${elementId}:hover {
      background: var(--color-button-background-transparent-hover);
    }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = injectedStyle;
    document.head.appendChild(styleTag);

    const a = document.createElement("a");
    a.href = "https://google.com/search?" + query;
    a.innerText = "Link to Google";
    a.id = elementId;
    a.style.width = "unset";

    console.log('Inserting button', reference);
    setTimeout(() => navBar.insertBefore(a, reference), 300);
};

window.addEventListener('load', function() {
    injectButton();
});

injectButton();
