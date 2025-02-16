import React from 'react';
import styled from 'styled-components';
import * as Icons from './icons';

const Container = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  width: 100%;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary.main : theme.colors.background.card};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.text.inverse : theme.colors.text.primary};
  border: 1px solid ${({ $active, theme }) => 
    $active ? theme.colors.primary.main : theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ $active, theme }) => 
      $active ? theme.colors.primary.dark : theme.colors.background.hover};
  }

  svg {
    color: inherit;
  }
`;

const TabNavigation = ({ activeTab = 'busca', onTabChange = () => {} }) => {
  const tabs = [
    { id: 'busca', icon: <Icons.SearchIcon size={20} />, label: 'Buscar Fornecedores' },
    { id: 'economia', icon: <Icons.ChartIcon size={20} />, label: 'Análise de Economia' },
    { id: 'comparacao', icon: <Icons.FileIcon size={20} />, label: 'Comparar Fornecedores' },
    { id: 'configuracoes', icon: <Icons.GearIcon size={20} />, label: 'Configurações' }
  ];

  return (
    <Container>
      {tabs.map(({ id, icon, label }) => (
        <TabButton
          key={id}
          $active={activeTab === id}
          onClick={() => onTabChange(id)}
          type="button"
        >
          {icon}
          <span>{label}</span>
        </TabButton>
      ))}
    </Container>
  );
};

export default React.memo(TabNavigation); 