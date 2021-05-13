import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import './header.styles.scss';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

function logout() {
    localStorage.clear();
    window.location.pathname = '/signin';
}

const Header = ({ currentUserToken, currentUserName, hidden }) => (
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
            <CartIcon />
        </div>
        {
            hidden ? null :
                <CartDropDown />
        }
    </div>
);

const mapStateToProps = ({ user: { currentUserToken, currentUserName }, cart: { hidden } }) => ({
    currentUserToken,
    currentUserName,
    hidden
});

export default connect(mapStateToProps)(Header);