const LocalStorage = {

  save (key, data) {
    window.localStorage.setItem(key, JSON.stringify(data));
  },

  destroy (key) {
    window.localStorage.removeItem(key);
  },

  get (key) {
    var data = window.localStorage.getItem(key);
    if(data !== undefined && data !== null) {
      return JSON.parse(data);
    }

    return null;
  }

};

export default LocalStorage;
