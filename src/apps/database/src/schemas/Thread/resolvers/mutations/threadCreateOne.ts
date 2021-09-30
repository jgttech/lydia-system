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
                if (await Thread.hasThreadByNumbers(numbers))
                    await response.setError(...STATUS.THREAD_CREATE_FAILURE);
                else
                    await response.setData(await new Thread({ numbers }).save());

            await response.send();
        } catch(e) {
            await response.setError(...STATUS.THROW);
            await response.send();
        }
    }
)