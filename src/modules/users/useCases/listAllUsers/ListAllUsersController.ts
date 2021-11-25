import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const { user_id } = request.headers;
        try {
            const allUsers = this.listAllUsersUseCase.execute({
                user_id: String(user_id),
            });
            return response.status(200).send(allUsers);
        } catch (e) {
            return response.status(400).send({
                error: e,
            });
        }
    }
}

export { ListAllUsersController };
