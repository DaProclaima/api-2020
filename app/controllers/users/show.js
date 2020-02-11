const users = require('../../models/index.js')

/**
 * Show
 * @Class
 */
class Show {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.get('/users/show/:id', (req, res) => {
      try {
        const { id } = req.params
        res.status(200).json(users.find(user => user.id === id) || {})
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      }
    })
  }

  /**
   * Run
   */
  run () {
    this.middleware()
  }
}

module.exports = Show
