<template>
    <div class="index-slide-show" id="indexSlideShow">
        <img src="@/public/upload/image/index/slide/index/slide_01.jpg" alt="slide_01.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_02.jpg" alt="slide_02.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_03.jpg" alt="slide_03.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_04.jpg" alt="slide_04.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_05.jpg" alt="slide_05.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_06.jpg" alt="slide_06.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_07.jpg" alt="slide_07.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_08.jpg" alt="slide_08.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_09.jpg" alt="slide_09.jpg" />
        <img src="@/public/upload/image/index/slide/index/slide_10.jpg" alt="slide_10.jpg" />
    </div>
</template>

<script>
    /* 加载幻灯要用的js css文件 */
    import '@/public/static/vendor/slick/1.9.0/slick/slick.min.js';
    import '@/public/static/vendor/slick/1.9.0/slick/slick.css';
    import '@/public/static/vendor/slick/1.9.0/slick/slick-theme.css';
    /* 加载自定义的幻灯样式 */
    import '../static/css/slide/slide.scss';

    export default {
        name: 'Slide',
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
                prevArrow: '<button class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                nextArrow: '<button class="slick-next"><i class="fa fa-angle-right"></i></button>',
                lazyLoad: 'ondemand',
            });
        }
    }
</script>
