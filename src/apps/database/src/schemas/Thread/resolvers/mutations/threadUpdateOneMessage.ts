import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id, _message, message }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasThreadById(_id) || !await Thread.hasMessageById(_id, _message))
                response.setError(...STATUS.NOT_FOUND)
            else {
                const thread = await Thread.findOne({ _id, "messages._id": _message });

                for (let idx in thread.messages) {
                    const msg = {...thread.messages[idx]._doc};

                    delete msg.modified;

                    for (let prop in message)
                        msg[prop] = message[prop];

                    await Thread.updateOne(
                        { _id, "messages._id": _message },
                        { $set: { [`messages.${idx}`]: msg }}
                    );
                }

                await response.setData(await Thread.findOne({ _id }));
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)