import React from "react";
import {AuthenticatePage, HomePage, TodoPage} from "pages";

import {IPropRoute, ITypeNavLink} from "./type";
import PrivateRoute from "./private";

export const Routes: IPropRoute[] = [
    {
        title: "Home",
        path: "/", type: ITypeNavLink.NavLink,
        Component: <HomePage/>
    },
    {
        title: "Home",
        path: "/privilege", type: ITypeNavLink.Hide,
        Component: <AuthenticatePage/>
    },
    {
        title: "Todo",
        path: "/todo",
        type: ITypeNavLink.NavLink,
        Component: <PrivateRoute><TodoPage/></PrivateRoute>
    },
    {title: "About", path: "/about", type: ITypeNavLink.Dropdown, Component: <></>},
    {title: "Jobs", path: "/jobs", type: ITypeNavLink.Dropdown, Component: <></>},
]
