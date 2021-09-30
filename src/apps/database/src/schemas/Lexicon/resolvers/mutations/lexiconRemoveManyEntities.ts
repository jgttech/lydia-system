import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { _id, _entities }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            let lexicon = await Lexicon.findOne({ _id });

            if (lexicon == null)
                await response.setError(...STATUS.LEXICON_NOT_FOUND);
            else {
                for (let _entity of _entities)
                    if (await Lexicon.hasEntityById(lexicon, _entity))
                        await Lexicon.findOneAndUpdate(
                            { _id },
                            { $pull: { entities: { _id: _entity }}}
                        );

                response.setData(await Lexicon.findOne({ _id }));
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);