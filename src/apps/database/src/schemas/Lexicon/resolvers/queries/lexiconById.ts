import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse("Lexicon", async (Lexicon, response, root, { _id }) => {
    const STATUS = STATUS_CODES.asArray();

    try {
        if (!await Lexicon.hasLexicon(_id))
            await response.setError(...STATUS.NOT_FOUND);
        else
            await response.setData(await Lexicon.findOne({ _id }));

        await response.send();
    } catch(e) {
        console.log(e);
        await response.setError(...STATUS.THROW);
        await response.send();
    }
});