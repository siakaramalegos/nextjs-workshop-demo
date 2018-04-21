// Require express and next
const express = require('express')
const next = require('next')

// Check if in development mode
const dev = process.env.NODE_ENV !== 'production'
// Create an app using the `next` api, passing it the `dev` boolean
const app = next({ dev })
// Assign the handler to a const
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    // Use `express` as the server
    const server = express()

    // Set up masked films route, pulling the id from the query and passing to
    // the page component's queryParams
    server.get('/films/:id', (req, res) => {
      const pathname = '/films'
      const queryParams = { id: req.params.id }
      app.render(req, res, pathname, queryParams)
    })

    // Handle all remaining routes in standard way
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })