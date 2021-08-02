import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001';

export default function ClientSocket(id) {
  const [orderStatus, setStatus] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.emit('setOrderStatus', { id, status: '' });
    socket.on('getUpdatedStatus', (status) => {
      setStatus(status);
    });
  }, []);

  return (
    <span>
      { orderStatus }
    </span>
  );
}
