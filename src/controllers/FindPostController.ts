import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class FindPostController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const idNumber = Number(id);

    const post = await prismaClient.post.findFirst({
      where: {
        id: idNumber,
      },
      include: {
        UserPost: {
          select: {
            user: true,
          },
        },
      },
    });

    return response.json(post);
  }
}
