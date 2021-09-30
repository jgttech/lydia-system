import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id=null }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (_id == null)
                await response.setError(...STATUS.ID_REQUIRED);
            else
                await response.setData(await Thread.findOne({ _id }));

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)