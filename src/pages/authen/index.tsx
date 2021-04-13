import React from "react";
import {Row, Col} from 'antd';

import FormLogin from "./component/FormLogin";

const AuthenticatePages: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <Row align="middle" justify="center">
                <Col span={12}>
                    <div style={{backgroundColor: "#FFFFFF", padding: "32px"}}>
                        <FormLogin/>
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default AuthenticatePages;

