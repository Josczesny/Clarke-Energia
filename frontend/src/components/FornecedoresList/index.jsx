import React from 'react';
import {
  ListContainer,
  FornecedorCard,
  Logo,
  Info,
  Nome,
  Certificacoes,
  Preco,
  Detalhes
} from './styles';

const FornecedoresList = ({ fornecedores, viewMode = 'list' }) => {
  return (
    <ListContainer>
      {fornecedores.map(fornecedor => (
        <FornecedorCard key={fornecedor.id}>
          <Logo src={fornecedor.logo} alt={`Logo ${fornecedor.nome}`} />
          <Info>
            <Nome>{fornecedor.nome}</Nome>
            <Certificacoes>
              {fornecedor.certificacoes.map(cert => (
                <span key={cert}>{cert}</span>
              ))}
            </Certificacoes>
            <Preco>
              R$ {fornecedor.custoKwh}/kWh
            </Preco>
            <Detalhes>
              <span>Estado: {fornecedor.estadoOrigem}</span>
              <span>Clientes: {fornecedor.totalClientes}</span>
              <span>Avaliação: {fornecedor.avaliacaoMedia}</span>
            </Detalhes>
          </Info>
        </FornecedorCard>
      ))}
    </ListContainer>
  );
};

export default FornecedoresList; 