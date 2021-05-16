import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { setCurrentUserToken, setCurrentUserName } from './redux/user/user-actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';
import Checkout from './components/checkout/checkout-component';

class App extends React.Component {

  componentDidMount() {

    const { setCurrentUserToken, setCurrentUserName } = this.props;
    setCurrentUserToken(localStorage.getItem('user-token'));
    setCurrentUserName(localStorage.getItem('user-name'))
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUserToken ?
                (<Redirect to='/' />) :
                (<SignInAndSignUpPage />)}
          />
        </Switch>

      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUserToken:selectCurrentUser,
  currentUserName:selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUserToken: userToken => dispatch(setCurrentUserToken(userToken)),
  setCurrentUserName: userName => dispatch(setCurrentUserName(userName))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
