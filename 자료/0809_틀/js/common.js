$(function() {
	$(".sub").hide();	// .sub 숨김
	
	$(".main>li").mouseover(function() {	// .main > li mouseover 시
		$(".sub", this).show();				// .sub 표시
		$(".sub_bg").css("background-color", "rgba(255,255,255,0.8)");	
		// .sub_bg css 백그라운드 색 변경
		$(".dd",this).addClass("add");		// add 클래스 생성
	});
	
	$(".main>li").mouseout(function() {		// .main > li mouseout 시
		$(".sub", this).hide();				// .sub 숨김
		$(".sub_bg").css("background-color", ""); // .sub css 백그라운드 색 없음
		$(".dd", this).removeClass("add");	// add 클래스 삭제
	});
});
