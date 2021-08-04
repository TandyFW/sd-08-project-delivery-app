/* eslint-disable */
const chai = require('chai');
const chaiHttp = require('chai-http');
const { internet, name } = require('faker/locale/pt_BR')

const server = require('../api/app');

chai.use(chaiHttp);

const { expect } = chai;

const MIN_NAME_LENGHT = 12;
const nameGen = (len) => {
  const result = [name.firstName(), name.middleName(), name.lastName()]
    .join(' ');
  return (
    (len && result.substr(0, len))
    || (result.length < MIN_NAME_LENGHT && nameGen())
    || result
  );
};

describe('POST /register', () => {
  describe('quando NOVO usuário é cadastrado', () => {
    let response;
    const MIN_PASSWORD_LENGHT = 6;
    const clientData = {
      name: nameGen(MIN_NAME_LENGHT),
      email: internet.email(),
      password: internet.password(MIN_PASSWORD_LENGHT),
      role: 'customer',
    };
    
    before(async () => {
      response = await chai.request(server).post('/register').send(clientData);
    });
    
    it('retorna o código de status 201', () => {
        expect(response).to.have.status(201);
    });
    
    it('retorna um objeto', () => {
        expect(response.body).to.be.an('object');
    });
    
    it('o objeto possui as propriedades "id", "name", "email", "password", "role", "token"', () => {
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name');
        expect(response.body).to.have.property('email');
        expect(response.body).to.have.property('password');
        expect(response.body).to.have.property('role');
        expect(response.body).to.have.property('token');
    });
  });

  describe('quando NOVO registro está cadastrado no banco de dados', () => {
    let response;
    const clientData = {
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '$#zebirita#$',
      role: 'customer',
    };
    
    before(async () => {
      response = await chai.request(server).post('/register').send(clientData);
    });
    
    it('retorna o código de status 409', () => {
        expect(response).to.have.status(409);
    });
    
    it('retorna um objeto', () => {
        expect(response.body).to.be.an('object');
    });
    
    it('o objeto possui a propriedade "message"', () => {
        expect(response.body).to.have.property('message');
    });

    it('a propriedade "message" possui o texto "Usuário já possui um cadastro"', () => {
      expect(response.body.message).to.be.equal('Usuário já possui um cadastro');
    });
  });

});


