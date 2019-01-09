<template>
    <layout-basic>
        <div class="main" slot="main">
            <div class="main-content container main-width">
                <div class="article-slide">
                    <comp-article-slide></comp-article-slide>
                </div>
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
                        </div>
                        <!-- 产品列表 -->
                        <div class="product-list-wrap">
                            <ul class="product-list">
                                <li v-for="(product, index) in productList" class="product-item">
                                    <div class="card card-show">
                                        <a class="card-header" href="../product/detail.html">
                                            <img class="cover-img" :src="product.coverImg" alt="">
                                        </a>
                                        <h4 class="card-title">{{product.title}}</h4>
                                    </div>
                                </li>
                            </ul>
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

    import '../../static/css/product/list.scss';
    import '../../static/css/responsive.scss';

    export default {
        name: 'ArticleList',
        data() {
            return {
                pageTitle: '产品列表',
                productList: []
            }
        },
        computed: {

        },
        mounted() {
            this.productList = this.getProductList();
        },
        methods: {
            getProductList(){
                return [
                    {
                        id: 1,
                        title: 'A3-DM(大度8开双面)',
                        coverImg: require('@/public/upload/image/product/product_01.jpg')
                    },
                    {
                        id: 2,
                        title: '封页157克/内页157克',
                        coverImg: require('@/public/upload/image/product/product_02.jpg')
                    },
                    {
                        id: 3,
                        title: '157克铜版/牙粉纸/单面',
                        coverImg: require('@/public/upload/image/product/product_03.jpg')
                    },
                    {
                        id: 4,
                        title: '儿童创意板仔书印刷',
                        coverImg: require('@/public/upload/image/product/product_04.jpg')
                    },
                    {
                        id: 5,
                        title: '儿童手提套装书盒印刷',
                        coverImg: require('@/public/upload/image/product/product_05.jpg')
                    },
                    {
                        id: 6,
                        title: '平装儿童板仔书印刷',
                        coverImg: require('@/public/upload/image/product/product_06.jpg')
                    },
                    {
                        id: 7,
                        title: '平装儿童故事书印刷',
                        coverImg: require('@/public/upload/image/product/product_07.jpg')
                    },
                    {
                        id: 8,
                        title: '锁线胶装书印刷',
                        coverImg: require('@/public/upload/image/product/product_08.jpg')
                    },
                    {
                        id: 9,
                        title: '拍头笔记本印刷',
                        coverImg: require('@/public/upload/image/product/product_09.jpg')
                    },
                    {
                        id: 10,
                        title: '硬壳方脊装帧布精装书印刷',
                        coverImg: require('@/public/upload/image/product/product_10.jpg')
                    },
                    {
                        id: 11,
                        title: '装帧布精装书印刷',
                        coverImg: require('@/public/upload/image/product/product_11.jpg')
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
            document.title = this.pageTitle;
        }
    }
</script>

