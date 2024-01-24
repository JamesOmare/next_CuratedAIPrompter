import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        match: [/^[a-zA-Z0-9]+$/, 'Please enter a valid username, it should containt 8-20 alphanumeric characters and be unique'],
        unique: true,
    },
    
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email already exists'],
        minlength: 6,
    },
    
    image: {
        type: String,
        required: [true, 'Please enter an image'],
    },
});

