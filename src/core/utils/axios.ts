import axios from "axios";
import {BASE_URL_REST} from "core/utils/env";

const INIT_OPTION = {
    baseURL: BASE_URL_REST,
};

export interface IPropsResp {
    data: object;
    statusText: string;
    status: number;
}

const Axios = (options: object) => {
    let http = axios.create(options);

    const handleSuccessResponse = (response: any) => response;

    const handleErrorResponse = (errors: any) => {
        console.log("errors :>> ", errors);
        switch (errors.status) {
            case "400":
                break;
            default:
                break;
        }
    };

    http.interceptors.response.use(handleSuccessResponse, handleErrorResponse);

    const addHeader = (headers = {}) => {
        Object.assign(http.defaults.headers, headers);
    };

    const removeHeader = (headers = []) => {
        headers.forEach((header) => delete http.defaults[header]);
    };

    const client = http;

    return {client, addHeader, removeHeader};
};

export default Axios;

export const Api = Axios(INIT_OPTION);
