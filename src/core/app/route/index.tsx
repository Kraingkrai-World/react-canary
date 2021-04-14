import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {useSelector, RootStateOrAny} from "react-redux";
import {Layout} from 'antd';

import {Sidebar, Breadcrumb, Footer as MyFooter} from "component/Layout"
import {Routes} from "./routes";
import {IPropRoute, ITypeNavLink} from "./type";

const {Sider, Content, Footer} = Layout;

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

            <Layout style={{
                minHeight: "100vh",
                cursor: isLoading ? "not-allowed" : "auto",
                pointerEvents: isLoading ? "none" : "auto"
            }}>
                <Sider collapsible>
                    <Sidebar/>
                </Sider>

                <Layout>

                    <Breadcrumb/>
                    <Content style={{margin: "0 16px"}}>
                        <div style={{padding: "24px", minHeight: 360}}>
                            <Switch>{_renderAppRoute()}</Switch>
                        </div>
                    </Content>

                    <Footer><MyFooter/></Footer>
                </Layout>

            </Layout>
        </BrowserRouter>
    );
};

export default AppContainer;
