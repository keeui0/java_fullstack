onmessage = function(e) {
    var op1 = parseInt(e.data.op1);
    var op2 = parseInt(e.data.op2);
    var k = op1 * op2;
    var result = 0;

    result = k
    postMessage(result);
    
}