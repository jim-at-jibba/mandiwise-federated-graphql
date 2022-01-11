import {ApolloServer} from "apollo-server"
import {buildSubgraphSchema} from "@apollo/federation"

import resolvers from "./resolvers"
import typeDefs from "./typeDefs"

// What
;(async () => {
  const port = process.env.ACCOUNTS_SERVICE_PORT

  const server = new ApolloServer({
    schema: buildSubgraphSchema([
      {
        typeDefs,
        resolvers,
      },
    ]),
  })

  const {url} = await server.listen({port})
  console.log(`Accounts service ready at ${url}`)
})()
