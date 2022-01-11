import {gql} from "apollo-server-express"

// Note the `extend` keywork - this allows Apollo federations way of allowing each service a root
// Query type within the composed graph

const typeDefs = gql`
  extend type Query {
    hello: String
  }
`

export default typeDefs
