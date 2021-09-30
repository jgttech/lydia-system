import { Document } from "mongoose";

export interface ILexicon {
    _id?: string
    created?: Date
    modified?: Date
    input?: string
    entities?: Array<ILexiconEntity>
}

export interface ILexiconEntity {
    _id?: string
    label?: string
    start?: number
    stop?: number
}

export interface IMongooseLexicon extends Document {
    hasInput(input: String): boolean
    hasLexicon(_id: String): boolean
    getEntity(lexicon: ILexicon, entity: string): ISchemaEntity
    getEntityData(lexicon: ILexicon, entity: ISchemaEntity): ISchemaEntity
    hasEntity(lexicon: ILexicon, entity: ISchemaEntity): boolean
    hasEntityWithLabel(lexicon: ILexicon, ): boolean
    hasEntityById(_id: String, _entity: String): boolean
}


interface ISchemaEntity {
    label?: String
    start?: number
    stop?: number
}