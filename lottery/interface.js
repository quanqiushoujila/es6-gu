/*
* @Author: kai
* @Date:   2017-12-29 09:16:32
* @Last Modified by:   kai
* @Last Modified time: 2017-12-29 09:44:14
*/
import $ from 'jquery';

class Interface {

  /**
   * [getOmit 获取遗漏数据]
   * @param  {[type]} issue [当前期号]
   * @return {[type]}       [description]
   */
  getOmit (issue) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/omit',
        data: {
          issus: issus
        },
        dataType: 'json',
        success: function (res) {
          self.setOmit(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      });
    })
  }

  /**
   * [getOpenCode 获取开奖号码]
   * @param  {[type]} issus [当前期号]
   * @return {[type]}       [description]
   */
  getOpenCode (issus) {
    let self = this;
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/get/state',
        data: {
          issus: issus
        },
        dataType: 'json',
        success: function (res) {
          self.setOpenCode(res.data);
          resolve.call(self, res);
        },
        error: function (err) {
          reject.call(err);
        }
      });
    });
  }
}

export default Interface;