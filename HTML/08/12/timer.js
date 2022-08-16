var count = 0; 
var timerID = null;

console.log(timerID)
onmessage = function(e) {
    //만일 전송된 e의 값이 "start" 이면
    if(e.data == "start"){
        //setInerval() 함수를 사용하여 myCallback 함수를 1000ms 주기로 실행
        timer = setInterval(myCallback, 1000);
    }
    //만일 전송된 e의 값이 "stop" 이면
    else if(e.data == "stop"){
        //clearInterval() 함수를 사용하여 카운팅을 중단한다.
        clearInterval(timer);
    }
}
    



function myCallback() { //1초 간격으로 호출
    count++;            //시작과 동시에 1씩 추가
    postMessage(count); //메인의 addWorker.onmessage로 데이터 넘김
}


//setInterval() 이용해서 만들어보세요.
// timerID와 return을 잘 활용하여
// start 버튼이 최초에 눌린 이후에 동작하지 않도록
