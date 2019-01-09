import API from "../ajax";

export default {

    /**
     * @doc 获取文章列表
     * @param params
     * @param callback
     * @returns {*}
     */
    getList(params, callback) {
        return API.get("article/list", params, callback);
    },

    /**
     * @doc 获取文章详情
     * @param params
     * @param callback
     * @returns {*}
     */
    getDetail(params, callback) {
        return API.get("article/detail", params, callback);
    },
};
