import React from 'react';
import styled from 'styled-components';
import { BsGrid, BsList, BsKanban } from 'react-icons/bs';

const ViewToggle = ({ view, onViewChange }) => (
  <Container>
    <ViewButton $active={view === 'grid'} onClick={() => onViewChange('grid')}>
      <BsGrid /> Grid
    </ViewButton>
    <ViewButton $active={view === 'list'} onClick={() => onViewChange('list')}>
      <BsList /> Lista
    </ViewButton>
    <ViewButton $active={view === 'kanban'} onClick={() => onViewChange('kanban')}>
      <BsKanban /> Kanban
    </ViewButton>
  </Container>
);

const Container = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary.main : 'transparent'};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.text.inverse : theme.colors.text.primary};
  cursor: pointer;
`; 