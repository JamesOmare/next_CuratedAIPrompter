import { connectToDb } from "@utils/database";
import Prompt from "@models/Prompt";

export const POST = async (request) => {
    const {userId, prompt, tag} = await request.json();

    if (!userId) {
        console.log("userId is required")
        throw new Error("userId is required");
    } else if (!prompt) {
        console.log("prompt is required")
        throw new Error("prompt is required");
    } else if (!tag) {
        console.log("tag is required")
        throw new Error("tag is required");
    }


    try{
        await connectToDb();
        const newPrompt = new Prompt(
            {
                creator: userId,
                prompt,
                tag
            })

            await newPrompt.save();


            return new Response(JSON.stringify(newPrompt, {message: "Prompt created successfully"}), {
                status: 201,
            })

    } catch (e) {
        console.log("Error is: ", e.message)

        return new Response(JSON.stringify({error: e.message}), {
            status: 500,
        })
    }

};