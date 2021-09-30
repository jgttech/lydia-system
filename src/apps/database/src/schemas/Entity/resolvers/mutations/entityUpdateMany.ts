import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Entity",
    async (Entity, response, root, { entities }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            const updatedEntities: any = [];

            for (let entity of entities)
                if (await Entity.hasEntityById(entity._id)) {
                    const ent = {...entity};

                    if (ent.hasOwnProperty("_id"))
                        delete ent._id;

                    await Entity.findOneAndUpdate({ _id: entity._id }, ent);
                    updatedEntities.push(await Entity.findOne({ _id: entity._id }));

                    await response.setData(updatedEntities);
                }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);