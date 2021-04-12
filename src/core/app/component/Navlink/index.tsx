import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {AppRoute} from "core/app/route";
import {RootStoreType, setAuthenticate, setUnAuthorization} from "store/app";
import AuthService from "core/app/authen";
import {AuthenticateInputMock} from "core/app/authen/mock/authen";
import {IPropsState} from "./type";

const _renderNavLink = () => {
    return (
        AppRoute().NavLink.map((route) => (
            <Link key={route.path} className="navbar-item" to={route.path}>
                {route.title}
            </Link>
        ))
    )
};

const _renderDropDown = () => {
    return (
        AppRoute().Dropdown.map((route) => (
                <Link key={route.path} className="navbar-item" to={route.path}>
                    {route.title}
                </Link>
            )
        )
    );
};

const {signInWithUserNameAndPassword} = AuthService()

const NavLink: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const {authenticate} = useSelector(
        (state: RootStoreType) => state.app
    );
    const {push} = useHistory()
    const [state, setState] = useState<IPropsState>({
        navbarBurger: "",
        dropDownMenu: "none",
    });

    const handleNavbarBurgerToggle = () => {
        setState((prevState) => {
            return {
                ...prevState,
                navbarBurger:
                    prevState.navbarBurger === "is-active"
                        ? "not-active"
                        : "is-active",
                dropDownMenu: "none",
            };
        });
    };

    const handleDropDownToggle = () => {
        setState((prevState) => {
            return {
                ...prevState,
                dropDownMenu: prevState.dropDownMenu === "none" ? "block" : "none",
            };
        });
    };

    const handleSubmitSignIn = async () => {
        try {
            const response = await signInWithUserNameAndPassword(AuthenticateInputMock)
            dispatch(setAuthenticate(response))
            push("/")
        } catch (err) {
            console.error('ERR - ', err)
        }
    };

    return (
        <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
            id="nav-toggle"
        >
            <div className="navbar-brand">
            <span className="h5 navbar-item">
               <img
                   alt="bulma-logo"
                   src="https://bulma.io/images/bulma-logo.png"
                   width="112"
                   height="28"
               />
            </span>

                <h5
                    role="button"
                    className="navbar-burger"
                    aria-label="menu"
                    aria-expanded="false"
                    onClick={handleNavbarBurgerToggle}
                >
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </h5>
            </div>

            <div className={`navbar-menu ${state.navbarBurger}`}>
                <div className="navbar-start">
                    {_renderNavLink()}

                    <div
                        className="navbar-item has-dropdown is-hoverable"
                        onMouseLeave={handleDropDownToggle}
                    >
                        <h5 className="navbar-link" onClick={handleDropDownToggle}>
                            More
                        </h5>

                        <div
                            className="navbar-dropdown"
                            style={{display: state.dropDownMenu}}
                        >
                            {_renderDropDown()}
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            {!authenticate.token ?
                                <>
                                    <h5 className="button is-primary" onClick={handleSubmitSignIn}>
                                        Login
                                    </h5>
                                </> :
                                (
                                    <strong
                                        onClick={() => dispatch(setUnAuthorization())}
                                    >
                                        {`${authenticate.data.firstName} ${authenticate.data.lastName}`}
                                    </strong>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavLink;
