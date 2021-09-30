import { Document } from "mongoose";

enum MessageOrigin {
    inbound,
    outbound
}

export interface IThread {
    _id?: string
    created?: Date
    modified?: Date
    numbers?: Array<string>
    messages?: Array<IThreadMessage>
}

export interface IThreadMessage {
    _id?: string
    created?: Date
    modified?: Date
    number?: string
    message?: string
    origin?: MessageOrigin
}

export interface IMongooseThread extends Document {
    hasThreadByNumbers(numbers: null | Array<string>): boolean
    hasValidNumbers(numbers: null | Array<string>): boolean
    hasThreadById(numbers: null | string): boolean
}