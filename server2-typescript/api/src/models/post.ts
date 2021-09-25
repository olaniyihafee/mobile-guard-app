import mongoose, { Schema, model, Document } from 'mongoose'


export const postSchema = new Schema({
    byemail: String,
    about: String,
    images: [String],
    videos: [String],
    comments: [ String ],
}, {
    timestamps: true
})



export const Post = model('Post', postSchema)

/* const postSchema = new Schema({
    appelation: String,
    email: String,
    name: String,
    password: String,
    profilePicture: String
}, {
    timestamps: true
}) */