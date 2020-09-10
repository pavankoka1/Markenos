import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { routesPath } from '../Routes';
import styles from './NavBar.module.scss';

function NavBar() {

    function checkActive(match, location) {
        if (match && match.url === location.pathname) {
            return true;
        }
        return false;
    }
    return (
        <div className={styles.wrapper}>
            <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to={routesPath.home}
                isActive={checkActive}
            >
                Home
            </NavLink>
            <NavLink
                className={styles.link}
                activeClassName={styles.active}
                to={routesPath.about}
                isActive={checkActive}
            >
                About
            </NavLink>
        </div>
    )
}

export default NavBar;