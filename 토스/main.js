$(function(){
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        $('h1.s_top').text(sct);
        console.log(sct);
        if(sct >= 0){
            $('.div1').addClass('on');
        }else{
            $('.div1').removeClass('on');
        }
        if(sct >= 1200){
            $('.text1').addClass('on');
        }else{
            $('.text1').removeClass('on');
        }
        if(sct >= 1202){
            $('.pic').addClass('on');
        }else{
            $('.pic').removeClass('on');
        }
        if(sct >= 1500){
            $('.pic1').addClass('on');
        }else{
            $('.pic1').removeClass('on');
        }
        if(sct >= 2100){
            $('.text2').addClass('on');
        }else{
            $('.text2').removeClass('on');
        }
        if(sct >= 3000){
            $('.box1').addClass('on');
        }else{
            $('.box1').removeClass('on');
        }
        if(sct >= 3400){
            $('.box2, .box3').addClass('on');
        }else{
            $('.box2, .box3').removeClass('on');
        }
        if(sct >= 3900){
            $('.box4, .box5').addClass('on');
        }else{
            $('.box4, .box5').removeClass('on');
        }
        if(sct >= 4300){
            $('.box6, .box7').addClass('on');
        }else{
            $('.box6, .box7').removeClass('on');
        }
        if(sct >= 5500){
            $('  .main5> .section3 .content1').addClass('on');
        }else{
            $('  .main5> .section3 .content1').removeClass('on');
        }
        if(sct >= 5900){
            $('  .main5> .section3 .content2').addClass('on');
        }else{
            $('  .main5> .section3 .content2').removeClass('on');
        }
        if(sct >= 6000){
            $('  .main5> .section3 .content3').addClass('on');
        }else{
            $('  .main5> .section3 .content3').removeClass('on');
        }
        if(sct >= 6100){
            $('  .main5> .section3 .content4').addClass('on');
        }else{
            $('  .main5> .section3 .content4').removeClass('on');
        }
        if(sct >= 6942){
            $('  .main6>.section4>.content1').addClass('on');
        }else{
            $('  .main6>.section4>.content1').removeClass('on');
        }
        if(sct >= 7461){
            $('.main6>.section4>.content2, .main6>.section4>.content3').addClass('on');
        }else{
            $('.main6>.section4>.content2, .main6>.section4>.content3').removeClass('on');
        }
        if(sct >= 7861){
            $('.main6>.section4>.content4,.main6>.section4>.content5').addClass('on');
        }else{
            $('.main6>.section4>.content4,.main6>.section4>.content5').removeClass('on');
        }
        if(sct >= 8971){
            $('.con7,.con10').addClass('on');
        }else{
            $('.con7,.con10').removeClass('on');
        }
        if(sct >= 9171){
            $('.con8,.con11').addClass('on');
            $('.con7,.con10').addClass('on1');
        }else{
            $('.con8,.con11').removeClass('on');
            $('.con7,.con10').removeClass('on1');
        }
        if(sct >= 9271){
            $('.con8,.con11').addClass('on1');
            $('.con12,.con9').addClass('on1');
        }else{
            $('.con8,.con11').removeClass('on1');
            $('.con12,.con9').removeClass('on1');
        }
        if(sct >= 9500){
            $('.main8>.box1').addClass('on');
        }else{
            $('.main8>.box1').removeClass('on');
        }
        if(sct >= 10500){
            $('.sec9>.img').addClass('on');
        }else{
            $('.sec9>.img').removeClass('on');
        }
        if(sct >= 11328){
            $('.sec9>.box9>.h2').addClass('on');
        }else{
            $('.sec9>.box9>.h2').removeClass('on');
        }
        if(sct >= 11512){
            $('.sec9>.box9>p').addClass('on');
        }else{
            $('.sec9>.box9>p').removeClass('on');
        }
        if(sct >= 12000){
            $('.abox>.img1').addClass('on');
        }else{
            $('.abox>.img1').removeClass('on');
        }
        if(sct >= 12000){
            $('.sec10>.abox1').addClass('on');
        }else{
            $('.sec10>.abox1').removeClass('on');
        }
        if(sct >= 13150){
            $('.sec11>.image').addClass('on');
        }else{
            $('.sec11>.image').removeClass('on');
        }

    });


});
