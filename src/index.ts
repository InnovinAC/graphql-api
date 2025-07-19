import {ApolloServer} from "@apollo/server";
import {startStandaloneServer} from "@apollo/server/standalone";

async function bootstrap() {
    const server = new ApolloServer({
        typeDefs: `#graphql
        
        type User {
            name: String!
            email: String!
            username: String!
            age: Int!
            nationality: String!
        }
        type Query {
            users: [User!]!,
            user: User
        }
        `,
        resolvers: {
            Query: {
                users() {
                    return [{name: "user", email: "user"}];
                }
            }
        }
    })

    const {url} = await startStandaloneServer(server, {
        listen: {
            port: 2000
        }
    })
    console.log(`App is running on ${url}`)
}

bootstrap();
