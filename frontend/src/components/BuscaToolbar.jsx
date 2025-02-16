import React from 'react';
import styled from 'styled-components';
// Removendo a importação dos ícones que não serão mais usados
// import { GridIcon, ListIcon } from './icons';
// import { IconButton } from './IconButton';

const BuscaToolbar = ({ viewMode, onToggleView }) => {
  return (
    <Container>
      {/* Removendo o ViewControls que continha os botões */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1rem;
`;

// Removendo os estilos não utilizados
// const ViewControls = styled.div`...`;
// const FilterButton = styled(IconButton)`...`;

export default BuscaToolbar; 