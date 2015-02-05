/* 
 * Created & Collected by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 */

/* 
 * It is a big pain in the a$$ to work with IE 
 * (our beloved "Internet Explorer").
 * 
 * This one is for the sake of life & countless sleepless hours 
 * of the Developers.
 * 
 * [Kindly update this script, whenever they change the version with code from 
 * Open Source world & forget to modify the the signature]
 * 
 * The source codes are compiled from 
 * http://stackoverflow.com/questions/19999388/jquery-check-if-user-is-using-ie
 */

// v 1.0
//function msieversion() {
//    try {
//        var ua = window.navigator.userAgent;
//        var msie = ua.indexOf("MSIE ");
//        if (msie > -1) {      // If Internet Explorer, return version number
//            //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
//            return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
//        }
//        else {                // If another browser, return 0
//            //alert('otherbrowser');
//            return 0;
//        }
//    }
//    catch (e) {
//        return false;
//    }
//}

// v 2.0 IE 11 support
//function msieversion() {
//    try {
//        var ua = window.navigator.userAgent;
//        var msie = ua.indexOf("MSIE ");
//        if (msie > -1) {    // IE 10 or older
//            //alert(parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10));
//            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
//        }
//        else if (!!ua.match(/Trident.*rv\:11\./)) {   // IE 11
//            var rv = ua.indexOf('rv:');
//            //alert(parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10));
//            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
//        }
//        else {              // If another browser, return 0
//            // alert('otherbrowser');
//            return 0;
//        }
//    }
//    catch (e) {
//        return false;
//    }
//}

// v 3.0 IE 12 support
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

