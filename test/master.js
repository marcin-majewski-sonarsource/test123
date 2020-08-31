let nonCallable = 1;
let other = 2;

function withTooManyParams(a, b, c, d, e) {
    return a + b + c + d + e;
}

;;;;
;;;;;;;;;;;;;;
;;;;;;
nonCallable();

var myWindow = document.getElementById('myIFrame').contentWindow;
myWindow.postMessage(message, "*");
