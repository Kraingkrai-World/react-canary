import "../../../assets/theme/global_styles.css";

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useSelector, RootStateOrAny} from "react-redux";

import Navbar from "core/app/component/Navlink";
import {Loading} from "core/app/component/Loading";
import {Routes} from "./routes";
import {IPropRoute, ITypeNavLink} from "./type";

export const AppRoute = () => {
    let All = [] as IPropRoute[]
    let _NavLink = [] as IPropRoute[]
    let _Dropdown = [] as IPropRoute[]

    Routes.forEach(route => {
        if (route.type === ITypeNavLink.NavLink) {
            _NavLink.push(route)
        } else if (route.type === ITypeNavLink.Dropdown) {
            _Dropdown.push(route)
        }
        All.push(route)
    })
    return {
        All,
        NavLink: _NavLink,
        Dropdown: _Dropdown,
    }
}

const _renderAppRoute = () => {
    return (
        AppRoute().All.map((route) => {
            return (
                <Route key={route.path} path={route.path} exact>
                    {route.Component}
                </Route>
            )
        })
    )
}

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    const {isLoading} = useSelector((state: RootStateOrAny) => state.app);
    return (
        <BrowserRouter>
            <div className={isLoading ? "disable-content" : ""}>
                <Navbar/>
                <Switch>{_renderAppRoute()}</Switch>
                {isLoading && <Loading/>}
            </div>
        </BrowserRouter>
    );
};

export default AppContainer;
