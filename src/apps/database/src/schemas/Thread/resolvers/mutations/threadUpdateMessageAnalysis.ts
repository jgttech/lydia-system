import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { _id, _message, analysis }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasMessageById(_id, _message))
                await response.setError(...STATUS.NOT_FOUND);
            else {
                let [ index, message ] = await Thread.messageIndexAndData(_id, _message);

                if (message.analysis == null)
                    await Thread.updateOne(
                        { _id, "messages._id": _message },
                        { $set: { [`messages.${index}.analysis`]: analysis }}
                    );
                else
                    await Thread.updateOne(
                        { _id, "messages._id": _message },
                        { $set: {
                            [`messages.${index}.analysis`]:
                                await Thread.updateAnalysis(
                                    message.analysis,
                                    analysis
                                )
                        }}
                    );
            }

            await response.setData(await Thread.findOne({ _id }));
            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)