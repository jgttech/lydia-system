import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { lexicons }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            const newLexicons: any = [];

            for (let lexicon of lexicons) {
                const newLexicon = await (new Lexicon(lexicon)).save();

                newLexicons.push(newLexicon);
                if (!Lexicon.hasLexicon(newLexicon._id)) {
                    response.data = null;
                    await response.setError(...STATUS.LEXICON_CREATION_FAILURE);
                    break;
                }
            }

            if (response.errors.length == 0)
                await response.setData(newLexicons);

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);