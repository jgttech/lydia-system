import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Entity",
    async (Entity, response, root, { entity }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            const { label } = entity;

            if (await Entity.hasEntityByLabel(label))
                response.setError(...STATUS.ENTITY_LABEL_EXISTS);
            else
                await response.setData(await (new Entity(entity)).save());

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);