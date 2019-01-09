import API from "../ajax";

export default {

    /**
     * @doc 获取头部导航
     * @param params
     * @param callback
     * @returns {*}
     */
    getNavList(params, callback) {
        return API.get("nav/list", params, callback);
    },

};
