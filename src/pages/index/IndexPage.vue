<template>
    <layout-basic>
        <div class="main" slot="main">
            <!-- S main-top 主体顶部全宽度内容区域 S -->
            <div class="main-top">
                <!-- S 主页幻灯 S -->
                <comp-slide/>
                <!-- E 主页幻灯 E -->
            </div>
            <!-- E main-top 主体顶部全宽度内容区域 E -->
            <div class="main-wrap">
                <!-- S 主体顶部内容 S -->
                <div class="main-content-top"></div>
                <!-- E 主体顶部内容 E -->
                <!-- S 主体内容 S -->
                <div class="main-content clearfix">
                    <!-- S 中心-左侧边栏区域 S -->
                    <div class="left-wrap fl">
                        <div class="left-content"></div>
                    </div>
                    <!-- E 中心-左侧边栏区域 E -->
                    <!-- S 中心区域 S -->
                    <div class="center-wrap fl">
                        <div class="center-content">
                            <!-- 服务团队 -->
                            <div class="feature-item team-service">
                                <div class="title">
                                    <h3 class="main-title">专业顾问团队，竭诚为您服务</h3>
                                    <h4 class="sub-title">贴心为您服务，快捷实现您的需求</h4>
                                </div>
                            </div>
                            <!-- 服务特色 -->
                            <div class="feature-item service-feature">
                                <div class="title">
                                    <h3 class="main-title">全方位流程为您服务</h3>
                                    <h4 class="sub-title">知道详细服务流程,办理简单效率</h4>
                                </div>
                                <ul class="service-feature-list main-width">
                                    <li class="item">
                                        <i class="icon fa fa-comments" aria-hidden="true">
                                            <span class="num">01</span>
                                        </i>
                                        <h3 class="item-title">售前咨询</h3>
                                        <p class="item-content">下单5分钟之内响应，
                                            及时了解需求
                                        </p>
                                    </li>
                                    <li class="item">
                                        <i class="icon fa fa-file-text" aria-hidden="true">
                                            <span class="num">02</span>
                                        </i>
                                        <h3 class="item-title">定制方案</h3>
                                        <p class="item-content">根据您的需求，客户专员会制定一套详细的服务方案</p>
                                    </li>
                                    <li class="item">
                                        <i class="icon fa fa-user-plus" aria-hidden="true">
                                            <span class="num">03</span>
                                        </i>
                                        <h3 class="item-title">一对一服务</h3>
                                        <p class="item-content">进度专员、材料专员、 外勤人员为您 办理相关事宜</p>
                                    </li>
                                    <li class="item">
                                        <i class="icon fa fa-users" aria-hidden="true">
                                            <span class="num">04</span>
                                        </i>
                                        <h3 class="item-title">合同洽谈</h3>
                                        <p class="item-content">如果您对我们的方案和服务认可，进行洽谈合同事宜</p>
                                    </li>
                                    <li class="item">
                                        <i class="icon fa fa-check-square-o" aria-hidden="true">
                                            <span class="num">05</span>
                                        </i>
                                        <h3 class="item-title">确认签单</h3>
                                        <p class="item-content">双方对合同和条款都没有异议，确认签单</p>
                                    </li>
                                    <li class="item">
                                        <i class="icon fa fa-code-fork" aria-hidden="true">
                                            <span class="num">06</span>
                                        </i>
                                        <h3 class="item-title">售后服务</h3>
                                        <p class="item-content">我们会高效准确的为您提供优质的售后服务</p>
                                    </li>
                                </ul>
                            </div>
                            <!-- 合作案例 -->
                            <div class="feature-item cooperation-case">
                                <div class="title">
                                    <h3 class="main-title">合作案例</h3>
                                    <h4 class="sub-title">每一个客户的服务我们都精益求精</h4>
                                </div>
                            </div>
                            <!-- 厂房设备 -->
                            <div class="feature-item factory-equipment">
                                <div class="title">
                                    <h3 class="main-title">厂房设备展示</h3>
                                    <h4 class="sub-title">新设备，新科技，更高端更精准</h4>
                                </div>
                                <ul class="equipment-list main-width">
                                    <li class="item">
                                        <div class="item-content">
                                            <div class="item-image-cover">
                                                <a class="item-image" href="../product/equipment.html">
                                                    <img class="img" src="@/upload/image/equipment/equipment_01.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="item-detail">
                                                <div class="item-name">
                                                    <h4 class="title">瓦楞盒裱瓦机</h4>
                                                </div>
                                                <div class="item-desc">
                                                    <p>1.真空吸盘式飞达送纸系统，可将纸张准确送入机器中；循环堆纸架可在不停机的状态下堆好下一批面纸，让效率更高。
                                                        <br>2.底纸采用吸气自动进纸，可根据人工送面纸的速度，自动同步跟踪。
                                                        <br>3.全新概念弹性前规定位，定位精度高，底纸不超前。
                                                        <br>4.整机采用触摸屏/PLC/伺服电机控制系统，电路系统运行稳定，并能自动显示故障报警。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item">
                                        <div class="item-content">
                                            <div class="item-image-cover">
                                                <a class="item-image" href="../product/equipment.html">
                                                    <img class="img" src="@/upload/image/equipment/equipment_02.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="item-detail">
                                                <div class="item-name">
                                                    <h4 class="title">全自动覆膜机</h4>
                                                </div>
                                                <div class="item-desc">
                                                    <p>全自动覆膜机具有自动送纸、两级除粉、自动搭边系统、自动分切、磁粉张力控制、整机机电一体化控制;特有的气动张膜、热吹风自动恒温控制，高效，安全，节能，备受广大用户的肯定。　　在技术水平发达的时代，全自动覆膜机代替传统的覆膜机，不用人工放纸。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="item">
                                        <div class="item-content">
                                            <div class="item-image-cover">
                                                <a class="item-image" href="../product/equipment.html">
                                                    <img class="img" src="@/upload/image/equipment/equipment_03.jpg" alt="">
                                                </a>
                                            </div>
                                            <div class="item-detail">
                                                <div class="item-name">
                                                    <h4 class="title">uv工艺机</h4>
                                                </div>
                                                <div class="item-desc">
                                                    <p>UV油墨，是指经UV光线照射瞬间固化的油墨。UV油墨已经涵盖胶印、丝网、喷墨、移印等领域，传统印刷界泛指的UV是印品效果工艺，就是在一张印上你想要的图案上面裹上一层光油 (有亮光、哑光、镶嵌晶体、金葱粉等)，主要是增加产品亮度与艺术效果。</p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <!-- 新闻资讯 -->
                            <!-- 做成tab形式 -->
                            <div class="news-wrap">
                                <div class="news-group main-width">
                                    <div class="item-wrap">
                                        <div class="news-group-item">
                                            <h3 class="group-item-title"><span class="title-border-vertical"></span>公司新闻</h3>
                                            <ul class="news-list">
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">台历挂历制作印刷掀起复古风<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">数字印刷与标签印刷前景可观<span class="news-date">2018-10-15</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item-wrap">
                                        <div class="news-group-item">
                                            <h3 class="group-item-title"><span class="title-border-vertical"></span>行业动态</h3>
                                            <ul class="news-list">
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">标签印刷的绿色时代已来临<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">印刷电子市场潜力巨大商机无限<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">探析印刷与网络的结合是必然<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">印刷机械首次列入机电出口重点行业<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">金融危机之下如何找到合适的产品说明书印刷供应商？<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">如何降低彩色样本印刷的成本？<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">产品说明书印刷厂的报价技巧<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">数码印刷颠覆明信片印刷传统<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">数码印刷颠覆明信片印刷传统<span class="news-date">2018-10-15</span></a>
                                                </li>
                                                <li class="news-item">
                                                    <a class="new-link" href="../article/detail.html">数码印刷颠覆明信片印刷传统<span class="news-date">2018-10-15</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="item-wrap">
                                        <div class="news-group-item">
                                            <h3 class="group-item-title"><span class="title-border-vertical"></span>常见问题</h3>
                                            <ul class="news-list">
                                                <li></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- E 中心区域 E -->
                    <!-- S 中心-右侧边栏区域 S -->
                    <div class="right-wrap fl">
                        <div class="right-content"></div>
                    </div>
                    <!-- E 中心-右侧边栏区域 E -->
                </div>
                <!-- S 主体底部区域 S -->
                <div class="main-content-bottom"></div>
                <!-- E 主体底部区域 E -->
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../_layout/normal/Layout';
    import Slide from './Slide';

    import '@/static/css/index/index.scss';
    import '@/static/css/responsive.scss';

    export default {
        name: 'Index',
        data() {
            return {
                pageTitle: '首页'
            }
        },
        components: {
            'layout-basic': Layout,
            'comp-slide': Slide,
        },
        methods: {

        },
        mounted() {
        },
        created() {
            document.title = '首页';
        },
    }
</script>

<style scoped>

</style>
