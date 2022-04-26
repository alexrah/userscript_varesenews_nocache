// ==UserScript==
// @name         Append nocache[rand] to Varesenews URL
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description
// @author       Alessandro Stoppato
// @match        https://sandbox.varesenews.it/*
// @exclude      https://sandbox.varesenews.it/wp-admin/*
// @icon         https://www.google.com/s2/favicons?domain=varesenews.it
// @grant        none
// @noframes
// @run-at document-start
// @downloadURL
// @updateURL https://raw.githubusercontent.com/alexrah/userscript_corriere_paywall_remover/master/main.js
// ==/UserScript==

(function() {
    'use strict';

    const origLocation = window.location.href
    if( origLocation.match(/nocache/) === null ){
      window.location.href = origLocation + "?nocache" + Math.round(Math.random()*1000);
    } 

})();
