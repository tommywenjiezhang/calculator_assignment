const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const indexRoute = require('../app');
const should = chai.should();
const expect = chai.expect;

describe("GET  route / ", ()=> {
  it("should return 200", done =>{
    chai
    .request(indexRoute)
    .get('/')
    .end((err,res) =>{
      res.should.have.status(200);
      done();
    })
  })
})
