import { Document } from "mongoose";

export interface IEntity {
    created?: Date
    modified?: Date
    label?: string
    backgroundColor?: string
    accentColor?: string
}

export interface IMongooseEntity extends Document {
}