import React from "react";
import {Row, Col} from 'antd';

import FormLogin from "./component/FormLogin";

const AuthenticatePages: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <Row>
                <Col span={24}>
                    <FormLogin/>
                </Col>
            </Row>
        </>
    );
};

export default AuthenticatePages;

