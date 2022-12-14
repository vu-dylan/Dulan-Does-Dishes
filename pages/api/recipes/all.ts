import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllItems } from '../../../backend/common';
import { recipesCollection } from '../../../backend/constants';
import { isRecipe, Recipe } from '../../../interfaces/data/recipe';

/**
 * Get all recipes
 * @param req 
 * @param res 
 * @returns 
 */
const getAllRecipes = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        console.log(`Client sent a ${req.method} insead of a GET for all recipes`);
        return res.status(400).json("Invalid Request Type, needs to be GET");
    }
    console.log("Getting all recipes");
    const queryRes = await getAllItems(recipesCollection);
    if (queryRes) {
        console.log(queryRes.length);
        // only send back recipe items
        const recipeArray: Recipe[] = [];
        for (const item of queryRes) {
            if (isRecipe(item)) {
                recipeArray.push(item);
            } else {
                console.log(item.name + " is not a recipe");
            }
        }
        // send everything that matches
        console.log(`Found all ${recipeArray.length} recipes`);
        // console.log(recipeArray);
        return res.status(200).json(recipeArray);
    } else {
        console.error("All recipes returned null");
        return res.status(502).json("Error");
    }
}

export default getAllRecipes;