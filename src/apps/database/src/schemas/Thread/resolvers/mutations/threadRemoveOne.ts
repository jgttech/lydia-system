import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasThreadById(_id))
                await response.setError(...STATUS.THREAD_REMOVE_FAILURE);
            else
                await response.setData(await Thread.deleteOne({ _id }));

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)