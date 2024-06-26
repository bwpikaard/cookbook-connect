import type {NextApiRequest, NextApiResponse} from "next";
import {getServerSession} from "next-auth";
import {z} from "zod";

import {ReadyDataSource, similarityBuilder} from "@/data-source";
import {Ingredient} from "@/entities/ingredient.entity";

import {titleCase} from "../../../lib/titleCase";
import {authOptions} from "../auth/[...nextauth]";

const GetQuerySchema = z.object({
    key: z.string().optional(),
}).strict();

const PostBodySchema = z.object({
    text: z.string(),
}).strict();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Ingredient[] | Ingredient | string>,
): Promise<void> {
    const ds = await ReadyDataSource();
    const ingredientRepo = ds.getRepository(Ingredient);

    if (req.method === "GET") {
        const getInput = GetQuerySchema.safeParse(req.query);

        if (!getInput.success) {
            res.status(400).send("Invalid Input Data");
            return;
        }

        if (getInput.data.key) {
            const ingredientsBuilder = await similarityBuilder(Ingredient, getInput.data.key, "text", 0.2, 10);
            ingredientsBuilder.orWhere(`${Ingredient.constructor.name}.text ILIKE :query`, {query: `%${getInput.data.key.toLowerCase()}%`});
            const ingredients = await ingredientsBuilder.getMany();
    
            res.status(200).json(ingredients);
        } else {
            const ingredients = await ingredientRepo.find({take: 10});
            res.status(200).json(ingredients);
        }
    } else if (req.method === "POST") {
        const session = await getServerSession(req, res, authOptions);

        if (!session?.user) {
            res.status(400).end("Unauthenticated");
            return;
        }

        const postInput = PostBodySchema.safeParse(req.body);

        if (!postInput.success) {
            res.status(400).send("Invalid Input Data");
            return;
        }

        const ingredient = ingredientRepo.create({
            creatorId: session.user.id,
            text: titleCase(postInput.data.text),
        });
        await ingredientRepo.save(ingredient);

        res.status(200).json(ingredient);
    } else {
        res.status(405).send("Method Not Allowed");
    }
}
