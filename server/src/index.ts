import server from "./config/apollo"
import app from "./config/app"
;(async () => {
  const port = process.env.PORT

  await server.start()
  server.applyMiddleware({app})

  app.listen({port}, () => {
    console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  })
})()
