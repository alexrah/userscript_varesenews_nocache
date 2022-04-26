// ==UserScript==
// @name         Append nocache[rand] to Varesenews URL
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description
// @author       Alessandro Stoppato
// @match        https://*.varesenews.it/*
// @exclude      https://*.varesenews.it/wp-admin/*
// @exclude      https://*.varesenews.it/menabo/*
// @exclude      https://*.varesenews.it/photogallery_new/*
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
