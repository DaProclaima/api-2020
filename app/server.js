const express = require('express')
const routes = require('./controllers/routes.js')

/**
 * Server
 * @Class
 */
class Server {
  constructor () {
    this.app = express()
  }

  /**
   * Routes
   */
  routes () {
    new routes.users.Create(this.app)
    new routes.users.Show(this.app)
    new routes.users.Delete(this.app)

    this.app.use((req, res) => {
      res.status(404).json({
        'code': 404,
        'message': 'Not found in API'
      })
    })
  }

  /**
   * Run
   */
  run () {
    this.routes()
    this.app.listen(3000)
  }
}

/* es 5 it was var Server = function(){

        Server.prototype.run(){}
} */
module.exports = Server
