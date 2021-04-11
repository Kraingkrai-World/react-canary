import {Api, IPropsResp} from "../../../core/app/axios";

const END_POINT = {
    todo: "/todos",
};

interface IPropsFilter {
    limit: number;
}

export const getTodo = async ({limit = 1}: IPropsFilter) => {
    let response = {} as IPropsResp;
    try {
        response = await Api.client.get(`${END_POINT.todo}/${limit}`);
    } catch (err) {
        console.log("err :>> ", err);
    }
    console.log("response :>> ", response);

    return response;
};

// interface IService {
//
// }

// export {getTodo}ret
