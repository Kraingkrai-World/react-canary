import {Api, IPropsResp} from "../../../core/app/axios";

const END_POINT = {
    todo: "/todos",
};

interface IGet {
    limit: number;
}

interface IHomeService {
    get: ({limit}: IGet) => Promise<any>
}

export default (): IHomeService => {
    return {
        get: async ({limit}: IGet): Promise<any> => {
            let response = {} as IPropsResp;
            try {
                response = await Api.client.get(`${END_POINT.todo}/${limit}`);
            } catch (err) {
                console.log("err :>> ", err);
            }
            console.log("response :>> ", response);
            return response;
        },
    }
}
