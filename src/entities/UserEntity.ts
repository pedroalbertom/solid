export type UserProps = {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export class UserEntity {
    private constructor(readonly props: UserProps) { }

    public static create(props: Partial<UserProps>): UserEntity {
        const id = props.id ?? crypto.randomUUID().toString();

        if (!props.firstName || !props.lastName || !props.email) {
            throw new Error("Campos obrigatórios estão faltando.");
        }

        return new UserEntity({
            id,
            firstName: props.firstName,
            lastName: props.lastName,
            email: props.email,
        });
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