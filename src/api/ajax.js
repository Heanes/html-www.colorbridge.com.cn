import axios from "axios";

import {Notification, Loading, Message, MessageBox} from "element-ui";

//添加一个请求拦截器
axios.defaults.baseURL = "/";
// axios.defaults.timeout = 5000;
var loadinginstace;
// axios.defaults.withCredentials=true
axios.interceptors.request.use(
    config => {
        // element ui Loading方法
        // loadinginstace = Loading.service({ fullscreen: true })
        return config;
    },
    error => {
        loadinginstace.close();
        Message.error({
            message: "加载超时"
        });
        return Promise.reject(error);
    }
);

//添加一个响应拦截器
axios.interceptors.response.use(
    function (res) {
        // loadinginstace.close()
        //在这里对返回的数据进行处理
        return res;
    },
    function (err) {
        //Do something with response error
        return Promise.reject(err);
    }
);

export default {
    get(url, params, callback) {
        // params.params.user_token = getToken();
        return axios.get(url, params).then(response => {
            if (response.data.success) {
                callback && callback(response.data);
                return response.data;
            } else {
                if (typeof response.data == "string") {
                    MessageBox.confirm(response.data, "提示", {
                        confirmButtonText: "确定",
                        showCancelButton: false,
                        type: "warning"
                    });
                } else {
                    MessageBox.confirm(response.data.message, "提示", {
                        confirmButtonText: "确定",
                        showCancelButton: false,
                        type: "warning"
                    });
                }
                return null;
            }
        });
    },
    post(url, params, callback) {
        return axios.post(url, params).then(response => {
            if (response.data.success) {
                callback && callback(response.data);
                return response.data;
            } else {
                if (typeof response.data == "string") {
                    MessageBox.confirm(response.data, "提示", {
                        confirmButtonText: "确定",
                        showCancelButton: false,
                        type: "warning"
                    });
                } else {
                    MessageBox.confirm(response.data.message, "提示", {
                        confirmButtonText: "确定",
                        showCancelButton: false,
                        type: "warning"
                    });
                }

                return null;
            }
        });
    },
    put(url, params, callback) {
        return axios.put(url, params).then(response => {
            if (response.data.success) callback && callback(response);
        });
    }
};
