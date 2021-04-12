import React from "react";

export enum ITypeNavLink {
    NavLink = "navLink",
    Dropdown = "dropdown",
    Hide = "hide"
}

export interface IPropRoute {
    path: string
    title: string
    type: ITypeNavLink
    Component: React.ReactElement
}

export interface IPropPrivateRoute {
    children: React.ReactElement
}