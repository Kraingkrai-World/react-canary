import React, {useEffect} from "react";
import {useLazyQuery} from "@apollo/client";
import {useDispatch} from "react-redux";
import {Col, Row, Button} from "antd";

import {GetPosts, PostVar, PostData} from "pages/todo/services/todo";
import {
    pending_status,
    failed_status,
    success_status,
} from "store/app/";

const TodoPage: React.FunctionComponent = (): React.ReactElement => {
    const dispatch = useDispatch();
    const [queryPost, {loading, error, data}] = useLazyQuery<PostData,
        PostVar>(GetPosts);

    const fetchGetExChange = () => {
        queryPost({variables: {start: 0, end: 5, limit: 5}});
        // queryPost({ variables: { options: {} as any } });
    };

    useEffect(() => {
        if (error) {
            //  dispatch(setLoading(false));
            dispatch(failed_status());
        }
        if (loading) {
            dispatch(pending_status());
            //  dispatch(setLoading(true));
        } else {
            dispatch(success_status());
            //  dispatch(setLoading(false));
        }
        // eslint-disable-next-line
    }, [loading, error]);

    return (
        <>
            <Row>
                <Col span={24}>
                    <Button
                        type="primary"
                        data-test="btn-fetch-gql-exchange"
                        onClick={fetchGetExChange}
                    >
                        Use LazyQuery !
                    </Button>
                </Col>
            </Row>

            <Row>
                <Col span={24}>
                    <div className="container" style={{textAlign: "left"}}>
                        {data?.posts?.data.map(({id, title, user}) => (
                            <div key={id}>
                                <p>{title}</p>
                                <p>
                                    {user.id} {user.name}
                                </p>
                            </div>
                        ))}
                    </div>

                </Col>
            </Row>
        </>
    );
};

export default TodoPage;
