import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { inputs }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            const updatedLexicons: any = [];

            for (let { _id, input=null, entities=[] } of inputs)
                if (await Lexicon.hasLexicon(_id)) {
                    if (input != null)
                        await Lexicon.findOneAndUpdate({ _id }, { input });

                    for (let entity of entities) {
                        const
                        _entity = ({...entity})._id,
                        updateEntity = {};

                        delete entity._id;

                        for (let prop in entity)
                            updateEntity[`entities.$.${prop}`] = entity[prop];

                        await Lexicon.updateOne(
                            { "entities._id": _entity },
                            { $set: updateEntity }
                        );
                    }

                    updatedLexicons.push(await Lexicon.findOne({ _id }));
                }

            if (response.errors.length === 0)
                await response.setData(updatedLexicons);

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);