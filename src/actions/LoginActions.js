import Dispatcher from '../core/Dispatcher.js';
import RouterContainer from '../services/RouterContainer';
import LocalStorage from '../services/LocalStorage';

export default {
  loginUser (user) {
    LocalStorage.save('user', user);
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      user: user
    });
    RouterContainer.get().transitionTo('/dashboard');
  },
  signup(user){
    AppDispatcher.dispatch({
      actionType: SIGN_UP,
      user: user
    });
    RouterContainer.get().transitionTo('/dashboard');
  },
  logoutUser () {
    LocalStorage.remove('user');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
    RouterContainer.get().transitionTo('/login');
  }
}
