<template>
    <div class="contact-us-container">
        <div class="contact-us main-width">
            <div class="title-wrap">
                <h2 class="title">联系我们</h2>
                <p class="contact-address">广东省东莞市</p>
            </div>
            <div class="content-wrap">
                <div class="contact-form-wrap">
                    <form action="javascript:">
                        <div class="form-group">
                            <label for="serviceType">
                                <select name="service-type" id="serviceType" class="form-control">
                                    <option value="">您想要什么服务类型？</option>
                                    <option value="1">我想工商注册</option>
                                    <option value="2">我想代理记账</option>
                                    <option value="3">我想社保服务</option>
                                </select>
                            </label>
                        </div>
                        <div class="form-group">
                            <label for="serviceType">
                                <select name="service-type" class="form-control">
                                    <option value="">您想要什么服务类型？</option>
                                    <option value="1">我想工商注册</option>
                                    <option value="2">我想代理记账</option>
                                    <option value="3">我想社保服务</option>
                                </select>
                            </label>
                        </div>
                    </form>
                </div>
                <div class="contact-info-wrap">
                    <div class="logo-image"></div>
                    <div class="contact-info">
                        <p>免费服务热线</p>
                        <p><a href="tel:888-888-888">888-888-888</a></p>
                        <p>服务QQ: 66668888 咨询时间：08:00 ~ 21:00</p>
                        <p>您也可以拨打： 056-2454354</p>
                        <p>服务时间：08:00 ~ 21:00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import '@/pages/static/css/index/contact.scss';
    export default {
        name: 'ContactUs'
    }
</script>

<style scoped>

</style>
