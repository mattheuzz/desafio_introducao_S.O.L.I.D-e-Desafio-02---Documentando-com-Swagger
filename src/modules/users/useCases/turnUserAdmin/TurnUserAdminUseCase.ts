import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
    user_id: string;
}

class TurnUserAdminUseCase {
    constructor(private usersRepository: IUsersRepository) {}

    execute({ user_id }: IRequest): User {
        const user = this.usersRepository.findById(user_id);
        if (user.admin === true) {
            throw new Error("User is already admin");
        }
        return this.usersRepository.turnAdmin(user);
    }
}

export { TurnUserAdminUseCase };
