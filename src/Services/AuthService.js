import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import Firebase from 'firebase';
import FireBaseService from './FireBaseService';

class AuthService {
  constructor(){
    FireBaseService = FireBaseService.ref();
  }

  errorcheck(error){
    switch (error.code) {
      case "INVALID_EMAIL":
        console.log("The specified user account email is invalid.");
        break;
      case "INVALID_PASSWORD":
        console.log("The specified user account password is incorrect.");
        break;
      case "INVALID_USER":
        console.log("The specified user account does not exist.");
        break;
      case "EMAIL_TAKEN":
        console.log("Email has been taken");
       break;
      default:
        console.log("Error logging user in:", error);
    }
  }

  login(user) {
    return new Promise( (resolve,reject) => {
    FireBaseService.authWithPassword({
      email    : user.email,
      password : user.password
    }, (error, authData) => {
      if (error) {
        errorcheck(error);
      }else{
        return authData;
      }
    });
  });
  }

  logout() {
    FireBaseService.unauth();
    LoginActions.logoutUser();
  }

  signup(payload) {
    return new Promise( (resolve,reject) => {
    FireBaseService.createUser(payload,(error, userData) => {
      if (error) {
        errorcheck(error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        return userData;
      }
    });
  });
  }

  createUserAndLogin(userObj) {
    return signup(userObj)
      .then(() => {
        return login(userObj);
    });
  }

  thirdPartyLogin(provider){
    return new Promise( (resolve,reject) => {
      FireBaseService.authWithOAuthPopup(provider,(err, user) => {
        if (err) { reject(err); }
        if (user) { resolve(user);}
      });
    });
  }

  handleAuth(loginPromise){
    return loginPromise
    .then(response => {
      var jwt = response.id_token;
      LoginActions.loginUser(jwt);
      return true;
    });
  }
}

export default new AuthService();
