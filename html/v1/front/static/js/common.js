$(function () {
    /**
     * @doc 头部
     * @author Heanes
     * @time 2018-10-13 20:04:24 周六
     */

    let $headerNoticeList = $('#headerNoticeList');
    //showScrollNotice($headerNoticeList);

    /**
     * @doc 显示动态循环显示的公告栏
     * @param $headerNoticeList
     * @param delay 展示切换间隔时间
     * @param animateDelay 切换动画时间
     * @author Heanes
     * @time 2018-10-13 20:57:38 周六
     */
    function showScrollNotice($headerNoticeList, delay, animateDelay){
        if(!$headerNoticeList){
            return false;
        }
        delay = delay || 2000;
        animateDelay = animateDelay || 500;
        let $noticeList = $headerNoticeList.find('.notice-item');
        let noticeItemHeight = $noticeList.height();
        let scrollCount = 0;
        let scrollTotal = $headerNoticeList.length;
        $headerNoticeList.append($headerNoticeList.children().clone(true));
        let scrollNotice = function(){
            if(scrollCount < scrollTotal){
                $headerNoticeList.animate({'top': $headerNoticeList.position().top - noticeItemHeight}, animateDelay);
                scrollCount++;
            }else{
                $headerNoticeList.animate({'top': - noticeItemHeight}, 0);
                $headerNoticeList.animate({'top': $headerNoticeList.position().top - noticeItemHeight}, animateDelay);
                scrollCount = 0;
            }
        };
        let scrollInterval = setInterval(scrollNotice, delay);
        // 鼠标浮上时停止滚动
        $headerNoticeList.on('mouseenter', function () {
            clearInterval(scrollInterval);
        });
        // 鼠标离开后继续滚动
        $headerNoticeList.on('mouseleave', function () {
            scrollInterval = setInterval(scrollNotice, delay);
        });
    }


});
