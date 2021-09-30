const
init: any = {
    Query: {},
    Mutation: {}
};

export default (resolvers=init, middleware) => {
    try {
        let { Query, Mutation, ...Types }: any = resolvers;

        const
        queryCnt = Object.keys(Query).length,
        queryMethods = Object.keys(Query);

        const
        mutationCnt = Object.keys(Mutation).length,
        mutationMethods = Object.keys(Mutation);

        if (queryCnt > 0)
            for (let i=0; i<queryMethods.length; i++)
                for (let mw of middleware)
                    Query[queryMethods[i]] = mw(Query[queryMethods[i]]);

        if (mutationCnt > 0)
            for (let i=0; i<mutationMethods.length; i++)
                for (let mw of middleware)
                    Mutation[mutationMethods[i]] = mw(Mutation[mutationMethods[i]]);

        return { Query, Mutation, ...Types };
    } catch(e) {
        throw e;
    }
}