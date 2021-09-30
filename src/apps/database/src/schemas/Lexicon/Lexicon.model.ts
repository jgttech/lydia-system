import { IMongooseLexicon } from "./ILexicon";
import { model, Schema, Types } from "mongoose";
import pagination from "mongoose-paginate-v2";

const
{ ObjectId } = Types,
EntitySchema = new Schema({
    created: Date,
    modified: Date,
    label: String,
    start: Number,
    stop: Number,
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),
LexiconSchema = new Schema({
    created: Date,
    modified: Date,
    input: String,
    entities: [ EntitySchema ]
}, {
    collection: "lexicon",
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
});

LexiconSchema.plugin(pagination);

LexiconSchema.statics.hasInput = async function(input=null) {
    if (input == null) return null;
    else {
        const Lexicon = this.model("Lexicon");
        return await Lexicon.countDocuments({ input }) !== 0;
    }
}

LexiconSchema.statics.hasLexicon = async function(_id=null) {
    if (_id == null) return null;
    else {
        const Lexicon = this.model("Lexicon");
        return await Lexicon.countDocuments({ _id }) !== 0;
    }
}

LexiconSchema.statics.getEntity = async function(lexicon: any = null, entity: string = "") {
    if (lexicon == null || entity.length === 0) return null;
    else {
        const { input, entities } = lexicon;

        if (!input.includes(entity)) return null;
        else {
            const
            start = input.indexOf(entity),
            stop = start + entity.length;

            return entities.find(e =>
                e.start === start &&
                e.stop === stop
            ) || null;
        }
    }
}

LexiconSchema.statics.getEntityData = async function(lexicon: any = null, entity: any = null) {
    if (lexicon == null || entity == null) return null;
    else {
        const { label, start, stop } = entity;

        return lexicon.entities.find(e =>
            e.label === label &&
            e.start === start &&
            e.stop == stop
        ) || null;
    }
}

LexiconSchema.statics.hasEntity = async function(lexicon: any = null, entity: any = null) {
    if (lexicon == null || entity == null) return null;
    else {
        const
        { start, stop }: any = entity,
        { entities }: any = lexicon;

        if (entities == null) return false;
        else return entities == null ? false : entities.find(e =>
            e.start === start &&
            e.stop === stop
        ) != null;
    }
}

LexiconSchema.statics.hasEntityWithLabel = async function(lexicon: any = null, entity: any = null) {
    if (lexicon == null || entity == null) return null;
    else {
        const
        { label, start, stop }: any = entity,
        { entities } = lexicon;

        return entities == null ? false : entities.find(e =>
            e.label === label &&
            e.start === start &&
            e.stop === stop
        ) != null;
    }
}

LexiconSchema.statics.hasEntityById = async function(lexicon: any = null, _entity: string | null = null) {
    if (lexicon == null || _entity == null) return null;
    else {
        const { entities } = lexicon;

        return entities != null
            ? entities.find(({ _id }) => _id.toString() === _entity) != null
            : false;
    }
}

// Register the model with Mongoose.
model<IMongooseLexicon>("Lexicon", LexiconSchema);