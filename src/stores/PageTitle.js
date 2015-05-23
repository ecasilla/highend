'use strict';

import debug from 'debug';
import BaseStore from './BaseStore';

class PageTitleStore extends BaseStore{
  constructor() {
    this.baseTitle = 'HighEndInstallations';

    // Defaut title
    this.title = `${this.baseTitle}`;
  }

  onSet(title: ?string) {
    title = `${title}`;

    debug('dev')(`update page title to '${title}'`);
    return this.setState({title});
  }
}

export default PageTitleStore;

