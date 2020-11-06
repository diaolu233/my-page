
import request from '../utils/request';
export  async function getUserCountry() {
    return request({
        url:'/v1/common/getUserCountry',
        method:'get'

    })
  }