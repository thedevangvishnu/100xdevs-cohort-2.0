"use strict";
function runAfterOneSec(fn) {
    setTimeout(fn, 1000);
}
runAfterOneSec(() => console.log("hi"));
