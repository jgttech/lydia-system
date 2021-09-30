import { IMongooseEntity } from "./IEntity";
import { model, Schema, Types } from "mongoose";

const EntitySchema = new Schema({
    created: Date,
    modified: Date,
    label: String,
    backgroundColor: {
        type: String,
        default: null
    },
    accentColor: {
        type: String,
        default: null
    },
}, {
    collection: "entity",
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
});

EntitySchema.statics.hasEntityById = async function(_id: string | null = null) {
    if (_id == null) return null
    else {
        const Entity = this.model("Entity");
        return await Entity.countDocuments({ _id }) != 0;
    }
}

EntitySchema.statics.hasEntityByLabel = async function(label: string | null = null) {
    if (label == null) return null
    else {
        const Entity = this.model("Entity");
        return await Entity.countDocuments({ label }) != 0;
    }
}

// Register the model with Mongoose.
model<IMongooseEntity>("Entity", EntitySchema);