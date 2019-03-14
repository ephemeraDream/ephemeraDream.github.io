$(document).ready(function() {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        var document;
        if(window.innerWidth < 1170){
            document = $("html");
        }else {
            document = $(".post-listing");
        }
        document.scroll(function(){
            if (document.scrollTop()>100){
                $("#toTop").fadeIn(500);
            }
            else
            {
                $("#toTop").fadeOut(500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#toTop").click(function(){
            //$('body,html').animate({scrollTop:0},1000);
            if (document.scrollTop()) {
                document.animate({ scrollTop: 0 }, 1000);
                return false;
            }
            document.animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });
});
