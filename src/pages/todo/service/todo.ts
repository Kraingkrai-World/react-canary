import {Api} from "core/utils/axios";

import {IS_MOCKUP} from "core/utils/env";
import {UserListMock} from "../mock/userList";
import {IGetTodoFilter, ITodo, IUser} from "../model/todo";

interface ITodoService {
    getTodoByID: (filter: IGetTodoFilter) => Promise<ITodo>
    getUserList: () => Promise<IUser[]>
}

const {client} = Api

const Services = (): ITodoService => {
    return {
        getTodoByID: async (filter: IGetTodoFilter): Promise<ITodo> => {
            try {
                const {status, data} = await client.get(`/todos/${filter.id}`);
                if (status !== 200) {
                    return {} as ITodo
                }
                return data
            } catch (err) {
                console.error("catch err - getTodoList", err);
                throw Error("catch err - getTodoList")
            }
        },
        getUserList: async (): Promise<IUser[]> => {
            if (IS_MOCKUP) {
                return UserListMock
            }
            try {
                const {status, data} = await client.get(`/users`);
                if (status !== 200) {
                    return {} as IUser[]
                }
                return data
            } catch (err) {
                console.error("catch err - getTodoList", err);
                throw Error("catch err - getTodoList")
            }
        },
    }
}

export default Services
