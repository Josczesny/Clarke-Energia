import React from 'react';
import styled from 'styled-components';

const EconomiaAnalytics = () => {
  return (
    <Container>
      <Title>Análise de Economia</Title>
      <Message>
        Esta funcionalidade está em desenvolvimento. Em breve você poderá:
        <List>
          <ListItem>Visualizar projeções de economia</ListItem>
          <ListItem>Comparar custos entre fornecedores</ListItem>
          <ListItem>Analisar gráficos de consumo</ListItem>
        </List>
      </Message>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1.5rem;
`;

const Message = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const List = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export default EconomiaAnalytics; 