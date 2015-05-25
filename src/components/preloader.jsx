import React from 'react';

export default class Ploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none'
    };
  }
  show(cb) {
    this.setState({display: 'block'}, cb);
  }
  hide(cb) {
    this.setState({display: 'none'}, cb);
  }
  render() {
    return (
      <div className='preloader' style={{display: this.state.display}}>
        <img src='../assets/images/preloader.gif' width='128' height='128' />
      </div>
    );
  }
};

window.Preloader = React.render(<Ploader />, document.getElementById('app-preloader'));

