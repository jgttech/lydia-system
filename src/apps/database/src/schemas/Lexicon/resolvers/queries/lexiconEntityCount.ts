import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { _id }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            response.setData((await Lexicon.findOne({ _id })).entities.length);
            response.send();
        } catch(e) {
            response.setError(...STATUS.THROW);
            response.send();
        }
    }
);
