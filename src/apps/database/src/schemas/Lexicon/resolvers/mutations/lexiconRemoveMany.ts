import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { ids }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            for (let _id of ids)
                if (await Lexicon.hasLexicon(_id)) {
                    await Lexicon.deleteOne({ _id });

                    if (await Lexicon.hasLexicon(_id)) {
                        await response.setError(...STATUS.LEXICON_REMOVAL_FAILURE);
                        break;
                    }
                }

            if (response.errors.length === 0)
                await response.setData(null);

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);