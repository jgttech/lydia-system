import useResponse from "@commonHooks/useResponse";
import { STATUS_CODES } from "@commonUtils/Response";

export default useResponse(
    "Thread",
    async (Thread, response, root, { numbers }) => {
        const STATUS = STATUS_CODES.asArray();

        try {
            if (!await Thread.hasValidNumbers(numbers))
                await response.setError(...STATUS.THREAD_NUMBER_INVALID_EN_US);
            else
                await response.setData(await Thread.findOne({
                    $and: [
                        { numbers: { $size: numbers.length }},
                        { numbers: { $all: numbers }}
                    ]
                }));

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)