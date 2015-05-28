import {API} from '../core/Constants';

/**
 * FireBaseService constructor
 */
export default class FireBaseService {
  constructor(){
    this._ref = new Firebase(API.BASE_URL);
    this._geo = new GeoFire(this._ref);
  }
  get ref(){
    return this._ref;
  }
  get geo(){
    return this._geo;
  }
}
