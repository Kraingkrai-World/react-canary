import React from "react";
import {Row, Col, Breadcrumb} from 'antd';

const MyBreadcrumb: React.FunctionComponent = (): React.ReactElement => {

    return (
        <Row>
            <Col span={24}>
                <Breadcrumb style={{margin: '24px'}}>
                    <Breadcrumb.Item>My</Breadcrumb.Item>
                    <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
        </Row>
    );
};

export default MyBreadcrumb;
