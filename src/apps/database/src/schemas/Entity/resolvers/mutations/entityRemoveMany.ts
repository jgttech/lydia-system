import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Entity",
    async (Entity, response, root, { ids }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            const deletedEntities: any = [];

            for (let _id of ids)
                if (await Entity.hasEntityById(_id)) {
                    deletedEntities.push(await Entity.findOne({ _id }));
                    await Entity.deleteOne({ _id });
                }

            await response.setData(deletedEntities);
            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
);