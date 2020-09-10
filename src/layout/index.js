import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './Navbar';

function Layout({ children }) {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.array,
}

export default Layout;