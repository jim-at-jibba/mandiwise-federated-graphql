import {ApolloServer} from "apollo-server-express"
import {ApolloGateway, RemoteGraphQLDataSource} from "@apollo/gateway"

const gateway = new ApolloGateway({
  serviceList: [{name: "accounts", url: process.env.ACCOUNTS_SERVICE_URL}],
  // buildService call for every service in the serviceList
  buildService({url}) {
    return new RemoteGraphQLDataSource({
      url,
      // context is what we set below
      //@ts-ignore
      willSendRequest({request, context}) {
        console.log("willSendRequest", request.http?.headers)
        request?.http?.headers.set(
          "user",
          //@ts-ignore
          context.user ? JSON.stringify(context.user) : null,
        )
      },
    })
  },
})

const server = new ApolloServer({
  gateway,
  context: ({req}) => {
    //@ts-ignore
    const user = req.user || null
    return {
      user,
    }
  },
})

export default server
