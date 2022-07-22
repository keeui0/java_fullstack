$('div > div > img#move_left').click(function(){
    var $this = $(this);
    var $slider = this.closest('.slider');
    
    var index = $this.index();
    var isLeft = index == 0;

    var $current = $slider.find('> div > div > img#move_left:active');
    var $post;

    if ( isLeft){
        $post = $current.prev();
    }
    else {
        $post = $current.next();
    }

    if ( $post.lenght == 0) {
        if (isLeft) {
            $post = $slider.find (' > div > div > img#move_left > #photos:last-child ')
        }
    }
})


console.clear();

// 기존 버튼형 슬라이더
$('div > div > ul#photos img').click(function(){
    var $this = $(this);
    var index = $this.index();
    
    $this.addClass('active');
    $this.siblings('.active').removeClass('active');
    
    var $slider = $this.parent().parent();
    
    var $current = $slider.find('div > div > ul#photos img:active');
    
    var $post = $slider.find(' > .slides > div').eq(index);
    
    $current.removeClass('active');
    $post.addClass('active');
});