function getStyle(obj, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(obj)[attr];
    } else {
        return obj.currentStyle[attr];
    }
}
// 链式运动,同时执行
function moreMove(obj, json, fn) {
    var speed = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        for (var attr in json) {
            var value = 0;
            if (attr == 'opacity') {
                value = Math.round(getStyle(obj, attr) * 100);
            } else {
                value = parseInt(getStyle(obj, attr));
            }
            speed = (json[attr] - value) / 5;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (value == json[attr]) {
                clearInterval(obj.timer);
                fn && fn();
            } else {
                if (attr == 'opacity') {
                    obj.style.opacity = (value + speed) / 100;
                    obj.style.filter = 'alpha(opacity=' + (value + speed) + ')';
                } else {
                    obj.style[attr] = value + speed + 'px';
                }
            }
        }
    }, 5);
}