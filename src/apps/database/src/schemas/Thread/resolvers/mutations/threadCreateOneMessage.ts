import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id, message }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasThreadById(_id))
                await response.setError(...STATUS.THREAD_UPDATE_FAILURE);
            else {
                await Thread.findOneAndUpdate({ _id }, { $push: { messages: message }});
                await response.setData(await Thread.findOne({ _id }));
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)