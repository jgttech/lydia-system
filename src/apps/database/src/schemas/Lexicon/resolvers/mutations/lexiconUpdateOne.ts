import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { _id, input }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            let lexicon = await Lexicon.findOne({ _id });

            if (lexicon == null || lexicon.input === input)
                await response.setError(...STATUS.LEXICON_INPUT_UPDATE_FAILURE);
            else {
                await Lexicon.findOneAndUpdate({ _id }, { input });
                lexicon = await Lexicon.findOne({ _id });

                if (lexicon.input !== input)
                    await response.setError(...STATUS.LEXICON_INPUT_UPDATE_FAILURE);
                else
                    await response.setData(lexicon);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);