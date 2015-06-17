/* 
 * Created & Collected by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 * 
 * License Type: MIT License
 */

// helper.isIE.js
// Check for IE version
// Default string of < IE 10:
//      Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)
// Default string of IE 11:
//      Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko
// Default string of IE 12:
//      Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0 
function msieversion() {
    try {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if (msie > -1) {    // IE 10 or older
            //alert(parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10));
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        else if (!!ua.match(/Trident.*rv\:11\./)) {   // IE 11
            var rv = ua.indexOf('rv:');
            //alert(parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10));
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        else if (!!ua.match(/Windows*Edge\//)) {   // IE 12
            var edge = ua.indexOf('Edge/');
            //alert(parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10));
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        else {              // If another browser, return 0
            // alert('otherbrowser');
            return 0;
        }
    }
    catch (e) {
        return false;
    }
}

// Global variable to detect IE
var isIE = msieversion() ? true : false;

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

(function () {
    // Avoid `console` errors in browsers that lack a console.
    // Thanks to [HTML5 Boilerplate](http://html5boilerplate.com)
    var noop = function () {
    };
    var consoleMethods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var consoleMethodsLength = consoleMethods.length;
    var console = (window.console = window.console || {});

    while (consoleMethodsLength--) {
        // Only stub undefined methods.
        if (!console[consoleMethods[length]]) {
            console[consoleMethods[length]] = noop;
        }
    }

// helper.Array.js
    // Extra Array functions not available by default
    if (typeof Array.prototype.forEach !== 'function') {
        Array.prototype.forEach = function (handler, thisArg) {
            for (var i = (this.length - 1); i >= 0; i--) {
                handler.call(thisArg || this, this[i], i, this);
            }
            return this;
        };
    }

    if (typeof Array.prototype.filter !== 'function') {
        Array.prototype.filter = function (handler, thisArg) {
            var filterArray = [];
            for (var i = (this.length - 1); i >= 0; i--) {
                if (this[i] && handler.call(thisArg || this, this[i], i, this)) { // as depicted in https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
                    filterArray.push(this[i]);
                }
            }
            return filterArray.reverse();
        };
    }

    // Filter the first element of an Array that matches the given check
    if (typeof Array.prototype.filterFirst !== 'function') {
        Array.prototype.filterFirst = function (handler, thisArg) {
            var arrLength = this.length;
            for (var i = 0; i < arrLength; i++) {
                if (this[i] && handler.call(thisArg || this, this[i], i, this)) {
                    return this[i];
                }
            }
            return undefined;
        };
    }

    // Filter the last element of an Array that matches the given check
    if (typeof Array.prototype.filterLast !== 'function') {
        Array.prototype.filterLast = function (handler, thisArg) {
            for (var i = (this.length - 1); i >= 0; i--) {
                if (this[i] && handler.call(thisArg || this, this[i], i, this)) {
                    return this[i];
                }
            }
            return undefined;
        };
    }

    // Apply custom functions on each element of an Array. Caution: alters the original Array
    if (typeof Array.prototype.map !== 'function') {
        Array.prototype.map = function (handler, thisArg) {
            var arrLength = this.length;
            for (var i = arrLength - 1; i >= 0; i--) {
                this[i] = handler.call(thisArg || this, this[i], i, this); // as depicted in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
            }
            return this;
        };
    }

    if (typeof Array.prototype.indexOf !== 'function') {
        Array.prototype.indexOf = function (searchItem) {
            var arrLength = this.length;
            for (var i = 0; i < arrLength; i++) {
                if (this[i] === searchItem)
                    return i;
            }
            return -1;
        };
    }

    if (typeof Array.prototype.lastIndexOf !== 'function') {
        Array.prototype.lastIndexOf = function (searchItem) {
            var arrLength = this.length;
            for (var i = arrLength-1; i >= 0; i--) {
                if (this[i] === searchItem)
                    return i;
            }
            return -1;
        };
    }

    // Case insensitive search
    if (typeof Array.prototype.iIndexOf !== 'function') {
        Array.prototype.iIndexOf = function (searchItem) {
            var arrLength = this.length;
            for (var i = 0; i < arrLength; i++) {
                try {
                    if (this[i].toLowerCase() === searchItem.toLowerCase())
                        return i;
                }
                catch (e) {
                    continue;
                }
            }
            return -1;
        };
    }

    if (typeof Array.prototype.iLastIndexOf !== 'function') {
        Array.prototype.iLastIndexOf = function (searchItem) {
            var arrLength = this.length;
            for (var i = arrLength - 1; i >= 0; i--) {
                try {
                    if (this[i].toLowerCase() === searchItem.toLowerCase())
                        return i;
                }
                catch (e) {
                    continue;
                }
            }
            return -1;
        };
    }

    if (typeof Array.prototype.any !== 'function') {
        Array.prototype.any = function (handler, thisArg) {
            var arrLength = this.length;
            for (var i = arrLength - 1; i >= 0; i--) {
                try {
                    if (handler.call(thisArg || this, this[i], i, this)) {
                        return true;
                    }
                }
                catch (e) {
                    continue;
                }
            }
            return false;
        };
    }

    // Get the unique elements of an Array. Thanks to http://www.shamasis.net/2009/09/fast-algorithm-to-find-unique-items-in-javascript-array/
    if (typeof Array.prototype.uniuqe !== 'function') {
        Array.prototype.uniuqe = function () {
            var arrLength = this.length;
            var obj = {};
            var result = [];
            for (var i = 0; i < arrLength; i++) {
                obj[this[i]] = this[i];
            }
            for(key in obj){
                result.push(obj[key]);
            }
            return result;
        };
    }

    // populate empty/non-initiated/undefined Array elements with supplied defaultValue.
    if (typeof Array.prototype.fillHole !== 'function') {
        Array.prototype.fillHole = function (defaultValue) {
            var arrLength = this.length;
            for (var i = 0; i < arrLength; i++) {
                if(this[i] === undefined){
                    this[i] = defaultValue;
                }
            }
            return this;
        };
    }

    // intended for Numerical arrays. Found at http://www.2ality.com/2012/07/apply-tricks.html
    if (typeof Array.prototype.max !== 'function') {
        Array.prototype.max = function () {
            return Math.max.apply(null, this);
        };
    }

    // inspired by discussion at http://stackoverflow.com/questions/10359907/array-sum-and-average
    if (typeof Array.prototype.sum !== 'function') {
        Array.prototype.sum = function () {
            var sum = 0;
            this.forEach(function (elem){
                sum += isFinite(elem) ? parseFloat(elem) : 0;
            });
            return sum;
        };
    }

    if (typeof Array.prototype.average !== 'function') {
        Array.prototype.average = function () {
            var sum = 0, no = 0;
            this.forEach(function (elem){
                if(isFinite(elem)){
                    sum += parseFloat(elem);
                    no++;
                }
            });
            return sum / no;
        };
    }

    // Useful Array constructor. Found at http://www.2ality.com/2011/07/array-from.html & https://gist.github.com/rwaldron/1074126
    if (typeof Array.from !== 'function') {
        // Unary Array.from()
        Array.from = function( arrayLike ) {
            // return Array.prototype.slice.call(arrayLike);
            return [].slice.call( arrayLike );
        };
    }
    if (typeof Array.of !== 'function') {
        // Variable arity Array.of()
        Array.of = function() {
            // return Array.prototype.slice.call(arguments);
            return [].slice.call( arguments );
        };
    }

// helper.String.js
    // Make a looooooooooooooooooooooooooong string to looooooooo...
    // the "..." endmarking can be specified
    if (typeof String.prototype.shortend !== 'function') {
        String.prototype.shortend = function (length, endmarking) {
            endmarking = endmarking || "...";
            return this.length > length ? this.substr(0, length) + endmarking : this;
        };
    }

    // The type-safe equality checking function
    if (typeof String.prototype.equals !== 'function') {
        String.prototype.equals = function (str, isCaseSensitive) {
            isCaseSensitive = isCaseSensitive || false;
            if (isString(str)) {
                return isCaseSensitive ? (this === str) : (this.toLowerCase() === str.toLowerCase());
            }
            return false;
        };
    }

    // Change "My name is hyper-active/03#Gy" to "My_name_is_hyper_active_03_Gy"
    if (typeof String.prototype.makeVarName !== 'function') {
        String.prototype.makeVarName = function () {
            var str = this;
            return $.trim(str).replace(/(\r\n|\n|\r)/gm, "").replace(/[^a-zA-Z0-9]/g, '_');
        };
    }

    if (typeof String.prototype.startsWith !== 'function') {
        // see below for better implementation!
        String.prototype.startsWith = function (str) {
            return this.indexOf(str) === 0;
        };
    }

    if (typeof String.prototype.endsWith !== 'function') {
        // see below for better implementation!
        String.prototype.endsWith = function (str) {
            return this.substring(this.length - str.length).equals(str, true);
        };
    }

    // Get the quoted part of a string
    // e.g. He said, "Don't feel sorry". => Don't feel sorry
    if (typeof String.prototype.getQuote !== 'function') {
        String.prototype.getQuote = function (startIndex, quoteString) {
            var str = this;
            startIndex = startIndex || 0;
            var quotes = quoteString ? [quoteString] : ['"', "'"];
            for (var i = (quotes.length - 1); i >= 0; i--) {
                var quoteStartPosition = str.indexOf(quotes[i], startIndex), quoteEndPosition = -1;
                if (quoteStartPosition >= 0) {
                    quoteEndPosition = str.indexOf(quotes[i], quoteStartPosition + 1);
                    quoteEndPosition = quoteEndPosition >= 0 ? quoteEndPosition : undefined;
                    return str.substring(quoteStartPosition + 1, quoteEndPosition);
                }
            }
            return undefined; // return undefined if not found
        };
    }

    if (typeof String.prototype.isNumber !== 'function') {
        String.prototype.isNumber = function (isSigned) {
            var str;
            if (isSigned && (this.substr(0, 1) === '+' || this.substr(0, 1) === '-')) {
                str = this.substring(1);
            }
            else {
                str = this;
            }
            var len = str.length;
            for (var i = 0; i < len; i++) {
                strToCheck = str.substr(i, 1);
                if (!(parseInt(strToCheck) || parseInt(strToCheck) === 0)) {
                    return false;
                }
            }
            return true;
        };
    }

    if (typeof String.prototype.padLeft !== 'function') {
        String.prototype.padLeft = function (paddingChar, maxWidth) {
            paddingChar = paddingChar || " ";
            maxWidth = maxWidth || this.length;
            var padStr = new Array(maxWidth + 1).join(paddingChar);
            return String(padStr + this).slice(-1 * maxWidth);
        };
    }

    if (typeof String.prototype.padRight !== 'function') {
        String.prototype.padRight = function (paddingChar, maxWidth) {
            paddingChar = paddingChar || " ";
            maxWidth = maxWidth || this.length;
            var padStr = new Array(maxWidth + 1).join(paddingChar);
            return String(this + padStr).slice(0, maxWidth);
        };
    }

    if (typeof String.prototype.isUpperCase !== 'function') {
        String.prototype.isUpperCase = function () {
            return this === this.toUpperCase();
        };
    }

    if (typeof String.prototype.isLowerCase !== 'function') {
        String.prototype.isLowerCase = function () {
            return this === this.toLowerCase();
        };
    }

}());

// Random Id generator of definitive length
var randomCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', // add your unique character to this list to enrich id
        randomTerminatorIds = [],
        defaultRandomIdLength = 5;
function randomId(charlen) {
    charlen = charlen || defaultRandomIdLength;
    var wholeCharset = randomCharset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // default fallback
    return (new Array(charlen)) //(isIE ? new Array(charlen) : Array.apply(0, Array(charlen)))
            .fillHole()
            .map(function () {
                return (function (charset) {
                    return charset.charAt(Math.floor(Math.random() * charset.length));
                }(wholeCharset));
            })
            .join('');
}

function uniqueRandomId(charlen) {
    var uniqueId;
    charlen = charlen || defaultRandomIdLength;
    if (!isArray(randomTerminatorIds[charlen])) {
        randomTerminatorIds[charlen] = [];
    }
    do {
        uniqueId = randomId(charlen);
    } while (randomTerminatorIds[charlen].indexOf(uniqueId) >= 0);
    randomTerminatorIds[charlen].push(uniqueId);
    return uniqueId;
}

