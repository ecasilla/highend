import {ActionTypes} from '../core/Constants';
import BaseStore from './BaseStore';
import debug from 'debug';


class LoginStore extends BaseStore {

  constructor() {
    super();
    this.subscribe(() => this._registerToActions.bind(this));
    this._user = null;
  }

  _registerToActions(payload) {
    switch(payload.action.actionType) {
      case ActionTypes.LOGIN:
        debug('dev')('Login Store action: LOGIN ',payload);
        this._user = payload.action.user;
        this.emitChange();
        break;
      case ActionTypes.SIGN_UP:
        debug('dev')('Login Store action: SIGNUP ',payload);
        this._user = payload.action.user;
        this.emitChange();
        break;
      case ActionTypes.LOGOUT:
      debug('dev')('Login Store action: LOGOUT ',payload);
        this._user = null;
        this.emitChange();
        break;
      default:
        break;
    }
  }

  get user() {
    return this._user;
  }

  isLoggedIn() {
    return !!this._user;
  }
}

export default new LoginStore();
