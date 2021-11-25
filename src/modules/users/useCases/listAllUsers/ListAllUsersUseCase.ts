import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class ListAllUsersUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User[] {
        const userIsAdmin = this.usersRepository.findById(user_id);
        if (userIsAdmin.admin === false) {
            throw new Error("User is not an admin");
        }
        const allUsers = this.usersRepository.list();
        return allUsers;
    }
}

export { ListAllUsersUseCase };
