import auth0 from "../../config/auth0"
const accounts = [{id: "1", email: "devchirps@mandiwise.com"}]

// `__resolveReference` allows individual types to be resolved by reference from another service
//
// Basically, it allows us to reference an external type in other schemas
const resolvers = {
  Account: {
    //@ts-ignore
    __resolveReference(reference, context, info) {
      return accounts.find((account) => account.id === reference.id)
    },
  },

  Query: {
    //@ts-ignore
    async viewer(parent, args, {user}, info) {
      const viewer = await auth0.getUser({id: user.sub})
      console.log({user, viewer})
      return accounts[0]
    },
  },
}

export default resolvers
