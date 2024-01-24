import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from '@utils/database'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    async session({ sesion }){

    },

    async signIn({profile}){
        try{
            await connectToDb();

            // check if user exists
            // const user = await User.findOne({email: profile.email});

            // if user exists, return true
            if(user){
                return true;
            }

            // if user does not exist, create a new user
            await User.create({
                name: profile.name,
                email: profile.email,
                image: profile.image,
            })

            return true;
        } catch(error){
            console.log(error);
            return false;
        }
    }

})

export { handler as GET, handler as POST}