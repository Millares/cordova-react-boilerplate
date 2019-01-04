import React from 'react';
import NavbarWrapper from '../components/NavbarWrapper';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Pagina1 from './Pagina1';
import Pagina2 from './Pagina2';

const BASE_NAME_BY_PLATFORM: any = {
  android: '/android_asset/www/index.html',
  browser: 'index.html'
};

interface LayoutStateInterface {
  isOpen: boolean;
}
declare let cordova: any;

export default class Layout extends React.Component<{}, LayoutStateInterface> {

  constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.getBaseNameByPlatform = this.getBaseNameByPlatform.bind(this);

    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  getBaseNameByPlatform() {
    return BASE_NAME_BY_PLATFORM[cordova.platformId];
  }

  render() {
    return (
        <Router basename={this.getBaseNameByPlatform()}>
        <div>
        <NavbarWrapper/>
        <Container>
            <div>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/pagina1'>Pagina 1</Link>
                </li>
                <li>
                  <Link to='/pagina2'>Pagina 2</Link>
                </li>
              </ul>

              <hr />

              <Route exact path='/' component={Home} />
              <Route path='/pagina1' component={Pagina1} />
              <Route path='/pagina2' component={Pagina2} />
            </div>
        </Container>
        </div>
      </Router>
    );
  }
}
