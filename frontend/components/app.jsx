import React from 'react';
// import NavBarContainer from './navbar/navbar_container';
import SignUpContainer from './signup/signup_container';
import MainPageContainer from './mainpage/mainpage_container';
import Footer from './footer/footer';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
const App = () => (
  <div>
    <h1>Read The Leaves</h1>
    <div className="main-content">
      <Switch>
        <AuthRoute path="/signup" component={SignUpContainer} />
        <Route exact path="/" component={MainPageContainer} />
      </Switch>
    </div>
    <div className="footer">
      <Footer />
    </div>
  </div>
);

export default App;

// <header>
  // <NavBarContainer />
// </header>
