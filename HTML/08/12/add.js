onmessage = function(e) {
    //웹페이지로부터 숫자를 기다린다.
    var sum = 0;
    var from = parseInt(e.data.from);
    //받은데이터에서 from에 해당되는 값
    var to = parseInt(e.data.to);
    //받은데이터에서 to에 해당하는 값
    for(var i=from; i<=to; i++)
        sum += i;
    postMessage(sum);
    //합산한 값을 worker객체로 보낸다.
}