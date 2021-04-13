import React from "react";
import {Row, Col, Typography, Divider} from 'antd';

import {Counters} from "./component";

const Home: React.FunctionComponent = (): React.ReactElement => {

    return (
        <>
            <Row>
                <Col span={24}>
                    <Typography.Title>สวัสดีชาวโลก</Typography.Title>
                </Col>
            </Row>
            <Divider/>

            <Row>
                <Col span={24}>
                    <Counters/>
                </Col>
            </Row>
        </>
    );
};

export default Home;
