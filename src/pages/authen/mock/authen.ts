import {AuthenticateInput, AuthenticateOutput} from "../model/authen";

export const AuthenticateInputMock: AuthenticateInput = {
    userName: "KK",
    passWord: "password"
}

export const AuthenticateOutputMock: AuthenticateOutput = {
    token: "KKK",
    data: {
        firstName: "Kraingkrai",
        lastName: "Keawobchoei"
    }
}
