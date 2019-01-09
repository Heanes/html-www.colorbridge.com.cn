<template>
    <div id="app">
        <comp-header></comp-header>
        <slot name="main"></slot>
        <comp-footer></comp-footer>
    </div>
</template>

<script>
    import CompHeader from '../../_layout/normal/Header';
    import CompFooter from '../../_layout/normal/Footer';
    import '../../static/css/style/style-2018.scss';
    import '../../static/css/common.scss';

    export default {
        name: 'Layout',
        components: {
            'comp-header': CompHeader,
            'comp-footer': CompFooter
        }
    }
</script>

<style scoped>

</style>
