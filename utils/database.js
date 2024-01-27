import mongoose from "mongoose";

// track if the database is connected
let isConnected = false;

export const connectToDb = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'share_prompt_db',
        });

        isConnected = true;

        console.log('MongoDB is connected');

    } catch(error) {
        console.log(error);
    }
}