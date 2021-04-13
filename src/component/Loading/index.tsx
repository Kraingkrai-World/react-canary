import React from "react";
import "./styles.css";

export const Loading: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="parent">
            <div className="child">
                <div className="lds-ellipsis">
                    <div/>
                    <div/>
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    );
};
