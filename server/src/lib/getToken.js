import request from "request"
import util from "util"

const requestPromise = util.promisify(request)

export default async function (username, password) {
  const options = {
    method: "POST",
    url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    form: {
      audience: process.env.AUTH0_AUDIENCE,
      client_id: process.env.AUTH0_CLIENT_ID_GRAPHQL,
      client_secret: process.env.AUTH0_CLIENT_SECRET_GRAPHQL,
      grant_type: "http://auth0.com/oauth/grant-type/password-realm",
      password,
      realm: "Username-Password-Authentication",
      scope: "openid",
      username,
    },
  }

  const response = await requestPromise(options).catch((err) => {
    console.error("WHAT", err)
    throw new Error("Error authenticating")
  })

  const body = JSON.parse(response.body)
  console.log(body)
  const {access_token} = body
  if (!access_token) {
    throw new Error(body.error_decsription || "Error authenticating")
  }

  return access_token
}
