const fetch = require('node-fetch')

const getUsers = () => fetch('https://reqres.in/api/users')
  .then(res => res.json())

module.exports = getUsers