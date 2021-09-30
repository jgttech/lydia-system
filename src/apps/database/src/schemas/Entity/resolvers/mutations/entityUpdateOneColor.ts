import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Entity",
    async (Entity, response, root, { _id, color }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Entity.hasEntityById(_id))
                response.setError(...STATUS.ENTITY_LABEL_NOT_FOUND)
            else {
                const { backgroundColor, accentColor } = color;

                await Entity.findOneAndUpdate({ _id }, {
                    backgroundColor,
                    accentColor
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