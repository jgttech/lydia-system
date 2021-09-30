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
                const
                { messages } = await Thread.findOne({ _id, "messages._id": _message }),
                msg = {...messages.find((msg) => msg._id == _message)}._doc;

                await response.setData(msg);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)