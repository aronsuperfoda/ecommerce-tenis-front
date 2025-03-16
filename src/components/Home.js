import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const mockProdutos = [
  { id: 1, nome: 'Nike Air Max', preco: 299.90, imagens: ['https://via.placeholder.com/150'], descricao: 'Tênis confortável.', tamanhos: [38, 39, 40, 41] },
  { id: 2, nome: 'Adidas Ultraboost', preco: 349.90, imagens: ['https://via.placeholder.com/150'], descricao: 'Tênis para corridas.', tamanhos: [37, 38, 39, 40] },
  { id: 3, nome: 'Puma RS-X', preco: 199.90, imagens: ['https://via.placeholder.com/150'], descricao: 'Estilo casual.', tamanhos: [39, 40, 41, 42] },
];

const Home = () => {
  console.log('Home está sendo renderizado');
  const produtos = mockProdutos;

  return (
    <div className="container">
      <h1>Catálogo de Tênis</h1>
      <ul className="produto-lista">
        {produtos.map(produto => (
          <li key={produto.id} className="produto-item">
            <Link to={`/produto/${produto.id}`}>
              <img src={produto.imagens[0]} alt={produto.nome} />
              <h2>{produto.nome}</h2>
              <p>R$ {produto.preco.toFixed(2)}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;