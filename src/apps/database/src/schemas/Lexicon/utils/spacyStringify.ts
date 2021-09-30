export default async (data): Promise<string> => JSON.stringify({
    input: data.map(({ input, entities }) => ([
        input,
        {
            entities: entities.map(({ start, stop, label }) => ([
                start,
                stop,
                label
            ]))
        }
    ]))
});
