import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";
import {UserData} from "./common/data";
import typeDefs from "./schema/types";
import {config} from "./common/config";
import Database from "./common/database";

async function bootstrap() {
    const server = new ApolloServer({
        typeDefs,
        resolvers: {
            Query: {
                users() {
                    return UserData;
                },
                user(_, args) {
                    const {id} = args
                    return UserData.find(user => user.id == id);
                }
            }
        }
    })

    if (process.env.PORT) {
        const {url} = await startStandaloneServer(server, {
            listen: {
                port: parseInt(config.PORT)
            }
        })
        console.log(`App is running on ${url}`)

        Database.initialize();
    }
}

bootstrap();
