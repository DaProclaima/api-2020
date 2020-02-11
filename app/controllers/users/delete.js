const User = require('../../models/user')
const check = require('./payload-validator/delete.js')
const validator = require('node-validator')
/**
 * Delete
 * @Class
 */
class Delete {
  constructor (app, connect) {
    this.app = app
    this.UserModel = connect.model('User', User)

    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.delete('/users/delete/:id', validator.express(check), (req, res) => {
      try {
        const { id } = req.params
        this.UserModel.find(id).remove(() => {
          return res.status(200).json({'message': `${id} deleted`}) || {}
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
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

module.exports = Delete
