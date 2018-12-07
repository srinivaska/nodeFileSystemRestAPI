const chai = require('chai')
, chaiHttp = require('chai-http')
, expect  = require('chai').expect;

chai.use(chaiHttp);
const server = require('../server');


describe('API UNIT TESTING', () => {
    it('Get customers complete data', (done) => {
        chai.request(server)
            .get('/api/customers')
            .end( (err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })

    it('Add customer data', (done) => {
        chai.request(server)
            .post('/api/customers')
            .send({ "firstname": "Pete1r", "lastname": "Thomas1", "age": 17, "id": 2 })
            .end( (err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })

    it('Get Single customer data', (done) => {
        chai.request(server)
            .get('/api/customers/2')
            .end( (err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })

    it('delete Single customer data', (done) => {
        chai.request(server)
            .delete('/api/customers/3')
            .end( (err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })

    it('Update Single customer data', (done) => {
        chai.request(server)
            .put('/api/customers/2')
            .send({ "firstname": "Peter", "lastname": "Thomas", "age": 17, "id": 2 })
            .end( (err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            })
    })



})