import React from 'react';
import NavigationItems from './../NavigationItems/NavigationItems';

import classes from './Toolbar.module.css';

const toolbar = (props) => (
    <nav className={classes.navigation}>
        <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
);

export default toolbar;