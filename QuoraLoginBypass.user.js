// ==UserScript==
// @name        Quora Login/Signup Prompt Bypass
// @description Allows you to view multiple Quora pages without logging in or signing up.
// @version     1.1
// @match       https://www.quora.com/*
// @namespace   https://github.com/
// @grant       none
// @downloadURL https://github.com/glob-bruh/Quora-Login-Bypass-Userscript/raw/main/QuoraLoginBypass.user.js
// @updateURL   https://github.com/glob-bruh/Quora-Login-Bypass-Userscript/raw/main/QuoraLoginBypass.user.js
// @author      https://github.com/glob-bruh/Quora-Login-Bypass-Userscript/graphs/contributors
// @homepage    https://github.com/glob-bruh/Quora-Login-Bypass-Userscript
// @supportURL  https://github.com/glob-bruh/Quora-Login-Bypass-Userscript/issues
// @run-at      document-start
// @icon        logo.png
// ==/UserScript==

// Whitelisted URL's:
const whitelistURL = [
    "https://www.quora.com/",
    "https://www.quora.com/about/*",
    "https://www.quora.com/careers/*",
    "https://www.quora.com/press/*",
    "https://www.quora.com/profile/*"
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
