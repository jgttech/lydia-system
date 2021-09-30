export default resolver => async (...resolverArgs) => {
    try {
        // Apply a parser to the args to instantiate the generic Object prototype
        // to the passed in "args" property. The second argument.
        resolverArgs[1] = JSON.parse(JSON.stringify(resolverArgs[1]));

        return await resolver(...resolverArgs);
    } catch(e) {
        throw e;
    }
}