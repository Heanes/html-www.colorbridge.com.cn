<template>
    <!-- S header 头部 S -->
    <div class="header" slot="header">
        <!-- S top bar S -->
        <div class="header-top-wrap">
            <div class="header-top main-width">
                <div class="top-left">
                    <ul class="header-notice-list" id="headerNoticeList">
                        <li class="notice-item"><a href="../article/notice.html">公告1： 公告内容公告内容公告内容公告内容公告内容</a></li>
                        <li class="notice-item"><a href="../article/notice.html">公告2： 公告内容公告内容公告内容公告内容公告内容</a></li>
                    </ul>
                </div>
                <div class="top-right">
                    <a class="top-right-link" href="">首页</a>
                    <i class="border-separate"></i>
                    <a class="top-right-link" href="">加入收藏</a>
                    <i class="border-separate"></i>
                    <a class="top-right-link" href="">联系我们</a>
                    <i class="border-separate"></i>
                    <a class="top-right-link" href="">English</a>
                </div>
            </div>
        </div>
        <!-- E top bar E -->
        <div class="web-logo">
            <div class="web-header-logo">
                <img class="web-logo" src="" alt="" />
                <button class="nav-bar-toggle collapsed">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>
        </div>
        <!-- S nav bar S -->
        <div class="header-nav-wrap">
            <ul class="nav-list main-width">
                <li class="nav-item active">
                    <a class="nav-link" target="_blank" href="/">网站首页</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="../article/list.html">关于我们</a>
                    <ul class="nav-sub">
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">公司简介</a></li>
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">荣誉资质</a></li>
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">联系我们</a></li>
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">在线留言</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="../article/detail.html">服务体系</a>
                    <ul class="nav-sub">
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">常见问题</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="../product/list.html">厂房设备</a>
                    <ul class="nav-sub">
                        <li class="nav-item"><a class="nav-link" href="../product/detail.html">厂房介绍</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="javascript:">产品中心</a>
                    <ul class="nav-sub">
                        <li class="nav-item"><a class="nav-link" href="../product/detail.html">日历印刷</a></li>
                        <li class="nav-item"><a class="nav-link" href="../product/detail.html">画册印刷</a></li>
                        <li class="nav-item"><a class="nav-link" href="../product/detail.html">手提袋</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="../product/list.html">合作案例</a>
                    <ul class="nav-sub">
                        <li class="nav-item"><a class="nav-link" href="../product/detail.html">案例1</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="../article/list.html">新闻动态</a>
                    <ul class="nav-sub">
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">公司新闻</a></li>
                        <li class="nav-item"><a class="nav-link" href="../article/detail.html">行业动态</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" target="_blank" href="../article/list.html">联系我们</a>
                </li>
            </ul>
        </div>
        <!-- E nav bar E -->
    </div>
    <!-- E header 头部 E -->
</template>

<script>
    import '@/static/css/layout/header.scss'

    import $ from 'jquery';
    export default {
        name: 'Header',
        mounted() {
            let $headerNoticeList = $('#headerNoticeList');
            //this.showScrollNotice($headerNoticeList);
        },
        methods: {
            /**
             * @doc 显示动态循环显示的公告栏
             * @param $headerNoticeList
             * @param delay 展示切换间隔时间
             * @param animateDelay 切换动画时间
             * @author Heanes
             * @time 2018-10-13 20:57:38 周六
             */
            showScrollNotice($headerNoticeList, delay, animateDelay){
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
        }
    }
</script>

<style scoped>

</style>
