import mongoose, { Schema, model, Document } from 'mongoose'


const groupSchema = new Schema({    
    name: String,
    groupPicture: String,
    groupPictureThumbnail: String,
    about: String,
    adminEmail: String,
    membersEmails: [ String ],
    membersCount: Number,
    posts: [ String ],
    dateCreated: Number,
}, {
    timestamps: true
})



export const Group = model('Group', groupSchema)