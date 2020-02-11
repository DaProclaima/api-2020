const User = require('../../models/user')
const check = require('../users/payload-validator/update.js')
const validator = require('node-validator')

/**
 * Update
 * @Class
 */
class Update {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', User)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.put('/users/update/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        const { body } = req
        const user = this.UserModel.find(id)
        if (!user) {
          res.status(200).json({})
        } else {
          res.status(200).json(Object.assign({}, user, body))
        }
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

module.exports = Update
