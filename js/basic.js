$("#popup button").click(()=>{
    // #popup button 클릭하면 실행해라.
    $("body").removeClass("popupshow")
    // body의 popupshow클래스를 제거하라.
});

$("body").height(2000) // height, width 메서드
// $("body").css("height", 2000)

$(window).scroll(()=>{
    // 브라우저 창의 스크롤하면 
    if($(window).scrollTop() > 0){
        // 스크롤바 위치가 0보다 커지면
    $("html").addClass("scroll");
    }else{
        // 0이라면
    $("html").removeClass("scroll");}
})

console.log( typeof $(window).scrollTop(), $(window).scrollTop() )

// 제이쿼리 간단한 문법
// 1. $("스타일선택자와 동일")
// -> 단 가장선택자는 제이쿼리선택지 불가
// 2. 제이쿼리 선택자 다음에는 메서드 removeClass 혹은 이벤트 click 가 온다
// 3. 이벤트와 메서드의 차이는 ()=>{} 화살표함수 유무
// 이벤트: click, scroll, swiper, hover, mouseenter, mouseleave