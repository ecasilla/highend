import Dispatcher from '../core/Dispatcher.js';
import RouterContainer from '../services/RouterContainer'

export default {
  loginUser: (jwt) => {
    RouterContainer.get().transitionTo('/dashboard');
    localStorage.setItem('jwt', jwt);
    AppDispatcher.dispatch({
      actionType: LOGIN_USER,
      jwt: jwt
    });
  },
  logoutUser: () => {
    RouterContainer.get().transitionTo('/login');
    localStorage.removeItem('jwt');
    AppDispatcher.dispatch({
      actionType: LOGOUT_USER
    });
  }
}
