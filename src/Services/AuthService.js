import {LOGIN_URL, SIGNUP_URL} from '../constants/LoginConstants';
import LoginActions from '../actions/LoginActions';
import Firebase from 'firebase';
import FireBaseService from './FireBaseService';

class AuthService {
  constructor(){
    FireBaseService = FireBaseService.get_ref();
  }

  login(username, password) {
    FireBaseService.authWithPassword({
      email    : "bobtony@firebase.com",
      password : "correcthorsebatterystaple"
    }, (error, authData) => {
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
        case "EMAIL_TAKEN"
        console.log("Email has been taken");
         break;
        default:
          console.log("Error logging user in:", error);
      }
    });
  }

  logout() {
    FireBaseService.unauth();
    LoginActions.logoutUser();
  }

  signup(payload) {
    FireBaseService.createUser(payload,(error, userData) => {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }

  createUserAndLogin(userObj) {
    return createUser(userObj)
    .then(=> {
      return authWithPassword(userObj);
    });
  }

  thirdPartyLogin(provider) {
    var deferred = Promise.deferred();
    FireBaseService.authWithOAuthPopup(provider,(err, user) => {
      if (err) {
        deferred.reject(err);
      }
      if (user) {
        deferred.resolve(user);
      }
    });
    return deferred.promise();
  }

  handleAuth(loginPromise) {
    return loginPromise
    .then(response => {
      var jwt = response.id_token;
      LoginActions.loginUser(jwt);
      return true;
    });
  }
}

export default new AuthService();
