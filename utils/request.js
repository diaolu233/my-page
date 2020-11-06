/**
 * http配置
 */
import axios from 'axios'
import Router from 'next/router';
import qs from 'querystring'

// axios 配置
axios.defaults.timeout = 100000;
axios.defaults.withCredentials = true;  //跨域请求带上cookie
// axios.defaults.baseURL = 'http://api.yue360.cn'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Cache-Control'] = 'no-cache';
axios.defaults.headers.get['Pragma'] = 'no-cache';

// http request 拦截器
axios.interceptors.request.use(
  config => {

    if (config.headers['Content-Type']) {
      config.data = qs.stringify(config.data)
    } else if (config.method === 'post') {
      config.data = config.data
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 401 && router.currentRoute.name !== 'login') {
        Router.push('/')
    }
  /*  if (response.data.code == 1007){
      alert(response.data.message || '无权限访问')
      // location.href = API.indexUrl;
    }*/

    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          // router.replace({
          //   path: '/login',
          //   query: {redirect: router.currentRoute.fullPath}
          // })
          // location.href="www.baidu.com"
      }
    }

    // if (error.response.data.code == 1098) {
    //   location.href = API.indexUrl;
    // }

    return error.response.data
  }
)

export default axios
// import axios from 'axios';


// export default async function getTq(url) {
//   const { data } = await axios.get(url);
//   return data;
// }