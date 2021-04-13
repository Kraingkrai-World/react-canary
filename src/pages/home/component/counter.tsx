import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Button, Typography, Space , Divider} from 'antd';

import {incremented, decremented, RootStoreType} from "../../../store/counter";

import {ICounterProps} from "../model/type";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const Counter: React.FC = () => {
    const dispatch = useDispatch();
    const {value: counterReducer} = useSelector(
        (state: RootStoreType) => state.counter
    );
    const [counter, setCounter] = useState<number>(1);

    const handleCounter = ({type}: ICounterProps) => {
        switch (type) {
            case INCREMENT:
                dispatch(incremented());
                setCounter(counter + 1);
                break;
            case DECREMENT:
                if (counter === 0) return;
                dispatch(decremented());
                setCounter(counter - 1);
                break;
            default:
                break;
        }
    };

    return (
        <>
            <Space>
                <Typography.Text>State:
                    <strong data-testid="var-counter"> {counter}</strong>
                </Typography.Text>

                <Typography.Text>Reducer:
                    <strong data-testid="var-reducer-counter"> {counterReducer}</strong>
                </Typography.Text>

            </Space>
            <Divider/>

            <Space>
                <Button
                    type="primary"
                    data-testid="btn-counter-increment"
                    onClick={() => handleCounter({type: INCREMENT})}
                >
                    <Typography.Text>+</Typography.Text>
                </Button>

                <Button
                    type="primary"
                    data-testid="btn-counter-decrement"
                    onClick={() => handleCounter({type: DECREMENT})}
                    disabled={counter === 0}
                >
                    <Typography.Text>-</Typography.Text>
                </Button>
            </Space>
        </>
    );
};

export default Counter;
