import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { _id }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            let lexicon = await Lexicon.findOne({ _id });

            if (lexicon == null)
                await response.setError(...STATUS.LEXICON_NOT_FOUND);
            else {
                await Lexicon.deleteOne({ _id });
                lexicon = await Lexicon.findOne({ _id });

                if (lexicon != null)
                    await response.setError(...STATUS.LEXICON_REMOVAL_FAILURE);
                else
                    await response.setData(null);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);