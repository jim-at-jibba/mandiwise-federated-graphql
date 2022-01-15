import express from "express"
import jwt from "express-jwt"
import jwks from "jwks-rsa"

const app = express()

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${process.env.AUTH0_ISSUER}.well-known/jwks.json`,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ["RS256"],
  credentialsRequired: false,
})

//@ts-ignore
app.use(jwtCheck, (err, req, res, next) => {
  console.log({err}, req.user)
  if (err.code === "invalid_token") {
    next()
  } else {
    next(err)
  }
})
export default app
