var count = 0; 
var timerID = null;
var k =0;


onmessage = function(e) {
    str = e.data;
    if(str == "start"){
        timerID = setInterval(myCallback, 1000);
        k++;
        return;

    }
    if(str == "stop"){
        clearInterval(timerID);
        return;
    }
    if(k > 1){
        timerID = function start(){}
        stop(start());
    }
}
    



function myCallback() { //1초 간격으로 호출
    count++;            //시작과 동시에 1씩 추가
    postMessage(count); //메인의 addWorker.onmessage로 데이터 넘김
}


//setInterval() 이용해서 만들어보세요.
// timerID와 return을 잘 활용하여
// start 버튼이 최초에 눌린 이후에 동작하지 않도록
