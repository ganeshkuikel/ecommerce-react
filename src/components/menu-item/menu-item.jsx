import React, { Component } from 'react';
import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }} className={`${size} menu-item`}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='sub-title'>Shop Now</span>
        </div>
    </div>
)

export default MenuItem;