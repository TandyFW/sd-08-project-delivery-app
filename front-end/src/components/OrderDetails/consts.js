const PENDING = { action: 'prepare', state: 'Pendente' };
const PREPARING = { action: 'dispatch', state: 'Preparando' };
const ON_THE_WAY = { action: 'delivered', state: 'Em Trânsito' };
const DELIVERED = { action: 'eat', state: 'Entregue' };

export {
  PENDING,
  PREPARING,
  ON_THE_WAY,
  DELIVERED,
};
