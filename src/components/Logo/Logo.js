import React from 'react';
import mars from './mars.svg';
import './Logo.css';

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <img src={mars} className="mt3" alt="Line art of mars" height="80" />
        </div>
    );
};

export default Logo;