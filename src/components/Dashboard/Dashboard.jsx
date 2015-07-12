import AuthComponent from '../Shared/AuthComponent';
import Header from '../Shared/Header'

export default class Dashboard extends AuthComponent {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <Header/>
        <h1>Dashboard</h1>
      </div>
    );
  }
};



