import React from "react";
import {render} from '@testing-library/react'
import {Provider} from "react-redux";

import store from "../../store";

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () {
        },
        removeListener: function () {
        }
    };
};

const WrapperProvider: React.FunctionComponent = ({children}): React.ReactElement => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

const CustomerRender = (ui: React.ReactElement) => render(ui, {wrapper: WrapperProvider})

export * from '@testing-library/react'
export {CustomerRender as render}