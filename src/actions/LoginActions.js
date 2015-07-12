import Dispatcher from '../core/Dispatcher.js';
import RouterContainer from '../services/RouterContainer';
import LocalStorage from '../services/LocalStorage';

export default {
  login (user) {
    LocalStorage.save('user', user);
    Dispatcher.handleServerAction({
      actionType: LOGIN_USER,
      user: user
    });
    RouterContainer.get().transitionTo('/dashboard');
  },
  signup(user){
    Dispatcher.handleServerAction({
      actionType: SIGN_UP,
      user: user
    });
    RouterContainer.get().transitionTo('/dashboard');
  },
  logout () {
    LocalStorage.remove('user');
    Dispatcher.handleServerAction({
      actionType: LOGOUT_USER
    });
    RouterContainer.get().transitionTo('/login');
  }
}
