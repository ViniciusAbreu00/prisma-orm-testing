import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserPostController {
  async handle(request: Request, response: Response) {
    const { title, content, user_id } = request.body;

    const userPost = await prismaClient.userPost.create({
      data: {
        post: {
          create: {
            title,
            content,
          },
        },
        user: {
          connect: {
            id: user_id,
          },
        },
      },
    });

    return response.json(userPost);
  }
}
