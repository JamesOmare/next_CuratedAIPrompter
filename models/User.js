import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter a username'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"],
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


// check if the model exists, if it does, use it, if not, create it
const User = models.User || model('User', userSchema);

export default User;