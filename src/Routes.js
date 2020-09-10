import React, { useContext } from 'react';
import { __RouterContext } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import routePaths from './routePaths';
import Layout from 'layout';
import {
    Home,
    About
} from 'modules';

// to import paths from Routes
export const routesPath = routePaths;

const Routes = () => {

    const { location } = useContext(__RouterContext);
    const transitions = useTransition(location, location => location.pathname, {
        from: { opcaity: 0 },
        enter: { opcaity: 1 },
        leave: { opacity: 0 }
    })

    return (
        transitions.map(({ item, props, key }) => (
            <animated.div key={key} style={props}>
                <Switch>
                    <Layout>
                        <Route exact path={routesPath.home} component={Home} />
                        <Route exact path={routesPath.about} component={About} />
                    </Layout>
                </Switch>
            </animated.div>
        ))
    )
}

export default Routes;