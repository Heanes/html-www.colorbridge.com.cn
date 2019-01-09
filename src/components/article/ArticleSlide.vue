<template>
    <div class="index-slide-show">
        <img src="@/public/upload/image/index/slide/article/slide_01.jpg" alt="slide_01.jpg" />
        <img src="@/public/upload/image/index/slide/article/slide_02.jpg" alt="slide_02.jpg" />
    </div>
</template>

<script>
    /* 加载幻灯要用的js css文件 */
    import '@/public/static/vendor/slick/1.9.0/slick/slick.min.js';
    import '@/public/static/vendor/slick/1.9.0/slick/slick.css';
    import '@/public/static/vendor/slick/1.9.0/slick/slick-theme.css';
    /* 加载自定义的幻灯样式 */
    import '../../pages/static/css/slide/slide.scss';

    export default {
        name: 'ArticleSlide',
        props: {
            slideList: [],
            slideOption: {}
        },
        methods: {
        },
        mounted() {
            jQuery(".index-slide-show").slick({
                dots: true,
                infinite: true,
                adaptiveHeight: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: '<a class="slick-prev"><i class="fa fa-angle-left"></i></a>',
                nextArrow: '<a class="slick-next"><i class="fa fa-angle-right"></i></a>',
                lazyLoad: 'ondemand',
            });
        }
    }
</script>
