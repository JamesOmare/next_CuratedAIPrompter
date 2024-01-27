import { connectToDb } from "@utils/database";
import Prompt from "@models/Prompt";


export const GET = async (request) => {
    try {
        await connectToDb();

        const prompts = await Prompt.find({}).populate('creator');

        return new Response(JSON.stringify(prompts), {
            status: 200,
        })

    } catch (error) {
        console.log("Failed TO Fetch all prompts. Error is: ", error.message)
        return new Response(JSON.stringify({error: error.message}), {
            status: 500,
        })
    }
}