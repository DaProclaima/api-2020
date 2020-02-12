const User = require('../../models/user')
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
    this.app.delete('/user/delete/:id', (req, res) => {
      try {
        const { id } = req.params
        let obj = this.UserModel.findById(id)
        this.UserModel.findByIdAndDelete(id, user => {
          return res.status(200).json(user)
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
