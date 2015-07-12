import debug from 'debug';
import BaseStore from './BaseStore';
import {ActionTypes} from '../core/Constants';

class PageTitleStore extends BaseStore{
  constructor() {
    super();
    debug('dev')('PageTitleStore init')
    this.subscribe(() => this._registerToActions.bind(this))
    this.title = 'HighEndInstallations';
  }

  get_title(){
   return this.title;
  }

   _registerToActions(action) {
    switch(action.actionType) {
      case ActionTypes.PAGE_TITLE:
        debug('dev')("Changing Doc title")
        this.title = action.title;
        this.emitChange();
        break;
      default:
        break;
    };
  }
}

export default new PageTitleStore();

