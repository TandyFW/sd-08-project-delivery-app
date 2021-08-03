 function socket2(socket, listUser) {
    socket.on('make', (buyData) => {
        const { sellerId, userId, state } = buyData;
        const indexSeller = listUser.findIndex((user) => user.id === sellerId);
        const indexUser = listUser.findIndex((user) => user.id === userId);
        switch (state) {
            case 'Pendente':
                socket.to(listUser[indexSeller].code).emit('state', 'Pendente'); break;
            case 'Preparando':
                socket.to(listUser[indexUser].code).emit('state', 'Preparando'); break;
            case 'Em Trânsito':
                socket.to(listUser[indexUser].code).emit('state', 'Em Trânsito'); break;
            case 'Entregue':
                socket.to(listUser[indexSeller].code).emit('state', 'Entregue'); break;
            default:
                socket.to(listUser[indexSeller].code).emit('state', 'erro');
                socket.to(listUser[indexUser].code).emit('state', 'erro'); break;
            }
        });
    }
                    
 const ets = (socket) => {
    const listUser = [];
    console.log(`Usuário conectado. ID: ${socket.id} `);
    socket.on('ping', () => {
        console.log(`${socket.id} emitiu um ping!`);
    });
    socket.on('hello', (id) => {
        console.log('O usuario ', id, 'chegou');
        listUser.push({ code: socket.id, id });
    });
    socket2(socket, listUser);
    socket.on('disconnect', () => {
        const index = listUser.findIndex((user) => user.socketId === socket.id);
        console.log('O usuario ', listUser[index].id, ' foi embora');
        listUser=listUser.slice(index, 1);
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