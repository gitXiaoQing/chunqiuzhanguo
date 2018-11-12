function fn() {
    f4();
}
fn();
function f1() {
    $('.white-red-font1')
        .animate({
            height: 0
        }, {
                duration: 1000,
                complete: function () {
                    $(this).css({ "width": 0, "height": "30px" });
                    f2();
                }
            })
        .animate({
            width: 30
        }, {
                duration: 1000
                , complete: function () {
                    $(this).css({ "width": "30px", "height": "30px" });
                }
            })
}
function f2() {
    $('.white-red-font2')
        .animate({
            width: 0
            , left: 60
            , textIndent: -30
        }, {
                duration: 1000,
                complete: function () {
                    $(this).css({ "width": "30px", "left": "30px", "textIndent": 0, "height": 0 });
                    f4();
                }
            })
        .animate({
            height: 30
        }, {
                duration: 1000
                , complete: function () {

                }
            })
}
function f3() {
    $('.red-white-font3').animate({
        width: 30
        , left: 0
        , textIndent: 0
    }, {
            duration: 1000
            , complete: function () {
                f1();
            }
        }).animate({
            height: 0
        }, {
                duration: 1000
                , complete: function () {
                    $(this).css({ "width": 0, "left": "30px", "textIndent": "-30px", "height": "30px" });
                }
            })
}
function f4() {
    $('.red-white-font4').animate({
        height: 30
    }, {
            duration: 1000,
            complete: function () {
                f3();
            }
        }).animate({
            width: 0
        }, {
                duration: 1000,
                complete: function () {
                    $(this).css({ "height": 0, "width": "30px" });
                }
            })
}