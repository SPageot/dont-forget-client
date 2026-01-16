

export interface UserDetailsType {
    name: string,
    email: string,
    phone_number: string,
    username: string,
    password: string,
}


export interface UserDBType extends UserDetailsType {
    _id:string
}