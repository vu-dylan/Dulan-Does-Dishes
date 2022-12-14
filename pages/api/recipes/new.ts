import { DBItem } from './../../../interfaces/data/common';
import { tagsCollection } from './../../../backend/constants';
import { getSingleItem } from './../../../backend/common';
// creates a new recipe entry in backend
import type { NextApiRequest, NextApiResponse } from 'next'
import { pushNewItem } from '../../../backend/common';
import { recipesCollection } from '../../../backend/constants';
import { isRecipe } from '../../../interfaces/data/recipe';
import { createRecipeURL } from '../../../components/utils/id';
import { isTag, isTagModel } from '../../../interfaces/data/tag';
import { verifyJWT } from '../../../backend/auth';

/**
 * Get create new recipe
 * @param req 
 * @param res 
 * @returns 
 */
const createRecipe = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(400).json("Invalid Request Type, needs to be POST");
    }
    // check if authenticated
    const jwt = req.headers.authorization;
    if (jwt) {
        // verify JWT
        const verified = verifyJWT(jwt);
        if (!verified) {
            return res.status(401).json("JWT is not valid");
        }
    } else {
        console.error("Missing JWT");
        return res.status(401).json("Missing JWT");
    }

    // validate input
    console.log(req.body);
    const body = req.body;
    if (isRecipe(body)) {
        console.log("Got new recipe");

        await pushNewItem(recipesCollection, body);

        // now update the tags
        for (const tag of Object.keys(body.tags)) {
            const currTag = await getSingleItem(tagsCollection, createRecipeURL(tag));
            if (currTag) {
                if (isTagModel(currTag)) {
                    // update the tag with new data
                    await pushNewItem(tagsCollection, { ...currTag, recipes: [...currTag.recipes, body.url] } as DBItem);
                } else {
                    console.error(`Tag ${currTag} failed tag typecheck`)
                }
            } else {
                // could not add recipe to tag
                console.error(`${tag} ended up being null when queried`)
            }
        }

        return res.status(201).json("Recipe published to database");
    } else {
        // request data is bad
        console.error("The following thing did not pass the recipe typecheck");
        console.error(JSON.stringify(body));
        return res.status(400).json("Item sent is not a recipe");
    }
}

export default createRecipe;

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '4mb' // Set desired value here
        }
    }
}