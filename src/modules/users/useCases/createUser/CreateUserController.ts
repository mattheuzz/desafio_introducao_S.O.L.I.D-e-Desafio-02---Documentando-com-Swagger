import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, email, admin } = request.body;
        try {
            const user = this.createUserUseCase.execute({ name, email, admin });
            return response.status(201).send(user);
        } catch (e) {
            return response.status(400).json({
                error: e,
            });
        }
    }
}

export { CreateUserController };
