import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';
import { connect } from 'react-redux';

function logout() {
    localStorage.clear();
    window.location.pathname = '/signin';
}

const Header = ({ currentUserToken, currentUserName }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUserToken ?
                    <div className='option' onClick={logout}> SIGN OUT {currentUserName}? </div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUserToken: state.user.currentUserToken,
    currentUserName: state.user.currentUserName,
});

export default connect(mapStateToProps)(Header);