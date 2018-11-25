<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="main-content container main-width">
                <div class="article-slide">
                    <comp-article-slide></comp-article-slide>
                </div>
                <div class="row">
                    <!-- 文章分类 -->
                    <comp-article-category class="col-4-1 page-left"></comp-article-category>
                    <div class="col-4-3 page-right">
                        <!-- 面包屑导航 -->
                        <div class="page-breadcrumb breadcrumb-wrap">
                            <div class="breadcrumb-cell breadcrumb-node breadcrumb-root">
                                <i class="fa fa-home"></i>
                                <span class="breadcrumb-text"><a href="javascript:void(0);">首页</a></span>
                            </div>
                            <div class="breadcrumb-cell breadcrumb-delimiter">
                                <span class="separator">/</span>
                            </div>
                            <div class="breadcrumb-cell breadcrumb-node">
                                <i class="fa fa-file-text-o"></i>
                                <span class="breadcrumb-text"><a href="javascript:void(0);">新闻资讯</a></span>
                            </div>
                        </div>
                        <!-- 文章列表 -->
                        <div class="article-list">
                            <div v-for="(articleItem, index) in articleList" class="article-item">
                                <!-- 左侧图片 -->
                                <div class="item-left">
                                    <a href="../article/detail.html">
                                        <img class="article-cover-img" :src="articleItem.coverImg" alt="">
                                    </a>
                                </div>
                                <!-- 右侧文字 -->
                                <div class="item-right">
                                    <h2 class="article-title"><a href="../article/detail.html">{{articleItem.title}}</a></h2>
                                    <div class="article-content-brief">
                                        <p>{{articleItem.brief}}</p>
                                    </div>
                                    <div class="meta-info">
                                        <span class="meta-item"><a class="btn btn-primary" href="../article/detail.html">查看更多</a></span>
                                        <span class="meta-item post-time"><i class="fa fa-clock-o"></i><span>{{articleItem.postTimeFormative}}</span></span>
                                        <span class="meta-item read-count"><i class="fa fa-eye"></i><span>{{articleItem.readCount}}</span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 分页 -->
                        <div class="pagination-wrap">
                            <ul class="pagination">
                                <li class="page-item prev-page">
                                    <a class="page-link disabled" href="javascript:;">上一页</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link current" href="javascript:;">1</a>
                                </li>
                                <li class="page-item next-page">
                                    <a class="page-link disabled" href="javascript:;">下一页</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../../_layout/normal/Layout';
    import ArticleCategory from '@/components/article/Category';
    import ArticleSlide from '@/components/article/ArticleSlide';

    import '@/static/css/article/list.scss';
    import '@/static/css/responsive.scss';

    export default {
        name: 'ArticleList',
        data() {
            return {
                articleList: []
            }
        },
        computed: {

        },
        mounted() {
            this.articleList = this.getArticleList();
        },
        methods: {
            getArticleList(){
                return [
                    {
                        id: 1,
                        title: '数码印刷，打开创意之门',
                        brief: '现在已经不是买一台印刷机就能行走天下的时代，印刷企业需要开动脑筋，更多地加入新鲜元素——创意。这种创意不仅仅是思维上的创新，也包含通过设备技术改造将业务范围拓宽。而数码印刷适应市场印量越来越小、短版化的需求，还因为其环保、节约成本的特点成为未来印刷市场的必然趋势。与此同时，数码印刷更以其独有的数字化方式给传统印刷企业开拓出了各种意想不到的“创意”。',
                        postTimeFormative: '2018-11-24 17:24:47',
                        readCount: 4443,
                        coverImg: require('@/upload/image/article/cover/cover_01.jpg')
                    },
                    {
                        id: 2,
                        title: '数码印刷，打开创意之门',
                        brief: '现在已经不是买一台印刷机就能行走天下的时代，印刷企业需要开动脑筋，更多地加入新鲜元素——创意。这种创意不仅仅是思维上的创新，也包含通过设备技术改造将业务范围拓宽。而数码印刷适应市场印量越来越小、短版化的需求，还因为其环保、节约成本的特点成为未来印刷市场的必然趋势。与此同时，数码印刷更以其独有的数字化方式给传统印刷企业开拓出了各种意想不到的“创意”。',
                        postTimeFormative: '2018-11-24 17:24:47',
                        readCount: 4443,
                        coverImg: require('@/upload/image/article/cover/cover_02.jpg')
                    }
                ];
            }
        },
        components: {
            'layout-basic': Layout,
            'comp-article-category': ArticleCategory,
            'comp-article-slide': ArticleSlide
        },
        created() {
            document.title = '新闻列表';
        }
    }
</script>

