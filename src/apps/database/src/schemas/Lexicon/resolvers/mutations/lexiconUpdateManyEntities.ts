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
                for (let data of entities) {
                    const { label, start, stop } = data.entity;

                    if (await Lexicon.hasEntityById(lexicon, data._id))
                        await Lexicon.updateOne({ "entities._id": data._id }, { $set: {
                            "entities.$.label": label,
                            "entities.$.start": start,
                            "entities.$.stop": stop,
                        }});
                }

                await response.setData(await Lexicon.findOne({ _id }));
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);