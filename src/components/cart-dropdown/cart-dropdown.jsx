import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button';
import CartItem from '../cart-item/cart-item';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart-actions';

import './cart-dropdown.styles.scss';
import { selectCartItems } from '../../redux/cart/cart-selector'

import { withRouter } from 'react-router-dom';

const CartDropDown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                    : <span className='empty-message'>Your cart item is empty.</span>
            }
        </div>
        <CustomButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
            }}> Go To Checkout </CustomButton>

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});


export default withRouter(connect(mapStateToProps)(CartDropDown));