import {loadFilesSync} from "@graphql-tools/load-files";
import {mergeTypeDefs} from "@graphql-tools/merge";
import path from "node:path";

const typesArray = loadFilesSync(
    path.join(__dirname, './**/*.graphql'),
)

const typeDefs = mergeTypeDefs(typesArray)

export default typeDefs;