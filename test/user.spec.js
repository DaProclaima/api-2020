/*eslint-env node, mocha */

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
  it('GET /create should return 404 error', (done) => {
    const result = '{"code":404,"message":"Not found in API"}'

    chai.request(app)
      .get('/user/notexist')
      .end((err, res) => {
        res.should.have.status(404)

        JSON.stringify(JSON.parse(res.text)).should.be.eql(result)

        done()
      })
  })

  it('POST /create should create an user', (done) => {
    const result = '{"image_profil":"https://placehold.it/64x64","email":"cyril@gmail.com","password":"123456789"}'
    const payload = {"email": "cyril@gmail.com", "password": "123456789" }

    chai.request(app)
      .post('/user/create')
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse(res.text)

        userCreate = JSON.parse(JSON.stringify(response))

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })

   it('PUT / should update an user', (done) => {
    const result = '{"image_profil":"https://placehold.it/64x64","email":"sebastien@gmail.com","password":"123456789"}'
    const payload = {"email": "sebastien@gmail.com"}

    chai.request(app)
      .put(`/user/update/${userCreate.id}`)
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200)

        const response = JSON.parse()

        userCreate = JSON.parse(JSON.stringify(response))

        delete response.id

        JSON.stringify(response).should.be.eql(result)

        done()
      })
  })

  // it('POST /create should create an user', (done) => {
  //   const result = '{"image_profil":"https://randomuser.me/api/portraits/men/86.jpg","email":"sebastien@gmail.com","password":"123456789","age":25,"gender":"m","height":1.73,"weight":98,"city":"Versailles","city_code":"78000","street_number":12,"street_type":"rue","street_name":"de Paris","phone":"0655555500"}'
  //   const payload = {"email": "sebastien@gmail.com", "password": "123456789", "age": 25, "gender": "m", "height": 1.73, "weight": 98, "city": "Versailles", "city_code": "78000", "street_number": 12, "street_type": "rue", "street_name": "de Paris", "phone": "0655555500", "image_profil": "https://randomuser.me/api/portraits/men/86.jpg" }

  //   chai.request(app)
  //     .post('/user/create')
  //     .send(payload)
  //     .end((err, res) => {
  //       res.should.have.status(200)

  //       const response = JSON.parse(res.text)

  //       // userCreate = JSON.parse(JSON.stringify(response))

  //       delete response.id

  //       JSON.stringify(response).should.be.eql(result)

  //       done()
  //     })
  // })

  // it('POST /create should create an user', (done) => {
  //   const result = '{"image_profil":"","email":"","password":""}'
  //   const payload = {"email": "", "password": "", "image_profil":"" }

  //   chai.request(app)
  //     .post('/user/create')
  //     .send(payload)
  //     .end((err, res) => {
  //       res.should.have.status(200)

  //       const response = JSON.parse(res.text)

  //       delete response.id

  //       JSON.stringify(response).should.be.eql(result)

  //       done()
  //     })
  // })

 
})
