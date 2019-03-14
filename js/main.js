$(document).ready(function() {
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function () {
        $(".post-listing").scroll(function(){
            if ($(".post-listing").scrollTop()>100){
                $("#toTop").fadeIn(1500);
            }
            else
            {
                $("#toTop").fadeOut(1500);
            }
        });

        //当点击跳转链接后，回到页面顶部位置
        $("#toTop").click(function(){
            //$('body,html').animate({scrollTop:0},1000);
            if ($(".post-listing").scrollTop()) {
                $(".post-listing").animate({ scrollTop: 0 }, 1000);
                return false;
            }
            $(".post-listing").animate({ scrollTop: 0 }, 1000);
            return false;
        });
    });
});
