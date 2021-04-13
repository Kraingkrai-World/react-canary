export interface AuthenticateInput {
    userName: string
    passWord: string
}

export interface AuthenticateOutput {
    token: string
    data: {
        firstName: string,
        lastName: string,
    }
}