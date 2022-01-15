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
    viewer(parent, args, {user}, info) {
      console.log(user)
      return accounts[0]
    },
  },
}

export default resolvers
