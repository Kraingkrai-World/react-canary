import React from "react";
import {Col, Row} from "antd";

import {UserList} from "./component"

const TodoPage: React.FunctionComponent = (): React.ReactElement => {

    return (
        <Row>
            <Col span={24}>
                <UserList/>
            </Col>
        </Row>
    );
};

export default TodoPage;
