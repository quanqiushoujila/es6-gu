/*
* @Author: kai
* @Date:   2018-01-03 10:14:55
* @Last Modified by:   kai
* @Last Modified time: 2018-01-03 13:26:49
*/


const rules = {
  email: (v) => {
    if (!v.match(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {
      return {
        type: 'email',
        msg: '验证码不正确'
      }
    }
  },

  phone: (v) => {
    if (!v.match(/^1\d{10}$/)) {
      return {
        type: 'phone',
        msg: '手机号不正确'
      }
    }
  },

  required: (v) => {
    if (!v.trim(v)) {
      return {
        type: 'required',
        msg: '必填'
      }
    }
  }
}

const checkForm = (form) => {

}