import { IMongooseThread } from "./IThread";
import { model, Schema, Types } from "mongoose";
import { isMobilePhone } from "validator";

const
SarcasmAnalysisSchema = new Schema({
    created: Date,
    modified: Date,
    sarcastic: {
        type: String,
        default: null
    },
    nonSarcastic: {
        type: String,
        default: null
    }
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),

EmotionAnalysisSchema = new Schema({
    created: Date,
    modified: Date,
    happy: {
        type: String,
        default: null
    },
    angry: {
        type: String,
        default: null
    },
    excited: {
        type: String,
        default: null
    },
    sad: {
        type: String,
        default: null
    },
    fear: {
        type: String,
        default: null
    },
    bored: {
        type: String,
        default: null
    }
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),

SentimentAnalysisSchema = new Schema({
    created: Date,
    modified: Date,
    positive: {
        type: String,
        default: null
    },
    neutral: {
        type: String,
        default: null
    },
    negative: {
        type: String,
        default: null
    }
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),

AnalysisSchema = new Schema({
    created: Date,
    modified: Date,
    sentiment: {
        type: SentimentAnalysisSchema,
        default: null
    },
    emotion: {
        type: EmotionAnalysisSchema,
        default: null
    },
    sarcasm: {
        type: SarcasmAnalysisSchema,
        default: null
    }
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),

// Used to keep track of the overall scope of data
// needed for a thread by the system. This assists in
// keeping track of how the AI will respond, based on
// what information it has and still needs.
DataSchema = new Schema({
    created: Date,
    modified: Date,
    actions: [ String ],
    buy: {
        type: {
            location: {
                type: String,
                default: null
            },
            priceRange: {
                type: String,
                default: null
            },
            propertyType: {
                type: String,
                default: null
            },
            beds: {
                type: String,
                default: null
            },
            baths: {
                type: String,
                default: null
            }
        }
    },
    sell: {
        type: {
            why: {
                type: String,
                default: null
            },
            meeting: {
                type: String,
                default: null
            },
            timeframe: {
                type: String,
                default: null
            },
            condition: {
                type: String,
                default: null
            },
            priceRange: {
                type: String,
                default: null
            },
            propertyType: {
                type: String,
                default: null
            },
            address: {
                type: String,
                default: null
            }
        }
    },
    rent: {
        type: {
            location: {
                type: String,
                default: null
            },
            priceRange: {
                type: String,
                default: null
            },
            propertyType: {
                type: String,
                default: null
            },
            beds: {
                type: String,
                default: null
            },
            baths: {
                type: String,
                default: null
            }
        }
    }
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),

// Individual message from a user.
// The "analysis" information is performed on each of
// the messages the comes into the AI and is saved here.
MessageSchema = new Schema({
    created: Date,
    modified: Date,
    number: {
        type: String,
        default: null
    },
    message: {
        type: String,
        default: null
    },
    analysis: {
        type: AnalysisSchema,
        default: null
    },
    origin: {
        type: String,
        enum: [ "inbound", "outbound" ],
        default: null
    },
}, {
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
}),

// Overall conversation thread.
//
// [analysis]
// The "analysis" information is performed on the entire
// conversation thread and aggregated together. This is meant
// for overall conversational analysis.
ThreadSchema = new Schema({
    created: Date,
    modified: Date,
    numbers: {
        type: [{
            type: String,
            defualt: null
        }]
    },
    messages: {
        type: [ MessageSchema ],
        default: null
    },
    data: {
        type: DataSchema,
        default: null
    },
    analysis: {
        type: AnalysisSchema,
        default: null
    }
}, {
    collection: "thread",
    timestamps: {
        createdAt: "created",
        updatedAt: "modified"
    },
});

ThreadSchema.statics.hasThreadByNumbers = async function(numbers=null) {
    if (numbers == null) return null;
    else {
        const Thread = this.model("Thread");
        return await Thread.countDocuments({ numbers: { $all: numbers }}) !== 0;
    }
}

ThreadSchema.statics.hasValidNumbers = async function(numbers: Array<string> | null = null) {
    if (numbers == null) return null;
    else {
        for (let number of numbers)
            if (!isMobilePhone(number, "en-US"))
                return false;

        return true;
    }
}

ThreadSchema.statics.hasThreadById = async function(_id: string | null = null) {
    if (_id == null) return null;
    else {
        const Thread = this.model("Thread");
        return await Thread.countDocuments({ _id }) !== 0;
    }
}

ThreadSchema.statics.hasMessageById = async function(_id: null | string = null, _message: null | string = null) {
    if (_id == null || _message == null) return null;
    else {
        const Thread = this.model("Thread");
        return await Thread.countDocuments({ _id, "messages._id": _message }) !== 0;
    }
}

ThreadSchema.statics.messageIndexAndData = async function(_id: string | null = null, _message: string | null = null) {
    if (_id == null || _message == null) return null;
    else {
        const
        Thread = this.model("Thread"),
        { messages } = await Thread.findOne({ _id });

        for (const idx in messages)
            if (messages[idx]._id.toString() === _message)
                return [
                    parseInt(idx),
                    {...messages[idx]}._doc
                ];
    }
}

ThreadSchema.statics.updateAnalysis = async function(current: any = null, update: any = null) {
    if (current == null || update == null) return null;
    else {
        current = {...current}._doc;

        for (const section in update)
            if (current.hasOwnProperty(section))
                for (const analysis in update[section])
                    current[section][analysis] = update[section][analysis];

        return current;
    }
}

ThreadSchema.statics.updateData = async function(current: any = null, update: any = null) {
    if (current == null || update == null) return null;
    else {
        current = {...current}._doc;

        for (const section in update)
            switch(section) {
                case "buy":
                case "sell":
                case "rent":
                    if (current.hasOwnProperty(section))
                        for (const analysis in update[section])
                            current[section][analysis] = update[section][analysis];
                    break;

                case "actions":
                    current[section] = update[section];
                    break;
            }

        return current;
    }
}

// Register the model with Mongoose.
model<IMongooseThread>("Thread", ThreadSchema);