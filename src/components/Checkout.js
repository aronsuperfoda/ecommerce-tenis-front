import React from 'react';

const Checkout = () => {
  return (
    <div>
      <h1>Finalizar Compra</h1>
      <form>
        <label>
          Nome:
          <input type="text" name="nome" />
        </label>
        <label>
          Endereço:
          <input type="text" name="endereco" />
        </label>
        <button type="submit">Confirmar Pedido</button>
      </form>
    </div>
  );
};

export default Checkout;