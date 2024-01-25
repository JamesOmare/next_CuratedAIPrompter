// import mongoose from "mongoose";

// // track if the database is connected
// let isConnected = false;

// export const connectToDb = async () => {
//     mongoose.set('strictQuery', true);

//     if (isConnected) {
//         console.log('MongoDB is already connected');
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             dbName: process.env.MONGODB_DB_NAME,
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         isConnected = true;

//         console.log('MongoDB is connected');

//     } catch(error) {
//         console.log(error);
//     }
// }

import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt_db",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error);
  }
}