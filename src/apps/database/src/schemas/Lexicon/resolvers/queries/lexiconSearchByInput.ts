import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Lexicon",
    async (Lexicon, response, root, { input="", limit=5, options }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (input.length > 0 && input !== "*") {
                const
                { exactMatch=false }: any = options,

                query = !exactMatch
                    ? { input: { $regex: input, $options: "i", }}
                    : { input },

                data = limit == 0
                    ? await Lexicon.find(query).sort({ modified: "descending" })
                    : await Lexicon.find(query).limit(limit).sort({ modified: "descending" });

                response.setData(data);
            } else if (input === "*") {
                response.setData(
                    await Lexicon.find({})
                        .limit(limit)
                        .sort({ modified: "descending" })
                );
            }

            response.send();
        } catch(e) {
            console.log(e);
            response.setError(...STATUS.THROW);
            response.send();
        }
    }
);
