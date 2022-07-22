// import $ from 'jquery'

// $(function(){
//     // $('body').css('background-color','red')
// })


// 함수 -> scroll animation -> nav -> web용 또는 tablet, mobile용
function nav(){
$('nav>ul>li>a').on('click', function(e){
    let navHref = $(this).attr('href');
    let aPos = $(navHref).offset().top;
    console.log(aPos);
    $('html,body').animate({scrollTop:aPos},800);
    //
    return false;
});
}

function subMenu(){
    $('aside ul>li>a').on('click', function(e){
    let navHref = $(this).attr('href');
    let aPos = $(navHref).offset().top;
    console.log(aPos);
    $('html,body').animate({scrollTop:aPos},800);
    //
    return false;
    });
}

function topScroll(){
    $('aside p.top').on('click', function(e){
        $('html,body').animate({scrollTop:0}, 800);
    return false;
    });
}

// tablet
function tabletNav(){
    $('header>p.btn').on('click',function(e){
        $('nav').animate({left: '0'},800);
        $(this).hide();
    });
    $('nav>ul>li>a').on('click', function(e){
        let navHref = $(this).attr('href');
        let aPos = $(navHref).offset().top;
        // hide 하면 나중에 animate 못하니까 그냥 -480으로 하기
        $('nav').css('left','-40vw');
        console.log(aPos);
        $('html,body').animate({scrollTop:aPos},800);
        $('header p.btn').show();
        //
        return false;
    });
    $('nav .close').on('click', function(e){
        $('nav').animate({left:'-40vw'},300);
        $('header p.btn').show();
    });

}
// mobile
function mobileNav(){
    $('header>p.btn').on('click',function(e){
        $('nav').animate({left: '0'},800);
        $(this).hide();
    });
    $('nav>ul>li>a').on('click', function(e){
        let navHref = $(this).attr('href');
        let aPos = $(navHref).offset().top;
        // hide 하면 나중에 animate 못하니까 그냥 -480으로 하기
        $('nav').css('left','-100vw');
        console.log(aPos);
        $('html,body').animate({scrollTop:aPos},800);
        $('header p.btn').show();
        //
        return false;
    });
    $('nav .close').on('click', function(e){
        $('nav').animate({left:'-100vw'},300);
        $('header p.btn').show();
    });
}

// gallery