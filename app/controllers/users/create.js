/**
 * Create
 * @Class
 */
class Create {
  constructor (app) {
    this.app = app
    this.run()
  }

  /**
   * middleWare
   */
  middleware () {
    this.app.post('/users/create', (req, res) => {
      try {
        res.status(200).json({
          'code': 200,
          'message': 'OK'
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

module.exports = Create
