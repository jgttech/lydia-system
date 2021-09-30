import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id, data }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasThreadById(_id))
                await response.setError(...STATUS.NOT_FOUND);
            else {
                const thread = await Thread.findOne({ _id });

                if (thread.data == null)
                    await Thread.findOneAndUpdate({ _id }, { data });
                else
                    await Thread.findOneAndUpdate({ _id }, {
                        data: await Thread.updateData(
                            thread.data,
                            data
                        )
                    });
            }

            await response.setData(await Thread.findOne({ _id }));
            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)