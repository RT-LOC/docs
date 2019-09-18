# REST API

The REST api at *api.cloud.rtloc.com* can be queried for meta information such as client/company data, RTLS project data and user data. For an overview take a look at the [postman API documentation](https://documenter.getpostman.com/view/7976630/S1a637Cc?version=latest).

## Example
This example code interacts with the REST API to 1) log in, 2) get the projects belong to this demo user:

```js
const axios = require('axios')
const qs = require("qs")

const http = axios.create({
  baseURL: 'https://api.cloud.rtloc.com',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
    // Authorization: 'Bearer {token}'
  }
})


const login = async (user) => {
  let resp
  resp = await http.post("/auth/login",
    qs.stringify(user)
  )
  return resp.data
}

const getProjects = async token => {
  let resp
  resp = await http.get("/project", {
    headers: { Authorization: "Bearer " + token }
  });
  return resp.data
}

const demo = async user => {
  const { token } = await login(user)
  const projects = await getProjects(token)
  console.log(projects)
}

const user ={ email: 'demo@rtloc.com', password: '12345'}
demo(user)
```

This example is also available at https://github.com/RT-LOC/API-examples.