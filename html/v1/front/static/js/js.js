$(function () {
    /****************************************首页区域*******************************************/
    /**
     * 响应式幻灯，支持触摸滑动
     * @author Heanes
     * @time 2014-11-28 14:02:12
     */
    if($.isFunction($.fn.excoloSlider)){
        /*$("#indexSlideShow").excoloSlider({
            pagerClass : "index-slide-pager",
            prevnextNav : false,
            autoPlay : true
        });*/

    }
    /**
     * 响应式幻灯，支持触摸滑动
     * @author Heanes
     * @time 2018-10-17 10:55:25 周三
     */
    $(".index-slide-show").slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
        nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
        lazyLoad: 'ondemand',
    });
});