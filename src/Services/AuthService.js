import LoginActions from '../actions/LoginActions';
import Firebase from 'firebase';
import debug from 'debug';
import FBService from './FireBaseService';

class AuthService {
  constructor(){
   this.FireBaseService = new FBService().ref();
  }

  errorcheck(error){
    switch (error.code) {
      case "INVALID_EMAIL":
        debug('dev')("The specified user account email is invalid.");
        break;
      case "INVALID_PASSWORD":
        debug('dev')("The specified user account password is incorrect.");
        break;
      case "INVALID_USER":
        debug('dev')("The specified user account does not exist.");
        break;
      case "EMAIL_TAKEN":
        debug('dev')("Email has been taken");
        break;
      default:
        debug('dev')("Error logging user in:", error);
    }
  }

  login(user) {
    return new Promise( (resolve,reject) => {
      this.FireBaseService.authWithPassword({
        email    : user.email,
        password : user.password
      }, (error, authData) => {
        if (error || !authData) {
          debug('err')("Error login ", error);
          this.errorcheck(error);
          return reject(err);
        }else{
          debug('dev')("Successfully logged in user account: ", authData);
          LoginActions.login(authData);
          return resolve(authData);
        }
      });
    });
  }

  logout() {
    debug('dev')("Successfully logged out user account: ", userData);
    FireBaseService.unauth();
    LoginActions.logoutUser();
  }

  signup(payload) {
    return new Promise( (resolve,reject) => {
      this.FireBaseService.createUser(payload,(error, userData) => {
        if (error || !userData) {
          debug('err')("Error signup ", error);
          this.errorcheck(error);
          return reject(err);
        } else {
          debug('dev')("Successfully created user account: ", userData);
          LoginActions.signup(userData);
          return resolve(userData);
        }
      });
    });
  }

  createUserAndLogin(userObj) {
    return this.signup(userObj)
    .then(() => {
      return this.login(userObj);
    });
  }

  thirdPartyLogin(provider){
    return new Promise( (resolve,reject) => {
      this.FireBaseService.authWithOAuthPopup(provider,(err, user) => {
        if (err) { reject(err); }
        debug('err')("Error third party login ", err);
        if (!err && user) {
          debug('dev')('Logged in with: ' + provider,user);
          LoginActions.login(user);
          return resolve(user);
        }
      });
    });
  }
}
export default new AuthService();
