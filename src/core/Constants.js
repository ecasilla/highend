import keymirror from 'react/lib/keyMirror';

export default {

  PayloadSources: keymirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  ActionTypes: keymirror({
    CHANGE_EVENT:null,
    //Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null
  }),
  Api:{
    BASE_URL:"https://flickering-inferno-6672.firebaseio.com/"
  }
};
