import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { setCurrentUserToken } from './redux/user/user-actions';



class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUserName: null,
    }
  }

  componentDidMount() {

    const { setCurrentUserToken } = this.props;
    const displayname = localStorage.getItem('user-name')
    setCurrentUserToken(localStorage.getItem('user-token'));
    this.setState({ currentUserName: displayname })
  }

  render() {
    return (
      <div>
        <Header currentUserName={this.state.currentUserName} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUserToken: userToken => dispatch(setCurrentUserToken(userToken))
});

export default connect(null, mapDispatchToProps)(App);
