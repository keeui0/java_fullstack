// 캔버스 크기 설정 함수
function initialize() {
    //offsetWidth = 요소의 가로 너비, offsetHeight = 요소의 세로 높이
    //캔버스의 margin을 제외하고, padding값과 border값까지 계산한 값을 가져온다.
    graph1.width = document.getElementById('gr1').offsetWidth;
    graph1.height = document.getElementById('gr1').offsetHeight;
}
//캔버스 크기 설정
initialize();
//그래프 1 데이터 객체
var graphInfo1 = {
    //그래프의 타이틀
    title: "주요 도시 연평균 미세먼지 농도",
    //그래프 데이터의 최대값
    max: 35,
    //그래프 데이터들
    data: [ //가로 데이터, 세로데이터, 그래프 색상
        {city: "서울", range: 23, color: "#fe802c"},
        {city: "부산", range: 26, color: "#ffd100"},
        {city: "대구", range: 26, color: "#81d733"},
        {city: "인천", range: 29, color: "#666666"},
        {city: "광주", range: 26, color: "#43cbff"},
        {city: "대전", range: 28, color: "#3183c2"},
        {city: "진주", range: 25, color: "#d4155b"},
    ]
}
//그래프 1 그리기 함수
function drawGraph1() {
    //getContext("2d") : 랜더링 컨텍스트와 그리기 함수를 사용할 수 있게 하는 메소드
    //캔버스의 랜더링 컨텍스트를 가ㅕ온다.
    var ctx = graph1.getContext("2d");
    //그래프 1 데이터 객체
    var data = graphInfo1;
    //초기 설정
    //채우기 색 흰색
    ctx.fillStyle = "white";
    //0,0부터 캔버스의 가로, 세로 크기만큼 흰색 사각형 그리기
    ctx.fillRect(0, 0, graph1.width, graph1.height);
    //타이틀
    ctx.beginPath();            //도형 그리기 시작
    ctx.fillStyle = "black";    //채우기 색 검은색
    ctx.font = "14px Arial";    //폰트 크기, 폰트 종류
    ctx.textAlign = "center";   //글자 가운데 정렬
    //글자의 바로 아래 딱 붙은 가로줄(밑줄이랑 다름, 더 붙음)
    ctx.textBaseline = "alphabetic";
    //타이틀 글자 그리기(입력문자, x좌표, y좌표)
    ctx.fillText(data.title, graph1.width / 2, 35);
    //눈금선
    ctx.font = "12px Arial";        //폰트 크기, 폰트 종류
    ctx.textAlign = "right";        //글자 오른쪽 정렬
    ctx.textBaseline = "middle";    //글자의 중앙을 가로지르는 가로줄
    
    for(var i=0; i<=data.max; i+=5) {   //데이터 최대값 만큼 반복 (5씩 증가)
        var y = 65 + i * 4.5;               //가로줄 간격
        ctx.moveTo(50, y);                  //선 그리기 시작점 (x좌표, y좌표)
        ctx.lineTo(graph1.width - 20, y);   //선그리기 끝점 (x좌표, y좌표)
        ctx.fillText(data.max - i, 40, y);  //글자 쓰기 (입력 글자, x좌표, y좌표)
    }
    //선색 (red, green, blue, 투명도)
    ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
    ctx.stroke();   //선그리기
    
    //그래프
    var y = 65 + data.max * 4.5;                //그래프 시작점 (최 하단)
    for(var i=0; i<data.data.length; i++) {     //그래프 데이터 개수만큼 반복
        var x = 110 + i * 30;                   //각 그래프 가로 시작점 (간격)
        ctx.fillStyle = data.data[i].color;     //각 그래프 데이터의 색깔
        //각 그래프 range 데이터 값으로 사각형 막대 그래프 그리기
        //막대 그래프를 위에서 아래로 그린다.
        //(시작 y좌표가 최 하단 y 좌표에서 - 연산으로 위로 올라옴)
        ctx.fillRect(x, y - data.data[i].range * 4.5, 25, data.data[i].range * 4.5);
    }
    //범례
    //그래프 하단 가로 축에 막대 색상 사각형과 막대별 구분
    ctx.fillStyle = "ragb(0, 0, 0, 0.02)";
    ctx.fillRect(50, y + 10, graph1.width - 70, 30);    //투명도 설정 및 해당위치 설정
    
    for(var i = 0; i < data.data.length; i++) {
        var x = 65 + i * 45;
        ctx.fillStyle = data.data[i].color;
        ctx.fillRect(x, y + 20, 10, 10);    //해당위치의 10 * 10 사각형 그림
        ctx.font = "11px Arial";
        ctx.textAlign = "left";
        ctx.fillStyle = "black";
        ctx.fillText(data.data[i].city, x + 14, y + 25);
    }   //data.data[i].city의 내용을 해당위치에 그리기
}
//그래프 1 그리기
drawGraph1() = document.getElementById("graph1")