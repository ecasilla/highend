import Dispatcher from '../core/Dispatcher.js';
import RouterContainer from '../services/RouterContainer';
import LocalStorage from '../services/LocalStorage';

export default {
  loginUser (user) {
    RouterContainer.get().transitionTo('/dashboard');
    LocalStorage.save('user', user);
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      user: user
    });
  },
  signup(user){
    RouterContainer.get().transitionTo('/dashboard');
    AppDispatcher.dispatch({
      actionType: SIGN_UP,
      user: user
    });
  },
  logoutUser () {
    RouterContainer.get().transitionTo('/login');
    LocalStorage.remove('user');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
