import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Entity",
    async (Entity, response, root, { entities }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            const newEntities: any = [];

            for (let entity of entities)
                if (!await Entity.hasEntityByLabel(entity.label)) {
                    const newEntity = new Entity(entity);
                    await newEntity.save();

                    newEntities.push(newEntity);
                }

            await response.setData(newEntities);
            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);