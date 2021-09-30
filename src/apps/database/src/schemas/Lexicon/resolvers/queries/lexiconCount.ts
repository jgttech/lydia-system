import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            response.setData(await Lexicon.countDocuments({}));
            response.send();
        } catch(e) {
            response.setError(...STATUS.THROW);
            response.send();
        }
    }
);
