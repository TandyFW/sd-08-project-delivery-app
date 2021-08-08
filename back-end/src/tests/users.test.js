const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
const { expect } = require("chai");

chai.use(chaiHttp);

const server = require("../api/server");

describe("1- GET /delivery/users", () => {
  describe("Ao requisitar a lista de usuários:", () => {
    let response;
    before(async () => {
      response = await chai.request(server).get("/delivery/users");
    });
    it("Verifica se o status retornado é 200", () => {
      expect(response).to.have.status(200);
    });
    it("Verifica se é retornado um array de usuários", () => {
      expect(response.body).to.be.an("array");
    });
    it('Verifica se o objeto possui a propriedade "id"', () => {
      expect(response.body[0]).to.have.property("id");
    });
    it('Verifica se a propriedade "id" tem o valor "1"', () => {
      expect(response.body[0].id).to.be.equals(1);
    });
  });
});
