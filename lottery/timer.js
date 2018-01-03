/*
 * @Author: kai
 * @Date:   2017-12-29 09:16:32
 * @Last Modified by:   kai
 * @Last Modified time: 2017-12-29 09:43:28
 */
class Timer {
  countdown(end, updata, handle) {
    const now = new Date().getTime();
    const self = this;
    if (now - end) {
      handle.call(self);
    } else {
      let last_time = end - now;
      const px_d = 1000 * 60 * 60 * 24;
      const px_h = 1000 * 60 * 60;
      const px_m = 1000 * 60;
      const px_s = 1000;
      let d = Math.floor(last_time / px_d);
      let h = Math.floor((last_time - d * px_d) / px_d);
      let m = Math.floor((last_time - d * px_d - h * px_h) / px_d);
      let s = Math.floor((last_time - d * px_d - h * px_h - m * px_m) / px_d);
      let r = [];
      if (d > 0) {
        r.push(`<em>${d}</em>天`);
      }
      if (r.length || h > 0) {
        r.push(`<em>${h}</em>时`);
      }
      if (r.length || s > 0) {
        r.push(`<em>${s}</em>秒`);
      }
      self.last_time = r.join('');
      update.call(self, r.join(''));
      setTimeout(function () {
        self.countdown(end, update, handle);
      }, 1000);
    }
  }
}

export default Timer;