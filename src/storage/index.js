const STORAGE_KEY = 'mall'
export default {
  setItem(key, value, module_name) {
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      // debugger
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  //获取其中的某个值
  getItem(key, module_name) {
    // debugger
    if (module_name) {
      let val = this.getItem(module_name);
      if (val) return val[key];
    }
    return this.getStorage()[key];
  },
  //是获取整个本地存储的内容
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY))
  },
  clear(key,module_name) {
    let val = this.getStorage();
    if(module_name) {
      delete val[module_name][key];
    }else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}