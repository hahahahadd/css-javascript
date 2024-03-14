var preScrollpos = window.scrollY;
var navbar = document.querySelector('header');
window.onscroll = function(){
    var currentScrollPos = window.scrollY;
    if(preScrollpos > currentScrollPos){
        document.querySelector('header').style.top="0px";        
    }else if(preScrollpos = currentScrollPos){
        document.querySelector('header').style.top="-100px";
    }
    else{ document.querySelector('header').style.top="-150px";
      
}
preScrollpos = currentScrollPos;
}
  
const $slideWrap = document.querySelector('.main_visual');
const $slideContainer = document.querySelector('.main_visual_img');
const $slide = document.querySelectorAll('.banner_img');
const $overBtn = document.querySelector('.over-btn');
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');
let $currentIndex = 0;
const $slideCount = $slide.length;
let $timer = undefined;
const $text = document.querySelectorAll('li .text')

function fadeIn(element){
    element.style.opacity=0;
    element.style.transition='opacity 1s ease-in-out';
    setTimeout(()=>{
        element.style.opacity=1;
    },0);
    //한번만 실행되는데 transition이 적용되도록 시간차를 준다.
}

function fadeOut(element){
    element.style.transition='opacity 1s ease-in-out';
    element.style.opacity = 0;
}

// // 각 슬라이드의 위치 설정
// for (let i = 0; i < $slideCount; i++) {
//     $slide[i].style.left = i * 100 + '%';
// }

// 슬라이드 이동 함수
function goToSlide(idx) {
    fadeOut($slide[$currentIndex]);
     fadeIn($slide[idx]);
     $currentIndex=idx; 
    for(let a=0;a<$text.length;a++){
          $text[a].classList.remove('active')
       }
     $text[idx].classList.add('active');
}

// function updatePagerButtons(index){
//     $text.forEach((btn, i)=>{
//         btn.classList.toggle('active', i === index);
//     });
// }


// 초기 슬라이드 설정
goToSlide(0);

// 다음 슬라이드로 이동하는 이벤트 리스너 등록
$next.addEventListener('click', function() {
    if ($currentIndex == $slideCount - 1) {
        goToSlide(0);
    } else {
        goToSlide($currentIndex + 1);
    }
});

// 이전 슬라이드로 이동하는 이벤트 리스너 등록
$prev.addEventListener('click', function() {
    if ($currentIndex == 0) {
        goToSlide($slideCount - 1);
    } else {
        goToSlide($currentIndex - 1);
    }
});

// 자동 슬라이드 시작
startAutoSlide();
function startAutoSlide(){
    $timer = setInterval(function(){
        let nextIdx = ($currentIndex+1) % $slideCount;
        goToSlide(nextIdx)
    },5000);
}

function stopAutoSlide(){
    clearInterval($timer);
    //슬라이드가 멈춤
}

var strong1 = document.getElementById("strong1");
    strong1.addEventListener("mouseover",function(){
        var cover1 = document.getElementById("cover1")
        cover1.src="images/tallest.jpg";
    });
    strong1.addEventListener("mouseout",function(){
        cover1.src="images/bottom_bg3.jpg"
    })

    var strong2 = document.getElementById("strong2");
    strong2.addEventListener("mouseover",function(){
        var cover1 = document.getElementById("cover1")
        cover1.src="images/student.jpg"
    });
    strong2.addEventListener("mouseout",function(){
        cover1.src="images/bottom_bg3.jpg"
    })
    $(function(){
        $(window).scroll(function(){
            var sct = $(window).scrollTop();
            $('h1.s_top').text(sct);
            console.log(sct);
        if(sct>=2805){
            $('.hh1').addClass('on');
        }else{
            $('.hh1').removeClass('on');
        }
        if(sct>=2920){
            $('.hh2').addClass('on');
        }else{
            $('.hh2').removeClass('on');
        }
        if(sct>=3120){
            $('.hh3').addClass('on');
        }else{
            $('.hh3').removeClass('on');
        }
        })})