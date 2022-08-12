// onmessage = function(e) {
//     var result = "A";
//     var rate = e.data/10;
//     // 문자열을 숫자로 변경
//     rate = parseInt(rate);
//     switch(rate) {
//         case 10 : result = "A";
//         case 9 : result = "A";
//         break;
//         case 8 : result = "B";
//         break;
//         case 7 : result = "C";
//         break;
//         case 6 : result = "D";
//         break;
//         default : result = "F";
//     }
//     //postMessage 함수로 result 값을 전송함
//     postMessage(result);
// }

onmessage = function(e) {
    var result = "A";
    var rate = e.data/10;
    rate = parseInt(rate);
    
    if(rate == 10) {
        result = "A+"
        postMessage(result);
        return;
    }
    else if(rate == 9) {
        result = "A"
        postMessage(result);
        return;
    }
    else if(rate == 8) {
        result = "B"
        postMessage(result);
        return;
    }
    else if(rate == 7) {
        result = "C"
        postMessage(result);
        return;
    }
    else if(rate == 6) {
        result = "D"
        postMessage(result);
        return;
    }
    else {
        result = "F"
        postMessage(result);
        return;
    }

}