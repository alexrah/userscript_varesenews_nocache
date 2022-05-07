// ==UserScript==
// @name         Append nocache[rand] to Varesenews URL
// @namespace    http://tampermonkey.net/
// @version      3.9
// @description
// @author       Alessandro Stoppato
// @match        https://*.varesenews.it/*
// @exclude      https://*.varesenews.it/wp-admin/*
// @exclude      https://*.varesenews.it/menabo/*
// @exclude      https://*.varesenews.it/photogallery_new/*
//
// @match        https://*.malpensanews.it/*
// @exclude      https://*.malpensanews.it/wp-admin/*
// @exclude      https://*.malpensanews.it/menabo/*
// @exclude      https://*.malpensanews.it/photogallery_new/*
//
// @match        https://*.saronnonews.it/*
// @exclude      https://*.saronnonews.it/wp-admin/*
// @exclude      https://*.saronnonews.it/menabo/*
// @exclude      https://*.saronnonews.it/photogallery_new/*
//
// @match        https://*.verbanonews.it/*
// @exclude      https://*.verbanonews.it/wp-admin/*
// @exclude      https://*.verbanonews.it/menabo/*
// @exclude      https://*.verbanonews.it/photogallery_new/*
//
// @match        https://*.legnanonews.com/*
// @exclude      https://*.legnanonews.com/wp-admin/*
// @exclude      https://*.legnanonews.com/menabo/*
// @exclude      https://*.legnanonews.com/photogallery_new/*
//
// @icon         https://www.google.com/s2/favicons?domain=varesenews.it
// @grant        none
// @noframes
// @run-at document-start
// @downloadURL https://raw.githubusercontent.com/alexrah/userscript_varesenews_nocache/master/main.js
// @updateURL https://raw.githubusercontent.com/alexrah/userscript_varesenews_nocache/master/main.js
// ==/UserScript==

(function() {
    'use strict';

    if( (performance.navigation.type !== performance.navigation.TYPE_RELOAD) ) return;
 
    console.log('%cUserScript','color: orange',window.location.href);

    window.stop();

    const origLocation = window.location.href
    if( origLocation.match(/nocache/) === null ){
      window.location.href = origLocation + "?nocache" + Math.round(Math.random()*1000);
    } else {
       window.location.href = origLocation.replace(/[0-9]+$/,Math.round(Math.random()*1000));
    }


})();
