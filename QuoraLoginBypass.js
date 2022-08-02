// ==UserScript==
// @name        Quora Login Bypass
// @namespace   https://www.quora.com/
// @match       https://www.quora.com/*
// @grant       none
// @version     1.0
// @author      GlobBruh
// @description Allows you to view multiple Quora pages without logging in. quora.com/test -> quora.com/test?share=1
// ==/UserScript==

var url = window.location.href;
if (url.indexOf("?share=1") == -1 && url != "https://www.quora.com/") {
    url += "?share=1";
    window.location.replace(url)
}