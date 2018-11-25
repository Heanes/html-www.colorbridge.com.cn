<template>
    <remote-js :src="this.src" @after-remote-js-load="this.remoteJsLoadCallBack"></remote-js>
</template>

<script>
    /**
     * @doc 加载远程js文件组件
     */
    export default {
        components: {
            'remote-js': {
                render(createElement) {
                    var self = this;
                    return createElement('script', {
                        attrs: {type: 'text/javascript', src: this.src},
                        on: {
                            load: function () {
                                self.$emit('after-remote-js-load', self.src)
                            }
                        }
                    })
                },
                props: {
                    src: {type: String, required: true}
                }
            }
        },
        props: {
            src: {type: String, required: true},// 需要加载的外部url
            // 外部js加载完成回调
            remoteJsLoadCallBack: {
                type: Function,
                default: function (data) {
                    console.log('load js:', data);
                }
            }
        }
    }
</script>
