/* 
 * Created & Collected by Tamal Patra <patra.tamal@gmail.com>.
 * Released for the sake of knowledge for mankind.
 */

(function ($) {
    // handles function on pressing "Enter" key
    $.fn.enterKey = function (handler) {
        return this.on('keypress', function (ev) {
            if (!ev.shiftKey && !ev.ctrlKey && !ev.altKey && ev.keyCode === 13) {
                handler.call(this, ev);
                if (ev.preventDefault) {
                    ev.preventDefault();
                }
                return false;
            }
        });
    };
    $.fn.escapeKey = function (handler) {
        return this.on('keyup', function (ev) {
            if (!ev.shiftKey && !ev.ctrlKey && !ev.altKey && ev.keyCode === 27) {
                handler.call(this, ev);
                if (ev.preventDefault) {
                    ev.preventDefault();
                }
                return false;
            }
        });
    };
})(jQuery);


