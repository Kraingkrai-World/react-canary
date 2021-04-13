import React, {useState, useEffect} from "react";
import {List, Avatar, Skeleton, message} from 'antd';

import {IUser} from "../model/todo";
import TodoService from "../service/todo";

const {getUserList} = TodoService()

interface IStateUserList {
    users: IUser[]
    isLoading: boolean
}

const UserList: React.FunctionComponent = (): React.ReactElement => {
    const [state, setState] = useState<IStateUserList>({
        users: [] as IUser[],
        isLoading: true
    })

    useEffect(() => {
        (async () => fetchUserList())()
    }, [])

    const fetchUserList = async () => {
        try {
            const response = await getUserList()
            setState((prevState => {
                return {
                    ...prevState,
                    users: response,
                    isLoading: false
                }
            }))
        } catch (err) {
            message.error(`Failed - ${err.message}`)
        }
    }

    return (
        <List
            loading={state.isLoading}
            itemLayout="horizontal"
            dataSource={state.users}
            renderItem={item => (
                <List.Item>
                    <Skeleton avatar title={false} loading={state.isLoading} active>
                        <List.Item.Meta
                            avatar={
                                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
                            }
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.address.city}
                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}

export default UserList