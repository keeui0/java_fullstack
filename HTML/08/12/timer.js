var count = 0; 
var timerID = null;


onmessage = function(e) {
    str = e.data;
    if(str == "start"){
        timerID = setInterval(myCallback, 1000);
    }
    if(str == "stop"){
        timerID = clearInterval(myCallback);
        return;

    }

    
}
    



function myCallback() { //1초 간격으로 호출
    count++;            //시작과 동시에 1씩 추가
    postMessage(count); //메인의 addWorker.onmessage로 데이터 넘김
}


//setInterval() 이용해서 만들어보세요.
