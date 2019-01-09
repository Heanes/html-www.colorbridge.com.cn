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
                                <ul class="team-service-list main-width">
                                    <li v-for="(item, index) in teamServiceList" class="item">
                                        <div class="card service-card">
                                            <div class="img-cover-wrap">
                                                <img class="img-cover" :src="item.coverImgSrc" alt="">
                                            </div>
                                            <div class="item-info">
                                                <h3 class="title">{{item.clerkName}}</h3>
                                                <div class="description">
                                                    <p>{{item.description}}</p>
                                                    <p class="service-hot-line">服务热线: <span class="hot-line-phone">{{item.hotLinePhone}}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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
                                <div class="show-more-wrap main-width">
                                    <a class="show-more" href="javascript:">查看更多+</a>
                                </div>
                                <ul class="cooperation-case-list main-width">
                                    <li v-for="(item, index) in cooperationCaseList" class="item">
                                        <div class="card case-card">
                                            <div class="img-cover-wrap">
                                                <img class="img-cover" :src="item.coverImgSrc" alt="">
                                            </div>
                                            <div class="item-info">
                                                <div class="description">
                                                    <p>{{item.description}}</p>
                                                </div>
                                                <dl class="meta-info">
                                                    <dt class="meta-field">发布日期</dt>
                                                    <dd class="meta-value">{{item.publishTimeFormative}}2018-12-02</dd>
                                                    <dt class="meta-field"><i class="fa fa-eye"></i></dt>
                                                    <dd class="meta-value">{{item.clickCount}}3253</dd>
                                                </dl>
                                                <h3 class="title">{{item.title}}</h3>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
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
                                                <a class="item-image" href="../equipment/detail.html">
                                                    <img class="img" src="@/public/upload/image/equipment/equipment_01.jpg" alt="">
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
                                                <a class="item-image" href="../equipment/detail.html">
                                                    <img class="img" src="@/public/upload/image/equipment/equipment_02.jpg" alt="">
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
                                                <a class="item-image" href="../equipment/detail.html">
                                                    <img class="img" src="@/public/upload/image/equipment/equipment_03.jpg" alt="">
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
                            <div class="news-list-wrap main-width">
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
                                            <li class="news-item">
                                                <a class="new-link" href="../article/detail.html">怎么解决印刷中咬色串色的技术难题？<span class="news-date">2018-10-15</span></a>
                                            </li>
                                            <li class="news-item">
                                                <a class="new-link" href="../article/detail.html">浅析什么是个性化印刷？<span class="news-date">2018-10-15</span></a>
                                            </li>
                                        </ul>
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

    import $ from 'jquery';

    import '@/public/static/vendor/slick/1.9.0/slick/slick.min.js';
    import '@/public/static/vendor/slick/1.9.0/slick/slick.css';
    import '@/public/static/vendor/slick/1.9.0/slick/slick-theme.css';

    import '../static/css/index/index.scss';
    import '../static/css/responsive.scss';

    export default {
        name: 'Index',
        data() {
            return {
                pageTitle: '首页',
                teamServiceList: [],    // 团队服务
                cooperationCaseList: [] // 合作案例
            }
        },
        components: {
            'layout-basic': Layout,
            'comp-slide': Slide,
        },
        methods: {
            // 团队服务
            getTeamServiceList() {
                return [
                    {
                        id: 1,
                        coverImgSrc: require('@/public/upload/image/clerk/clerk_01.jpg'),
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        clerkName: '王意涵',
                        hotLinePhone: '400-888-8888'
                    }, {
                        id: 1,
                        coverImgSrc: require('@/public/upload/image/clerk/clerk_02.jpg'),
                        clerkName: '郑海川',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        hotLinePhone: '400-888-8888'
                    },{
                        id: 1,
                        coverImgSrc: require('@/public/upload/image/clerk/clerk_03.jpg'),
                        clerkName: '李斌',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        hotLinePhone: '400-888-8888'
                    },
                    {
                        id: 1,
                        coverImgSrc: require('@/public/upload/image/clerk/clerk_04.jpg'),
                        clerkName: '王奕斐',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        hotLinePhone: '400-888-8888'
                    },
                    {
                        id: 1,
                        coverImgSrc: require('@/public/upload/image/clerk/clerk_05.jpg'),
                        clerkName: '李瀚斯',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        hotLinePhone: '400-888-8888'
                    }
                ];
            },
            // 获取合作案例
            getCooperationCaseList() {
                return [
                    {
                        id: 1,
                        coverImgSrc: require('@/public/upload/image/case/case_01.jpg'),
                        title: '交易中心宣传样本印刷',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    }, {
                        id: 2,
                        coverImgSrc: require('@/public/upload/image/case/case_02.jpg'),
                        title: '系列儿童图书印刷加工服务',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    },{
                        id: 3,
                        coverImgSrc: require('@/public/upload/image/case/case_03.jpg'),
                        title: '出版物印刷与装帧加工',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    },
                    {
                        id: 4,
                        coverImgSrc: require('@/public/upload/image/case/case_04.jpg'),
                        title: '企业画册设计',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    },
                    {
                        id: 5,
                        coverImgSrc: require('@/public/upload/image/case/case_05.jpg'),
                        title: '只为遇见最美的儿童故事书',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    },
                    {
                        id: 6,
                        coverImgSrc: require('@/public/upload/image/case/case_06.jpg'),
                        title: '儿童书印刷6年风雨历程',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    },
                    {
                        id: 7,
                        coverImgSrc: require('@/public/upload/image/case/case_07.jpg'),
                        title: '印刷公司与笔记本的故事',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    },
                    {
                        id: 8,
                        coverImgSrc: require('@/public/upload/image/case/case_08.jpg'),
                        title: '精装书印刷及装帧加工服务',
                        description: '每一个客户我都是十分真诚简单的对待，我相信用心做事一定能收获意想不到的成果',
                        publishTimeFormative: '2018-12-02',
                        clickCount: 1243
                    }
                ];
            }

        },
        mounted() {
            let $teamServiceList = $('.team-service-list');
            let rz = [4, 4, 2, 1];
            $teamServiceList.slick({
                autoplay: true,
                autoplaySpeed: 4000,
                dots: !1,
                speed: 500,
                prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
                slidesToShow: rz[0],
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: rz[1]
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: rz[2]
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: rz[3]
                        }
                    }
                ]
            });

            let $cooperationCaseList = $('.cooperation-case-list');
            $cooperationCaseList.slick({
                autoplay: true,
                autoplaySpeed: 4000,
                dots: !1,
                speed: 500,
                prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
                slidesToShow: rz[0],
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1600,
                        settings: {
                            slidesToShow: rz[1]
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: rz[2]
                        }
                    }, {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: rz[3]
                        }
                    }
                ]
            })
        },
        created() {
            document.title = this.pageTitle;
            this.teamServiceList = this.getTeamServiceList();
            this.cooperationCaseList = this.getCooperationCaseList();
        },
    }
</script>

<style scoped>

</style>
