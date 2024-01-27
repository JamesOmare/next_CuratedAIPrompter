// checkout next-auth.js.org docs for more info on this file
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { connectToDb } from '@utils/database';


import User from '@models/User'

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        async session({ session }){

            const sessionUser = await User.findOne({
                email: session.user.email
            });
    
            session.user.id = sessionUser._id.toString();
    
            return session
    
        },
    
        async signIn({profile}){
            try{
                await connectToDb();
    
                // check if user exists
                const userExists = await User.findOne({
                    email: profile.email
                });
    
    
                // if user does not exist, create a new user
                if (!userExists){
                    await User.create({
                        // ensure it has no spaces and is lowercase
                        username: profile.name.replace(" ", "").toLowerCase(),
                        email: profile.email,
                        image: profile.picture,
                    })
                }
    
                return true;
            } catch(error){
                console.log(error);
                return false;
            }
        }
    }


})

export { handler as GET, handler as POST}