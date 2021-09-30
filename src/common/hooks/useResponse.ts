import { type } from "ramda";
import mongoose, { Document } from "mongoose";
import Response from "../utils/Response";

// [About]
// The "useResponse" hook takes 2 arguments. The first argument is
// an array of strings or a single string that represents the name
// of a registered Mongoose model. The first argument is the resulting
// Mongoose model instance(s). The second argument is a new "Response"
// object instance, which is used to handle the returning data in a standard
// format. All arguments passed the first 2, are standard GraphQL resolver
// arguments, in the standards order.
//
// Example Usage:
// export default useResponse("Model", (Model, response, root, args) => {
//     try {
//         Model.find(...);
//
//         // Do stuff...
//
//         response.send();
//     } catch(e) {
//         throw e;
//     }
// }

export default (models: Array<string> | string = [], asyncCallback: Function) =>
(...resolverArgs) => new Promise(async (resolve, reject) => {
    try {
        let modelInstances: Array<Document> | Document = [];

        if (type(models) === "String") {
            modelInstances = await mongoose.model(models);
        } else if (type(models) === "Array") {
            for (let model of models)
                modelInstances.push(await mongoose.model(model));

            if (modelInstances.length === 1)
                modelInstances = modelInstances[0];
        }

        await asyncCallback(
            modelInstances,
            new Response(resolve),
            ...resolverArgs
        );
    } catch(e) {
        reject(e);
    }
});