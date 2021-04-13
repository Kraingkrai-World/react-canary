import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Menu, Image, Typography} from 'antd';
import {MoreOutlined, LoginOutlined} from "@ant-design/icons";

import {AppRoute} from "core/app/route";
import {RootStoreType, setAuthenticate, setUnAuthorization} from "store/app";
import AuthService from "core/app/authen";
import {AuthenticateInputMock} from "core/app/authen/mock/authen";

const {SubMenu} = Menu;

const _renderNavLink = () => {
    return (
        AppRoute().NavLink.map((route) => (
                <Menu.Item key={route.path} icon={route.icon}>
                    <Link to={route.path}>
                        {route.label}
                    </Link>
                </Menu.Item>
            )
        )
    )
};

const _renderDropDown = () => {
    return (
        AppRoute().Dropdown.map((route) => (
                <Menu.Item key={route.path} icon={route.icon}>
                    <Link to={route.path}>
                        {route.label}
                    </Link>
                </Menu.Item>
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

        <Menu theme="dark" defaultSelectedKeys={["/"]} defaultOpenKeys={["/"]} triggerSubMenuAction="click"
              mode="inline">
            <Menu.Item disabled key="logo" active={false}>
                <Image
                    preview={false}
                    width={30}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                />
            </Menu.Item>

            {_renderNavLink()}

            <SubMenu key="sub1" icon={<MoreOutlined/>} title="More">
                {_renderDropDown()}
            </SubMenu>

            <Menu.Item key="authenticate" icon={<LoginOutlined/>}>
                {!authenticate.token ?
                    <>
                        <Typography.Text style={{color: "#FFFFFF"}} onClick={handleSubmitSignIn}>
                            Login
                        </Typography.Text>
                    </> :
                    (
                        <strong onClick={() => dispatch(setUnAuthorization())}>
                            {authenticate.data.firstName}
                        </strong>
                    )
                }
            </Menu.Item>

        </Menu>
    );
};

export default NavLink;
