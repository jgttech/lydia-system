import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id, _message }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasMessageById(_id, _message))
                await response.setError(...STATUS.NOT_FOUND);
            else {
                await Thread.findOneAndUpdate({ _id }, { $pull: { messages: { _id: _message }}});
                await response.setData(await Thread.findOne({ _id }));
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)