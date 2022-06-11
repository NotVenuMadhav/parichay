$(document).ready(()=>{
    $(window).scroll(()=>{
        if (this.scrollY>400){
            $(".navbar").addClass("sticky");
        } else {
            $(".navbar").removeClass("sticky");
        }
        if (this.scrollY>500){
            $(".scroll-btn").addClass("show");

        }else{
            $(".scroll-btn").removeClass("show");
        }
    })
    $(".scroll-btn").click(()=>{
        $("html").animate({
            scrollTop:9
        })
    })
})