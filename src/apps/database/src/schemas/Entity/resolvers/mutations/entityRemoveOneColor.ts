import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Entity",
    async (Entity, response, root, { _id }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Entity.hasEntityById(_id))
                await response.setError(...STATUS.ENTITY_LABEL_NOT_FOUND);
            else {
                await Entity.findOneAndUpdate({ _id }, {
                    backgroundColor: null,
                    accentColor: null
                });

                await response.setData(await Entity.findOne({ _id }));
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);