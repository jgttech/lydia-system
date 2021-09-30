import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { input }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            await response.setData(await new Lexicon({ input }).save());
            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);