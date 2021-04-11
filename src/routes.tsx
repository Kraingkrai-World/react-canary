import "./assets/theme/global_styles.css";

import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useSelector, RootStateOrAny} from "react-redux";

import Navbar from "core/component/Navlink/";
import {Loading} from "core/component/Loading/";

import {HomePage, ReadmePage, TodoGqlPage} from "pages";

interface IPropRoute {
    path: string
    title: string
    component?: React.ReactNode
}

interface IPropApp {
    HOME: IPropRoute
    DOCUMENT: IPropRoute
    TODO_GQL: IPropRoute
    ABOUT: IPropRoute
    JOBS: IPropRoute
    CONTACT: IPropRoute
}

const ROUTE: IPropApp = {
    HOME: {path: "/", title: "Home"},
    DOCUMENT: {path: "/document", title: "Documentation"},
    TODO_GQL: {path: "/todo-gql", title: "Todo gql"},
    ABOUT: {path: "/about", title: "About"},
    JOBS: {path: "/jobs", title: "Jobs"},
    CONTACT: {path: "/contact", title: "Contact"},
};

export const RouterApp = {
    main: [
        {
            title: ROUTE.HOME.title,
            path: ROUTE.HOME.path,
            component: <HomePage/>,
        },
        {
            title: ROUTE.DOCUMENT.title,
            path: ROUTE.DOCUMENT.path,
            component: <ReadmePage/>,
        },
        {
            title: ROUTE.TODO_GQL.title,
            path: ROUTE.TODO_GQL.path,
            component: <TodoGqlPage/>,
        },
    ],
    dropdown: [
        {title: ROUTE.ABOUT.title, path: ROUTE.ABOUT.path, component: <></>},
        {title: ROUTE.JOBS.title, path: ROUTE.JOBS.path, component: <></>},
        {
            title: ROUTE.CONTACT.title,
            path: ROUTE.CONTACT.path,
            component: <></>,
        },
    ],
};

const _combineRoute = RouterApp.main.concat(RouterApp.dropdown);
const _renderRouteApp = () => {
    return (
        _combineRoute.map((route) => (
            <Route key={route.path} path={route.path} exact>
                {route.component}
            </Route>
        ))
    )
}

const AppContainer: React.FunctionComponent = (): React.ReactElement => {
    const {isLoading} = useSelector((state: RootStateOrAny) => state.app);
    return (
        <BrowserRouter>
            <div className={isLoading ? "disable-content" : ""}>
                <Navbar/>
                <Switch>{_renderRouteApp()}</Switch>
                {isLoading && <Loading/>}
            </div>
        </BrowserRouter>
    );
};

export default AppContainer;
