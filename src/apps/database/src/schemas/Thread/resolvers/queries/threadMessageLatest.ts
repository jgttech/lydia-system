import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasThreadById(_id))
                await response.setError(...STATUS.NOT_FOUND);
            else {
                const { messages } = await Thread.findOne({ _id });
                await response.setData(messages[messages.length  - 1]);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)