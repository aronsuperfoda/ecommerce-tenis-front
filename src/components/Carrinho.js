import React, { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import { Link } from 'react-router-dom';

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useContext(CarrinhoContext);

  const total = carrinho.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      {carrinho.length === 0 ? (
        <p>O carrinho está vazio.</p>
      ) : (
        <ul>
          {carrinho.map((item, index) => (
            <li key={index}>
              <h2>{item.produto.nome}</h2>
              <p>Quantidade: {item.quantidade}</p>
              <p>Tamanho: {item.tamanho}</p>
              <p>Preço: R$ {(item.produto.preco * item.quantidade).toFixed(2)}</p>
              <button onClick={() => removerDoCarrinho(index)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: R$ {total.toFixed(2)}</p>
      <Link to="/checkout">Finalizar Compra</Link>
    </div>
  );
};

export default Carrinho;