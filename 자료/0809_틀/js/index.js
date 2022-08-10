$(function() {
	
	var ww = $(window).width();
	$(".cover, .cover>div").css("width",ww+"px");
	
	$(".cover>div").not(":eq(0)").hide();
	// .cover > div 의 eq 차례가 아닐 때 숨김
	
	now = 0;
	imgs = 2;
	
	function fade() {
		now = now == imgs ? 0 : now += 1;
	$(".cover>div").eq(now-1).fadeOut(800);
	$(".cover>div").eq(now).fadeIn(800);
	
	$(".bullet>li").removeClass("hover");
	$(".bullet>li").eq(now).addClass("hover");
	// 우측 버튼에 마우스 올릴 때 이벤트

	}
	
	setInterval(fade, 3000);
	// 화면전환 딜레이 3초, fade 효과 적용

	
	$(".bullet>li").click(function() { // ul.bullet > li 클릭 이벤트
		var bulletNumber = $(this).index();
		if(now == bulletNumber) return;
		else {
			$(".cover>div").not(":eq("+now+")").hide();
			$(".cover>div").eq(now).fadeOut(800);
			$(".cover>div").eq(bulletNumber).fadeIn(800); 
			
			$(".bullet>li").removeClass("hover");
			$(".bullet>li").eq(bulletNumber).addClass("hover");
			
			now = bulletNumber;
		}	
	
	});
	
	$(".text>h3, .text>p, .text>a, .sandwich, .paste, .text2>h3, .text2>p, .text2>a, .smoothie_bowl, .organic>h3, .organic>p, .organic>a").hide();
	
	$(window).scroll(function() {
		var scrollTopval = $(this).scrollTop();
		if(scrollTopval >= 600) {
			$(".text>h3").fadeIn("slow");
		} if(scrollTopval >= 800) {
			$(".text>p").fadeIn("slow");
		} if(scrollTopval >= 950) {
			$(".text>a").fadeIn("slow");	
		} if(scrollTopval >= 600) {
			$(".sandwich").fadeIn(2000);
		} if(scrollTopval >= 900) {
			$(".paste").fadeIn(3000);
		} if(scrollTopval >= 1500) {
			$(".text2>h3").fadeIn("slow");
		} if(scrollTopval >= 1700) {
			$(".text2>p").fadeIn("slow");
		} if(scrollTopval >= 1900) {
			$(".text2>a").fadeIn("slow");	
		} if(scrollTopval >= 1300) {
			$(".smoothie_bowl").fadeIn(2000);	
		} if(scrollTopval >= 2200) {
			$(".organic>h3").fadeIn("slow");
		} if(scrollTopval >= 2300) {
			$(".organic>p").fadeIn("slow");	
		} if(scrollTopval >= 2450) {
			$(".organic>a").fadeIn(2000);	
		} 
		
	});
		
});