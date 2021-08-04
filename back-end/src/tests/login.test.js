/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const { internet } = require('faker/locale/pt_BR')

const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /login', () => {
  describe('quando usuário está cadastrado no banco de dados', () => {
    let response;
    const clientData = {
      email: 'zebirita@email.com',
      password: '$#zebirita#$',
    };
    
    before(async () => {
      response = await chai.request(server).post('/login').send(clientData);
    });
    
    it('retorna o código de status 200', () => {
        expect(response).to.have.status(200);
    });
    
    it('retorna um objeto', () => {
        expect(response.body).to.be.an('object');
    });
    
    it('o objeto possui a propriedade "token"', () => {
        expect(response.body).to.have.property('token');
    });
  });

  describe('quando usuário NÃO está cadastrado no banco de dados', () => {
    let response;
    const MIN_PASSWORD_LENGHT = 6;
    const clientData = {
      email: internet.email(),
      password: internet.password(MIN_PASSWORD_LENGHT),
    };
    
    before(async () => {
      response = await chai.request(server).post('/login').send(clientData);
    });
    
    it('retorna o código de status 404', () => {
        expect(response).to.have.status(404);
    });
    
    it('retorna um objeto', () => {
        expect(response.body).to.be.an('object');
    });
    
    it('o objeto possui a propriedade "message"', () => {
        expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Usuário não encontrado"', () => {
      expect(response.body.message).to.be.equal('Usuário não encontrado');
    });
  });

});


