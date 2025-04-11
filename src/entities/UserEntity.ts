export type UserProps = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export class UserEntity {
    private props: UserProps

    private constructor(props: UserProps) {
        this.props = props
    }

    public static create(props: Omit<UserProps, 'id'>): UserEntity {
        const id = crypto.randomUUID()
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