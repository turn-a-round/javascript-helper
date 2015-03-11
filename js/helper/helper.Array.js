/* 
 * Created by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 */
(function () {
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

    // discussion at http://stackoverflow.com/questions/10359907/array-sum-and-average
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
}());

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

