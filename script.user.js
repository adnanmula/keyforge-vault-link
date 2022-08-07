// ==UserScript==
// @name         Keyforge Vault link to DoK
// @author       adnanmula
// @namespace    adnanmula
// @version      0.1
// @description  Adds a link to the dok website in the deck page of the kf vault
// @match        https://www.keyforgegame.com/deck-details/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=keyforgegame.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        none
// ==/UserScript==

waitForKeyElements(".deck-details__main-actions", doStuff);

function doStuff (node) {
    const url = document.querySelector('[rel="canonical"]').getAttribute('href');
    const deckId = url.substring(42, url.lenght);

    let container = document.querySelector('.deck-details__main-actions');

    let buttonWrapper = document.createElement('a');
    buttonWrapper.setAttribute('href', 'https://decksofkeyforge.com/decks/' + deckId);
    buttonWrapper.setAttribute('target', '__blank');

    let button = document.createElement('button');
    button.classList.add('btn-medium-secondary');

    let buttonContent = document.createElement('span');
    buttonContent.innerHTML = 'DoK';

    button.appendChild(buttonContent);
    buttonWrapper.appendChild(button);
    container.appendChild(buttonWrapper);
}
