// ==UserScript==
// @name         Keyforge Vault link to DoK
// @namespace    adnanmula
// @version      0.1
// @description  Adds a link to the dok website in the deck page of the kf vault
// @author       You
// @match        https://www.keyforgegame.com/deck-details/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=keyforgegame.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @grant        none
// ==/UserScript==

const url = document.querySelector('[property="og:url"]').getAttribute('content');
const deckId = url.substring(42, url.lenght);

let container = document.querySelector('.page-header__navigation-links');

let buttonWrapper = document.createElement('a');
buttonWrapper.setAttribute('href', 'https://decksofkeyforge.com/decks/' + deckId);
buttonWrapper.setAttribute('target', '__blank');
buttonWrapper.setAttribute('style', 'margin-right: 10px');

let button = document.createElement('button');
button.classList.add('btn-small-secondary');

let buttonContent = document.createElement('span');
buttonContent.innerHTML = 'DoK';

button.appendChild(buttonContent);
buttonWrapper.appendChild(button);
container.prepend(buttonWrapper);
