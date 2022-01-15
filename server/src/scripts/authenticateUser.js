import getToken from "../lib/getToken"
;(async () => {
  const [email, password] = process.argv.slice(2)

  const token = await getToken(email, password).catch((err) => {
    console.error(err)

    process.exit(1)
  })

  console.log(token)
})()
