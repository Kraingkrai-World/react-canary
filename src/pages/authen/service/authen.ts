import {Api} from "core/utils/axios";
import {IS_MOCKUP} from "core/utils/env";

import {AuthenticateOutput, AuthenticateInput} from "../model/authen";
import {AuthenticateOutputMock} from "../mock/authen";

const {addHeader, client} = Api

interface IServiceAuth {
    signInWithUserNameAndPassword: (input: AuthenticateInput) => Promise<AuthenticateOutput>
}

const AuthService = (): IServiceAuth => {
    return {
        signInWithUserNameAndPassword: async (input: AuthenticateInput): Promise<AuthenticateOutput> => {
            if (IS_MOCKUP) {
                addHeader({Authorization: AuthenticateOutputMock.token})
                return AuthenticateOutputMock
            }
            const {status, data} = await client.post('login', input)
            if (status !== 200) {
                return {} as AuthenticateOutput
            }
            return data
        },
    }
}

export default AuthService