<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="main-content container main-width">
                <div class="row">
                    <!-- 产品分类 -->
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
                                <span class="breadcrumb-text"><a href="javascript:void(0);">产品展示</a></span>
                            </div>
                            <div class="breadcrumb-cell breadcrumb-delimiter">
                                <span class="separator">/</span>
                            </div>
                            <div class="breadcrumb-cell breadcrumb-node">
                                <i class="fa fa-file-text-o"></i>
                                <span class="breadcrumb-text"><a href="javascript:void(0);">产品详情</a></span>
                            </div>
                        </div>
                        <!-- 产品详情页 -->
                        <div class="product-detail-wrap">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </layout-basic>
</template>

<script>
    import Layout from '../../_layout/normal/Layout';

    import '@/static/css/article/detail.scss';
    import '@/static/css/responsive.scss';

    import ArticleCategory from '@/components/article/Category';


    export default {
        name: 'ArticleDetail',
        components: {
            'layout-basic': Layout,
            'comp-article-category': ArticleCategory
        },
        created() {
            document.title = '文章详情';
        },
    }
</script>

<style scoped>

</style>
