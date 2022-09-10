// ==UserScript==
// @name        Quora Login Bypass
// @namespace   https://github.com/
// @match       https://www.quora.com/*
// @grant       none
// @version     1.0
// @author      GlobBruh
// @description Allows you to view multiple Quora pages without logging in or signing up.
// ==/UserScript==

// Whitelisted URL's:
const whitelistURL = [
    "https://www.quora.com/",
    "https://www.quora.com/about*",
    "https://www.quora.com/careers*",
    "https://www.quora.com/press*"
]

var url = window.location.href;
var changeURL = true;
for (let i = 0, constLen = whitelistURL.length ; i < constLen ; i++) {

    if (whitelistURL[i].slice(-1) == "*") {
        if (RegExp(whitelistURL[i]).test(url)) {
            changeURL = false
        }
    } else {
        if (url == whitelistURL[i]) {
            changeURL = false
        }
    }
}
if (changeURL == false || url.indexOf("share=1") != -1) {
    return false
} else {
    if (url.indexOf("?") != -1) {
        url += "&share=1";
    } else {
        url += "?share=1";
    }

    window.location.replace(url)
}
