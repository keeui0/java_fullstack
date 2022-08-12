var sum = 0;
    for(var i=1; i<=10; i++)
        sum = sum + i; 
    postMessage(sum); //합을 메세지로 전송

    //워커 태스크
    //독립적으로 실행되는 작업 단위
    