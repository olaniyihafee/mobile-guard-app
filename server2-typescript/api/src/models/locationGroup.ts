import mongoose, { Schema, model, Document } from 'mongoose'


const locationGroupSchema = new Schema({
    location: String,
    membersEmail: [ ],
    agentsEmail: [String],
}, {
    timestamps: true
})



export const LocationGroup = model('LocationGroup', locationGroupSchema)