import debug from 'debug';
import Dispatcher from '../core/Dispatcher.js';
import RouterContainer from '../services/RouterContainer';
import LocalStorage from '../services/LocalStorage';
import {ActionTypes} from '../core/Constants';

export default {
  login (user) {
    debug('dev')('User logging in: ',user);
    LocalStorage.save('user', user);
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LOGIN,
      user: user
    });
    RouterContainer.get().transitionTo('/dashboard');
  },
  signup(user){
  debug('dev')('User signup: ',user);
    Dispatcher.handleServerAction({
      actionType: ActionTypes.SIGN_UP,
      user: user
    });
    RouterContainer.get().transitionTo('/dashboard');
  },
  logout () {
  debug('dev')('User log out: ',user);
    LocalStorage.remove('user');
    Dispatcher.handleServerAction({
      actionType: ActionTypes.LOGOUT
    });
    RouterContainer.get().transitionTo('/login');
  }
}
