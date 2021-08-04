 function socket2(socket, listUser) {
    socket.on('make', (buyData) => {
        const { sellerId, userId, state } = buyData;
        console.log('vendedor ', sellerId, ' usuario ', userId, ' estado ', state);
        console.log(listUser, listUser[sellerId], listUser[userId]);
        switch (state) {
            case 'Pendente':
                console.log('Pendente', listUser[sellerId])
                socket.to(listUser[sellerId]).emit('state', 'Pendente'); break;
            case 'Preparando':
                console.log('Preparando', listUser[userId])
                socket.to(listUser[userId]).emit('state', 'Preparando'); break;
            case 'Em Trânsito':
                console.log('Em Trânsito', listUser[userId])
                socket.to(listUser[userId]).emit('state', 'Em Trânsito'); break;
            case 'Entregue':
                console.log('Entregue', listUser[sellerId])
                socket.to(listUser[sellerId]).emit('state', 'Entregue'); break;
            default:
                console.log('erro', listUser[sellerId])
                socket.to(listUser[sellerId]).emit('state', 'erro');
                socket.to(listUser[userId]).emit('state', 'erro'); break;
            }
        });
    }
                    
let listUser = {};
 const ets = (socket) => {
    console.log(`Usuário conectado. ID: ${socket.id} `);
    socket.on('ping', () => {
        console.log(`${socket.id} emitiu um ping!`);
    });
    socket.on('hello', (id) => {
        console.log('O usuario ', id, 'chegou');
        listUser[id]= socket.id ; 
        // { 3:OBXXZ2_gE-dkW5uaAAAF  }
    });
    socket2(socket, listUser);
    socket.on('disconnect', () => {
        // const index = listUser.findIndex((user) => user.socketId === socket.id);
        // console.log('O usuario ', listUser[index].id, ' foi embora');
        // listUser = listUser.slice(index, 1);
    });
};
module.exports = {
    ets,
};
// console.log('vendedor ', sellerId, ' usuario ', userId, ' estado ', state);
// // console.log('Stado não validado ');
// console.log(listUser, listUser[indexSeller].code, listUser[indexUser].code);
// socket.on('inDelivery', () => {
    
// });
// socket.on('delivered', () => {
    
// });
//   Pendente - Criado
//   Preparando - Vendedor muda
//   Em Trânsito - Vendedor muda 
//   Entregue - Cliente muda 

// { (sockt.id): id_do_banco  } { id: soccket }