$(function () {
    history.scrollRestoration = "manual"
    //인트로
    gsap.set('body',{overflow:'hidden'})

    intro = gsap.timeline({
        defaults:{
            duration:1,
        }
    })
    intro
    .addLabel('a')
    .to('.sc-video .bg',{height: '0'})
    .to('.inner',{opacity: 1},'a')
    .to('.effect',{ yPercent:200},'a')
    .to('.sc-intro span',{ 'padding': '0px'},'a')
    .to('.sc-intro p',{ 'transform': 'translateY(0%)'},'a')
    .to('body',{overflow:'auto'})
    .to('.footer .cookie',{'visibility': 'visible'})

    


    //비디오 스크롤 트리거
    video = gsap.timeline({
        scrollTrigger:{
            trigger:".sc-video",
            start:'0% 80%',
            end:'80% 50%',
            // markers:true,
            scrub:1,
            // pin:true,
        },
    })
    video
    .to('.sc-video video',{ 
        scale:1
    })


    //


    $('.product-item').each(function(i,element){

        gsap.to(element,{
            scrollTrigger:{
                trigger:element,
                start:'100% 100%',
                end:'100% 0%',
                markers:true,
                scrub:0,
                // pin:true,
            },
            ease:'none',
            yPercent:20
        })

    })





    //구역 마다 메뉴 색 변경
    $(window).scroll(function () {
        var curr = $(this).scrollTop();
        bg = $('.sc-intro').offset().top;
        bg1 = $('.sc-video').offset().top;
        bg2 = $('.sc-capability').offset().top;
        bg3 = $('.sc-introduction').offset().top;
        bg4 = $('.sc-insights').offset().top;
        if(curr > bg){
            $('.header').css('background-color','#ccc')
            $('.header').css('color','#191b1d')
        }
        if(curr > bg1){
            $('.header').css('background-color','#fff')
            $('.header').css('color','#191b1d')
            $('.header .head-point-wrap').css('background-color','rgba(0,0,0,0.445)')
        }
        if(curr > bg2){
            $('.header').css('background-color','#000')
            $('.header').css('color','#fff')
            $('.header .head-point-wrap').css('background-color','rgba(255, 255, 255, 0.445)')
        }
        if(curr > bg3){
            $('.header').css('background-color','#ccc')
            $('.header').css('color','#191b1d')
            $('.header .head-point-wrap').css('background-color','rgba(0,0,0,0.445)')
        }
        if(curr > bg4){
            $('.header').css('background-color','#fff')
        }
    })






    //비디오 마우스 커서
    $('.sc-video').mousemove(function(e){

        w=$('.cursor').outerWidth()/2;
        h=$('.cursor').outerHeight()/2;

        xVal1=e.offsetX-w //내가보고있는 윈도우창에서의 좌표
        yVal1=e.offsetY-h

        item1 = $(this).find('.cursor');

        gsap.to(item1,{
            y:yVal1,
            x:xVal1,
            visibility:'visible',
            opacity:1,
            'width': '150px',
            'height': '150px',
        })
    })




    $('.sc-video').mouseleave(function(){
        item1 = $(this).find('.cursor');
        gsap.to(item1,{
            visibility:'hidden',
            opacity:0
        })
    })


    //헤드 메뉴 호버시 포인트
    $('.btn-menu').hover(function(e){
        e.preventDefault();
        $('.header').addClass('on');
        if($('.header').hasClass('on')){
            menu = gsap.timeline({
                defaults: {
                    duration: 0.2,
                }
            })
            menu
            .addLabel('a')
            .to('.menu-wrap',{'top': '0px'})
            .to('.dimmed',{opacity: 1},'a')
            .to('.menu-list',{delay : 0.3,opacity: 1},'a')
            .to('.menu-list',{delay : 0.4,'transform': 'translateY(0)'},'a')
        }
        
    },function(){
        if($('.menu-wrap').hasClass('ho')){
            $('.menu-wrap').hover(function(){
                $(this).addClass('ho');
            })
        }
    })
    $('.dimmed').hover(function(){
        $('.header').removeClass('on');
        $('.menu-wrap').removeClass('ho');
        menu.reverse()
    })

    //사이드 메뉴 호버시 이미지 변경
    $('.menu-item').each(function(i){
        $(this).hover(function(e){
            $(this).toggleClass('show');
            e.preventDefault();
            $('.img-item').each(function(a,b){
                if(i==a){
                        $(this).toggleClass('show');
                }
            })
        });
    })






    //질문 클릭시 답나오게
    $('.btn-qna').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on');
    if($(this).hasClass('on')==true){
            qna = gsap.timeline({
                defaults: {
                    duration: 0.4,
                }
            })
            num=$(this).find('.desc')
            num1=$(this).find('.desc p')
            num2=$(this).find('.desc i')
    
            qna
            .addLabel('a')
            .to(num, { "height":'150px'},'a')
            .to(num2, { 'display': 'block'},'a')
            .addLabel('b')
            .to(num1, {opacity: 1},'b')   
            .to(num1, {'transform': 'translateY(0%)'},'b')   
        }else{
            qna1 = gsap.timeline({
                defaults: {
                    duration: 0.4,
                }
            })
            num=$(this).find('.desc')
            num1=$(this).find('.desc p')
            qna1
            .addLabel('a')
            .to(num1, {opacity: 0},'a')
            .to(num, { 'height':'0px'},'a')
            .to(num1, {'transform': 'translateY(20%)'})  
        }
    })

    // 질문 클릭시 원형에 표시하기
    $('.btn-qna').each(function(i){
        $(this).hover(function(e){
            e.preventDefault();
            $('.circle-list .circle-item').each(function(a,b){
                if(i==a){
                        $(this).toggleClass('on1');
                }
            })
        });
    })
    
    $('.btn-qna').each(function(i){
        $(this).click(function(e){
            e.preventDefault();
            $('.circle-list .circle-item').each(function(a,b){
                if(i==a){
                    $(this).toggleClass('on2');
                }
            })
        });
    })
    



    // 마크 슬라이드


    var swiper = new Swiper(".mark", {
        slidesPerView: 2,
            spaceBetween:30,
            navigation: {
                nextEl: ".next",
                prevEl: ".prev",
                },
    });




    //마크 슬라이드 커서 돌아다니기
    $('.sc-introduction').mousemove(function(e){
        xVal=e.offsetX //내가보고있는 윈도우창에서의 좌표
        yVal=e.offsetY //내가보고있는 윈도우창에서의 좌표

        item = $(this).find('.cursor');

        gsap.to(item,{
            y:yVal-50,
            x:xVal-50,
            visibility:'visible',
            opacity:1,
            'width': '100px',
            'height': '100px',
        })
    })
    $('.sc-introduction').mouseleave(function(){
        item = $(this).find('.cursor');
        gsap.to(item,{
            visibility:'hidden',
            opacity:0
        })
    })
})