export interface UpdateUserDTO {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface CreateUserDTO {
    firstName: string;
    lastName: string;
    email: string;
}