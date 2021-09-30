import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id, number }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasThreadById(_id))
                await response.setError(...STATUS.NOT_FOUND);
            else {
                const
                { messages } = await Thread.findOne({ _id }),
                data: any = [];

                for (const message of messages) {
                    const msg = {...message}._doc;

                    if (msg.number === number)
                        data.push(msg);
                }

                await response.setData(data);
            }

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)