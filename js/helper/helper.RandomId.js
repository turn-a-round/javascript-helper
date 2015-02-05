/* 
 * Created & Collected by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 */
/*** Random Id generator of definitive length ***/
// @require('helper.Array.js')
// @require('helper.isIE.js')
var randomCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', // add your unique character to this list to enrich id
        randomTerminatorIds = [],
        defaultRandomIdLength = 5;
function randomId(charlen) {
    charlen = charlen || defaultRandomIdLength;
    var wholeCharset = randomCharset || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // default fallback
    return (new Array(charlen)) //(isIE ? new Array(charlen) : Array.apply(0, Array(charlen)))
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
    if(!isArray(randomTerminatorIds[charlen])){
        randomTerminatorIds[charlen] = [];
    }
    do {
        uniqueId = randomId(charlen);
    } while (randomTerminatorIds[charlen].indexOf(uniqueId) >= 0);
    randomTerminatorIds[charlen].push(uniqueId);
    return uniqueId;
}


