import { connectToDB } from "@utils/database";
import Prompt from "@models/Prompt";

export const POST = async (req) => {
    const {userId, prompt, tag} = await req.json();

    try{
        await connectToDB();
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
        return new Response(JSON.stringify({error: e.message}), {
            status: 500,
        })
    }

}