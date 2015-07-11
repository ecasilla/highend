import LoginActions from '../actions/LoginActions';
import Firebase from 'firebase';
import FBService from './FireBaseService';

class AuthService {
  constructor(){
   this.FireBaseService = new FBService().ref();
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
      this.FireBaseService.authWithPassword({
        email    : user.email,
        password : user.password
      }, (error, authData) => {
        if (error || !userData) {
          this.errorcheck(error);
        }else{
          console.log("Successfully logged in user account: ", authData);
          LoginActions.loginUser(authData);
          return true;
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
      this.FireBaseService.createUser(payload,(error, userData) => {
        if (error || !userData) {
          this.errorcheck(error);
        } else {
          console.log("Successfully created user account: ", userData);
          LoginActions.signup(userData);
          return true;
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
        if (!err && user) {
          LoginActions.login(user);
          return true;
        }
      });
    });
  }

export default new AuthService();
