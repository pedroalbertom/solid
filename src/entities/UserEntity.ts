export type UserProps = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export class UserEntity {
    private constructor(readonly props: UserProps) {}

    public static create(props: Omit<UserProps, 'id'>): UserEntity {
        const id = crypto.randomUUID().toString()
        return new UserEntity({ ...props, id })
    }

    public getId(): string {
        return this.props.id;
    }

    public getFirstName(): string {
        return this.props.firstName;
    }

    public getLastName(): string {
        return this.props.lastName;
    }

    public getEmail(): string {
        return this.props.email;
    }

}