const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");
const { assert } = require('chai');
const sinon = require('sinon');

const { sale } = require('../../../database/models');
const { saleCreateResponse, updatedOrderStatusResponse } = require('../../__mocks__/ordersMocks');

describe("Sockets", () => {
  let io, serverSocket, clientSocket;

  before((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });

    sinon.stub(sale, 'findOne').resolves(saleCreateResponse);
    sinon.stub(sale, 'update').resolves(updatedOrderStatusResponse);
  });

  after(() => {
    sale.findOne.restore()
    io.close();
    clientSocket.close();
  });

  it("setOrderStatus socket", (done) => {
    clientSocket.on("setOrderStatus", (arg) => {
      assert.equal(arg, { id: 1, status: 'Preparando' });
      done();
    });
    serverSocket.emit("getUpdatedStatus", updatedOrderStatusResponse.status);
    done();
  });

});
