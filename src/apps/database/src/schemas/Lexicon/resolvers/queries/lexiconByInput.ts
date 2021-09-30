import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { input }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Lexicon.hasInput(input))
                await response.setError(...STATUS.NOT_FOUND);
            else
                await response.setData(await Lexicon.findOne({ input }));

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);