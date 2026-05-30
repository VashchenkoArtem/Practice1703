export interface LoginPayload {
    email: string;
    password: string;
}
export interface LoginResponse {
    token: string;
}
export interface IRegister {
    email: string;
    password: string;
    username: string;
    avatar: string;
    name: string;
    surname: string;
}
export interface GetUserByUsernamePayload {
    username: string;
}
