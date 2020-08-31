$(function(){
    'use stric';

    function navFixed(){
        var scrollTop = $(window).scrollTop()
        
        if(scrollTop > 200){
            $($(".navbar").addClass("fixed-top"))
        } else{
            $($(".navbar").removeClass("fixed-top"))
        }
    }
    
    if($(window).width() >= 0){
        $(window).ready(function(){ navFixed() })
        $(window).scroll(function(){ navFixed() })
    }

    $(".navbar-toggler").click(function(){ 
        if($(".navbar").hasClass("show")){
            $(".navbar").removeClass("show")
            $("body").removeClass("overflow-hidden")
            $(".navbar-toggler_menu").addClass("active")
            $(".navbar-toggler_menu").html("Menu")
        }else{
            $(".navbar").addClass("show")
            $("body").addClass("overflow-hidden")
            $(".navbar-toggler_menu").html("Fechar")
        }
    })
})