import React from 'react';
import styled from 'styled-components';

const FornecedorListItem = ({ 
  nome, 
  logo, 
  estadoOrigem, 
  custoKwh, 
  limiteMinKwh, 
  totalClientes, 
  avaliacaoMedia 
}) => {
  return (
    <ListItem>
      <LogoContainer>
        <Logo src={logo} alt={`${nome} logo`} />
      </LogoContainer>
      
      <InfoContainer>
        <Nome>{nome}</Nome>
        <Detalhes>
          <span>Estado: {estadoOrigem}</span>
          <span>Custo: R$ {custoKwh.toFixed(2)}/kWh</span>
          <span>Limite Mínimo: {limiteMinKwh.toLocaleString()} kWh</span>
          <span>Total Clientes: {totalClientes.toLocaleString()}</span>
          <span>Avaliação: {avaliacaoMedia.toFixed(1)}</span>
        </Detalhes>
      </InfoContainer>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background.card};
`;

// ... outros styled components

export default FornecedorListItem; 