import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { _id, entities }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            let lexicon = await Lexicon.findOne({ _id });

            if (lexicon == null)
                await response.setError(...STATUS.LEXICON_NOT_FOUND);
            else {
                for (let entity of entities)
                    if (!await Lexicon.hasEntityWithLabel(lexicon, entity))
                        await Lexicon.findOneAndUpdate({ _id }, { $push: { entities: entity }});

                lexicon = await Lexicon.findOne({ _id });
                await response.setData(lexicon);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);