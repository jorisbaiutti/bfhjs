//Increment Service Problem Global Scope
var i = 0;

function get() {
    return i;
}

function increment() {
    return ++i;
}

//******************* */

//Increment Service Immidiate Invoked function IIFE Problem Increment ausserhalb nicht verfügbar
(
    function () {
        var i = 0;

        function get() {
            return i;
        }

        function increment() {
            return ++i;
        }
    }
)();

//******************* */

//Increment Service Immidiate Invoked function IIFE which returns Object
var CounterService = (function () {
    var i = 0;

    function get() {
        return i;
    }

    function increment() {
        return ++i;
    }

    return {
        increment: increment,
        get: get
    };
}
)();

//******************* */

//Increment Service Immidiate Invoked function IIFE which returns Object with export Object

var cs = {};
(function (exports) {
    var i = 0;

    function get() {
        return i;
    }

    function increment() {
        return ++i;
    }
    exports.increment = increment;
    exports.get = get;
}
)(cs);

//******************* */ jQuery Plugin
(function ($) {
    var counter = 0;
    $.fn.identify = function(options){
        var settings = $.extend({
            prefix: "test-"
        }, options);
        this.each(function(){
            this.id = settings.prefix + (++counter);
        });
    }
}
)(jQuery);
//