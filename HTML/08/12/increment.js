onmessage = function(e) {
    var m = e.data;
    m++;
    postMessage(m);
}