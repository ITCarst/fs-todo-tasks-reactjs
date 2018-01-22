import React from 'react';
import Logo from '../common/Logo';

const HeaderLayout = ({ children }) => (
    <header className="header">
        <Logo />
        {children}
    </header>    
);

export default HeaderLayout;