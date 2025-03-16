import React from 'react';
import { useParams } from 'react-router-dom';

const mockProdutos = [
  {
    id: 1,
    nome: 'Nike Air Max',
    preco: 299.90,
    imagens: ['https://via.placeholder.com/150'],
    descricao: 'Tênis confortável para o dia a dia.',
    tamanhos: [38, 39, 40, 41],
  },
  {
    id: 2,
    nome: 'Adidas Ultraboost',
    preco: 349.90,
    imagens: ['https://via.placeholder.com/150'],
    descricao: 'Tênis perfeito para corridas.',
    tamanhos: [37, 38, 39, 40],
  },
  {
    id: 3,
    nome: 'Puma RS-X',
    preco: 199.90,
    imagens: ['https://via.placeholder.com/150'],
    descricao: 'Estilo casual e moderno.',
    tamanhos: [39, 40, 41, 42],
  },
];

const Produto = () => {
  const { id } = useParams();
  const produto = mockProdutos.find(p => p.id === parseInt(id));

  if (!produto) return <div>Produto não encontrado</div>;

  const handleAdicionarAoCarrinho = () => {
    // Simulação de adicionar ao carrinho
    //TODO: integrar o Context aqui depois
    alert(`Adicionado ao carrinho: ${produto.nome}`);
  };

  return (
    <div>
      <h1>{produto.nome}</h1>
      <img src={produto.imagens[0]} alt={produto.nome} style={{ width: '300px' }} />
      <p>{produto.descricao}</p>
      <p>Preço: R$ {produto.preco.toFixed(2)}</p>
      <label>
        Tamanho:
        <select>
          <option value="">Selecione</option>
          {produto.tamanhos.map(tam => (
            <option key={tam} value={tam}>{tam}</option>
          ))}
        </select>
      </label>
      <button onClick={handleAdicionarAoCarrinho}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default Produto;