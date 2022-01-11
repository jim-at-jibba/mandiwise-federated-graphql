import {gql} from "apollo-server-express"

// Note the `extend` keywork - this allows Apollo federations way of allowing each service a root
// Query type within the composed graph

// the @key directive is what makes the `Account` an entity that can be referenced by 
// another service, and tells the Apollo query planner that an account can be fetched by the id
const typeDefs = gql`
  type Account @key(fields: "id") {
    id: ID!
    email: String!
  }

  extend type Query {
    viewer: Account
  }
`

export default typeDefs
