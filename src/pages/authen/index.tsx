import React from "react";
import {Row, Col, Typography} from 'antd';

const AuthenticatePages: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <Row>
            <Col span={24}>
                <Typography.Title>
                    In private. <strong>Please Login </strong>!
                </Typography.Title>
            </Col>
        </Row>
        </>
    );
};

export default AuthenticatePages;

