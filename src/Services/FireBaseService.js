import CONSTANTS from '../core/Constants';
import GeoFire from 'geofire';

/**
 * FireBaseService constructor
 */
export default class FireBaseService {
  constructor(){
    this._ref = new Firebase(CONSTANTS.API.BASE_URL);
    this._geo = new GeoFire(this._ref);
  }
  ref(){
    return this._ref;
  }
  geo(){
    return this._geo;
  }
}
