import { User } from "modules/users/model/User";

import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ email, name, admin }: IRequest): User {
        const userAlredyExists = this.usersRepository.findByEmail(email);
        if (userAlredyExists) {
            throw new Error("User already exists");
        }
        return this.usersRepository.create({ email, name, admin });
    }
}

export { CreateUserUseCase };
