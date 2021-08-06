const sinon = require('sinon');
const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
const { expect } = require('chai');

const { sale } = require('../../../database/models');
const { saleByIdResponse } = require('../../__mocks__/ordersMocks')

describe("Sockets", () => {
  let io, serverSocket, clientSocket;

  beforeEach((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    require('../../../api/sockets/orderStatus')(io);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  afterEach(() => {
    io.close();
    clientSocket.close();
  });

  it("should send to server a msg to update an order status", (done) => {
    sinon.stub(sale, 'update')
      .resolves();
    sinon.stub(sale, 'findOne')
        .resolves(saleByIdResponse);

    clientSocket.emit("setOrderStatus", { id: 1, status: 'Preparando' });

    serverSocket.on("setOrderStatus", (args) => {
      expect(args).to.include({ id: 1, status: 'Preparando' });
      done();
    });

    serverSocket.emit("getUpdatedStatus",(args) => {
      expect(args).to.equal(saleByIdResponse.status);
      done();
    });

    sale.update.restore();
    sale.findOne.restore();
  });

  it("should get from server the updated order status", (done) => {
    sinon.stub(sale, 'update')
      .resolves();
    sinon.stub(sale, 'findOne')
        .resolves(saleByIdResponse);

    clientSocket.emit("setOrderStatus", { id: 1, status: '' });

    serverSocket.on("setOrderStatus", (args) => {
      expect(args).to.include({ id: 1, status: '' });
      done();
    });

    serverSocket.emit("getUpdatedStatus",(args) => {
      expect(args).to.equal(saleByIdResponse.status);
      done();
    });

    sale.update.restore();
    sale.findOne.restore();
  });

  it("should get from server the updated order status by the Id", (done) => {
    sinon.stub(sale, 'update')
      .resolves();
    sinon.stub(sale, 'findOne')
        .resolves(saleByIdResponse);

    clientSocket.emit("getUpdatedStatus", { id: 1 });

    serverSocket.on("getUpdatedStatus", (args) => {
      expect(args).to.include({ id: 1 });
      done();
    });

    serverSocket.emit("getUpdatedStatus",(args) => {
      expect(args).to.equal(saleByIdResponse.status);
      done();
    });

    sale.update.restore();
    sale.findOne.restore();
  });

  it("should the client set order status for the server", (done) => {
    sinon.stub(sale, 'update')
      .resolves();
    sinon.stub(sale, 'findOne')
        .resolves(saleByIdResponse);

    clientSocket.emit("clientSetOrderStatus", { id: 1, status: 'Preparando' });

    serverSocket.on("clientSetOrderStatus", (args) => {
      expect(args).to.include({ id: 1, status: 'Preparando' });
      done();
    });

    serverSocket.emit("getUpdatedStatus",(args) => {
      expect(args).to.equal(saleByIdResponse.status);
      done();
    });

    sale.update.restore();
    sale.findOne.restore();
  });
});
