import keyMirror from 'react/lib/keyMirror';

export default {

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),
  ActionTypes: keyMirror({
    CHANGE_EVENT:null,
    //Session
    LOGIN_REQUEST: null,
    LOGIN_RESPONSE: null
  }),
  Api:{
    BASE_URL:"https://flickering-inferno-6672.firebaseio.com/"
  }
};
