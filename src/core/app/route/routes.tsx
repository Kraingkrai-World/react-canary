import React from "react";
import {
    HomeOutlined,
    MenuFoldOutlined,
    UserOutlined,
    ContainerOutlined,
    BarChartOutlined,
} from '@ant-design/icons';
import {AuthenticatePage, HomePage, TodoPage} from "pages";

import {IPropRoute, ITypeNavLink} from "./type";
import PrivateRoute from "./private";

export const Routes: IPropRoute[] = [
    {
        label: "Home",
        path: "/", type: ITypeNavLink.NavLink,
        icon: <HomeOutlined/>,
        Component: <HomePage/>
    },
    {
        label: "Home",
        path: "/privilege", type: ITypeNavLink.Hide,
        icon: <MenuFoldOutlined/>,
        Component: <AuthenticatePage/>
    },
    {
        label: "Todo",
        path: "/todo",
        icon: <ContainerOutlined/>,
        type: ITypeNavLink.NavLink,
        Component: <PrivateRoute><TodoPage/></PrivateRoute>
    },
    {
        label: "About", path: "/about",
        type: ITypeNavLink.Dropdown,
        icon: <UserOutlined/>,
        Component: <></>
    },
    {
        label: "Jobs",
        path: "/jobs",
        type: ITypeNavLink.Dropdown,
        icon: <BarChartOutlined/>,
        Component: <></>
    },
]
