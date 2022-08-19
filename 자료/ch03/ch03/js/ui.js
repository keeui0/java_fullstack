//각 메뉴를 클릭할 때 .on클래스가 적용되어야 사용자가 클릭한 메뉴가 어떤것인지
//시각적으로 확인 할 수 있다. 따라서 현재 클릭한 메뉴에만 .on클래스가 적용되어야 하고
//클릭되지 않은 태그에는 removeClass메서드를 사용하여 <li>태그의 클래스는 지우고
//사용자가 선택한 메뉴($(this))만 .on클래스가 적용되도록 addClass메서드를 사용하여
//스크립트를 만든다.
$(document).ready(function(){
	$("container").addClass("start");
    //nav li 즉 메뉴를 클릭시 #container의 width가 100%로 변경되도록 하자
    $("nav li").click(function(){
        $("container").css("max-width", "100%")
        var id = $(this).attr("data-rol");
        //메뉴를 클릭할 때마다 data-rol 어떤속성 값이 나오는지
        //data의 값을 선택자로 사용할 수 있게 변수로 만든다 var id를 사용하여 현재(.this),
        //이전(.prev), 이후(.next)의 클래스를 섹션태그에 동적으로 적용시킨다.
        $("nav li").removeClass("on");
        $(this).addClass("on"); //자기자신을 의미 즉 이벤트가 발생한 요소를 의미한다.
        $(".content").removeClass("prev this next");
        //클릭 시 가지고 있던 클래스를 모두 지운다.
        $("#" + id).addClass("this").prevAll().addClass("prev");
        //클릭한 메뉴와 매칭 되는 id에 this 클래스를 지정하고
        //그 앞의 모든 <section> 태그는 .prev클래스를 지정한다.
        $("#" + id).nextAll().addClass("next");
        //클릭한 메뉴와 매칭되는 id의 뒤에 오는 <section> 태그는 .next 클래스를 지정한다.
    });
    //1. 로고 클릭 시 .logo_box 클래스명을 선택자로 하여 클릭 이벤트를 만든다.
    //2. prev/next/this 클래스를 삭제하고
    //<section class="content">의 클래스를 모두 지운다.
    //3. #container 의 max-width를 1200px로 지정한다.
    //메뉴역시 초기화 상태(아무것도 선택하지 않은 상태)에서 다른 콘텐츠에서 로고를 선택해
    //<li class= "on">의 클래스를 동적으로 삭제한다.
    $(".logo_box").click(function(){
        $("nav li").removeClass("on");
        $(".content").removeClass("prev this next");
        $("#container").css("max-width", "1200px");
    });
    //롤링배너 왼쪽버튼
    $(".roll.left").click(function(){ //이동할 첫 번째 요소 <li> 선택
        $(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
    }); //선택한 li태그가 .book_roll클래스중 마지막 li태그 뒤로 이동한다.
    //롤링배너 오른쪽 버튼
    $(".roll_right").click(function(){  //가장 마지막 태그가 이동되도록 eq(-1)
        $(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
    }); //선택한 li태그가 .book_roll 클래스중 가장 마지막 요소가 첫 번째 요소
    //제작 순서 
    //1. 왼쪽버튼을 클릭한다. click()
    //2. 첫번째 도서가 있는 <li>태그가 마지막 8번째 <li>태그 뒤로 요소를 이동한다.
    //첫 번째 <li>태그 찾기 .eq(index)
    //8 번째 <li>태그 뒤로 요소 이동하기 A.insertAfter(B)
    //조건에 일치하는 요소뒤에 해당요소를 삽입합니다. B 뒤에 A를 추가 하라는 의미 이다.
});

