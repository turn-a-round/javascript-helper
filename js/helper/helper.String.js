/* 
 * Created & Collected by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 */

// String manipulation functions
function isString(str){
    return typeof str === 'string';
}

(function () {
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


