import { useState } from "react";
import { Link } from "react-router-dom";

import { RouterApp } from "routes";
import { IPropsState } from "./type";

const _renderMain = () => {
   return (
      RouterApp?.main.length > 0 &&
      RouterApp?.main.map(({ title, path }) => (
         <Link key={path} className="navbar-item" to={path}>
            {title}
         </Link>
      ))
   );
};

const _renderDropDown = () => {
   return (
      RouterApp?.dropdown.length > 0 &&
      RouterApp?.dropdown.map(({ title, path }) => (
         <Link key={path} className="navbar-item" to={path}>
            {title}
         </Link>
      ))
   );
};

const NavLink = () => {
   // const { dispatch } = useContext(AppContextDispatch)
   // const { isAuthen, profile } = useContext(AppContextState)
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

   const handleFormSubmit = async () => {
      // const response = await AuthService.SignInWithUserNameAndPassWord({ username: 'kkk', password: 'kkk' })
      // if (!response) return
      // dispatch.setAuthorization(response)
   };

   return (
      <nav
         className="navbar"
         role="navigation"
         aria-label="main navigation"
         id="nav-toggle"
      >
         <div className="navbar-brand">
            <span className="h5 navbar-item" >
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
               {_renderMain()}

               <div
                  className="navbar-item has-dropdown is-hoverable"
                  onMouseLeave={handleDropDownToggle}
               >
                  <h5 className="navbar-link" onClick={handleDropDownToggle}>
                     More
                  </h5>

                  <div
                     className="navbar-dropdown"
                     style={{ display: state.dropDownMenu }}
                  >
                     {_renderDropDown()}
                     {/* <hr className="navbar-divider" />
                            <h5 className="navbar-item">
                                Report an issue
                            </h5> */}
                  </div>
               </div>
            </div>

            <div className="navbar-end">
               <div className="navbar-item">
                  <div className="buttons">
                     {/* <h5 className="buttonis-light">
                        <strong>Sign up</strong>
                     </h5> */}
                     <h5
                        className="button is-primary"
                        onClick={handleFormSubmit}
                     >
                        Sign In
                     </h5>
                     {/* {!isAuthen ?
                                <>
                                    <h5 className="button is-primary">
                                        <strong>Sign up</strong>
                                    </h5>
                                    <h5 className="button is-light" onClick={handleFormSubmit}>
                                        Log in
                                    </h5>
                                </> :
                                (
                                    <strong onClick={() => dispatch.removeAuthorization()}>{`${profile?.first_name} ${profile?.last_name}`}</strong>
                                )
                            } */}
                  </div>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default NavLink;
