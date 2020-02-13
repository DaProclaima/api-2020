const CryptoJS = require('crypto-js')


/**
* Jwt - Json Web Token
*/
class JWT {

  /**
  * Encode base64
  * @param {string} source
  * @return {string} string
  */
  encodeBase64 (source) {
    const encodedSource = CryptoJS.enc.Utf8.parse(JSON.stringify(source))
    
    return CryptoJS.enc.Base64.stringify(encodedSource)
      .replace(/=+$/, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
  }

  /**
  * Encode base64
  * @param {string} 
  * @return {string} string
  */
  encodeSHA256 (source) {
    const secret = 'secret'
    let encodedSource = CryptoJS.enc.Utf8.parse(JSON.stringify(source))

    encodedSource = CryptoJS.HmacSHA256(encodedSource, secret)

    return this.encodeBase64(encodedSource)
  }

  JWTgenerator (user) {

    if (!user.id && !user.email) {
      return new Error('[ERROR] JWTGenerator() -> user id or email is missing !')
    }

    const header = { alg: 'HS256', type: 'JWT'}
    const payload = { id: user.id , email: user.email}
    const signature = { header, payload, timestamp: Date.now() }

    return {
      header: this.encodeBase64(header),
      payload: this.encodeBase64(payload),
      signature: this.encodeSHA256(signature)
    }
  }

  saveToken(){

  }

  getToken(){
    // get the same token. if not exists send error
  }
}

module.exports = JWT