<template>
    <!-- S footer 脚部 S -->
    <div class="footer footer-wrap" slot="footer">
        <div class="footer-content footer-top-border">
            <div class="footer-section contact-us-wrap">
                <!-- 快捷的联系我们 -->
                <div class="contact-us main-width"></div>
            </div>
            <div class="footer-section friend-link-wrap">
                <!-- 友情链接 -->
                <div class="friend-link main-width">
                    <h4 class="friend-link-title">友情链接</h4>
                    <ul class="friend-link-list">
                        <li class="link-item">
                            <a class="link" href="javascript:">百度</a>
                        </li>
                        <li class="link-item">
                            <a class="link" href="javascript:">腾讯</a>
                        </li>
                    </ul>
                </div>
            </div>
            <!--<div class="footer-section main-width">
                <div class="footer-website-logo">
                    <a href="" class="footer-website-home-link">
                        &lt;!&ndash;<img class="logo-img" src="../static/image/common/logo/logo.svg">&ndash;&gt;
                    </a>
                </div>
            </div>-->
            <div class="footer-section main-width">
                <!-- 脚部导航链接 -->
                <div class="footer-nav-link">
                    <a class="link-item" href="javascript:">网站首页</a>
                    <a class="link-item" href="javascript:">关于我们</a>
                    <a class="link-item" href="javascript:">联系我们</a>
                </div>
            </div>
            <div class="footer-section">
                <!-- 网站可信信息 -->
                <div class="footer-trust main-width">
                    <ul class="web-cert-trust-list">
                        <li class="trust-item trust1"></li>
                        <li class="trust-item trust2"></li>
                        <li class="trust-item trust3"></li>
                        <li class="trust-item trust4"></li>
                    </ul>
                </div>
                <!-- 版权声明区域 -->
                <div class="copyright">
                    <p class="p"><span class="in-text">本站基于腾讯云服务器构建。版权所有：彩桥印刷制品有限公司。</span></p>
                    <p class="p"><span class="in-text">鄂ICP备12000690号-5 | Copyright &copy; 2012-2018, <a href="javascript:void(0);">www.colorbride.com.cn</a>, All Rights Reserve</span></p>
                </div>
            </div>
        </div>
    </div>
    <!-- E footer 脚部 E -->
</template>

<script>
    import '@/static/css/layout/footer.scss'
    export default {
        name: 'Footer'
    }
</script>

<style scoped>

</style>
