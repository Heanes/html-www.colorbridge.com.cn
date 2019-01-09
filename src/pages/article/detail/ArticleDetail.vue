<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="main-content container main-width">
                <div class="row">
                    <!-- 文章分类 -->
                    <comp-article-category class="col-4-1 page-left"></comp-article-category>
                    <!-- 文章详情页 -->
                    <div class="col-4-3 page-right">
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
                        <div class="article-detail-wrap">
                            <div class="article-title">
                                <h1 class="title">新闻标题</h1>
                                <div class="article-meta-info">
                                    <span class="meta-item post-time"><i class="fa fa-clock-o"></i><span>2018-11-24 20:49:28 周六</span></span>
                                    <span class="meta-item read-count"><i class="fa fa-eye"></i><span>3454</span></span>
                                </div>
                            </div>
                            <div class="article-content">
                                <p>现在已经不是买一台印刷机就能行走天下的时代，印刷企业需要开动脑筋，更多地加入新鲜元素——创意。这种创意不仅仅是思维上的创新，也包含通过设备技术改造将业务范围拓宽。而数码印刷适应市场印量越来越小、短版化的需求，还因为其环保、节约成本的特点成为未来印刷市场的必然趋势。与此同时，数码印刷更以其独有的数字化方式给传统印刷企业开拓出了各种意想不到的“创意”。佳能（中国）有限公司生产型及印艺产品部总经理罗杰就数码印刷的创意话题接受了《中国新闻出版报》记者的采访，并向记者介绍了经典应用案例。</p>
                                <p>谈到印刷行业的创意产业，人们首先想到的就是文化创意产业项目，例如艺术品复制、厂房创意改造、企业多媒体形式尝试等，每种类型都有典型代表企业，并且得到了国家的资金支持。</p>
                                <p>除此之外，数码印刷设备的数字化从技术上也给企业开创了更多的可能。而且其作为传统企业新的赢利点，可以带给企业差异化竞争优势，创意的加入可以令企业逃脱竞争红海，创造新的附加值。罗杰说，未来是否可以提供个性化产品、创新产品，成为印刷企业在竞争中是否拿下制高点的关键所在。但前提是，对数字技术的充分认可和接受。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../../_layout/normal/Layout';

    import '../../static/css/article/detail.scss';
    import '../../static/css/responsive.scss';
    import '../../static/css/responsive.scss';

    import ArticleCategory from '@/components/article/Category';


    export default {
        name: 'ArticleDetail',
        data() {
            return {
                pageTitle: '文章详情'
            }
        },
        components: {
            'layout-basic': Layout,
            'comp-article-category': ArticleCategory
        },
        created() {
            document.title = this.pageTitle;
        },
    }
</script>

<style scoped>

</style>
