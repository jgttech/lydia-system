import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { _id, _entity, entity }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            let lexicon = await Lexicon.findOne({ _id });

            if (!await Lexicon.hasEntityById(lexicon, _entity))
                await response.setError(...STATUS.ENTITY_NOT_FOUND);
            else {
                const { label, start, stop } = entity;

                await Lexicon.updateOne({ "entities._id": _entity }, { $set: {
                    "entities.$.label": label,
                    "entities.$.start": start,
                    "entities.$.stop": stop,
                }});

                lexicon = await Lexicon.findOne({ _id });
                await response.setData(lexicon);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)