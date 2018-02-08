const getUsers = require('./getUsers')
const fetch = require('node-fetch')

it('fetches users', async () => {

  const response = [
    { id: 1, name: 'Simo' },
    { id: 2, name: 'Massimo' },
  ]

  fetch.mockResponse(JSON.stringify(response))

  expect(await getUsers()).toEqual(response)

})