/* eslint-env node, mocha */

// Depedencies
const chai = require('chai')
const chaiHttp = require('chai-http')
const Server = require('../app/server.js')

// core
const server = new Server()
server.dbConnect()
server.run()

const app = server.app
const should = chai.should()

chai.use(chaiHttp)

let userCreate

/**
 * GET /user
 */
describe('/user', () => {
  it('POST /create should create an user', (done) => {
    const result = {

    }

    const payload = {
      'email': 'sebastien.nobour@gmail.com',
      'password': '123456789'
    }

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse(JSON.stringify(response))

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })
})
