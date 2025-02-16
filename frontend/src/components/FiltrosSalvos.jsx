import React from 'react';
import styled from 'styled-components';
import { BsStar, BsStarFill, BsTrash } from 'react-icons/bs';

const FiltrosSalvos = ({ filtros, onAplicar, onRemover, onFavoritar }) => (
  <Container>
    {filtros.map(filtro => (
      <FiltroCard key={filtro.id}>
        <FiltroHeader>
          <FiltroNome>{filtro.nome}</FiltroNome>
          <FiltroActions>
            <IconButton onClick={() => onFavoritar(filtro.id)}>
              {filtro.favorito ? <BsStarFill /> : <BsStar />}
            </IconButton>
            <IconButton onClick={() => onRemover(filtro.id)}>
              <BsTrash />
            </IconButton>
          </FiltroActions>
        </FiltroHeader>
        <FiltroDescricao>{filtro.descricao}</FiltroDescricao>
        <AplicarButton onClick={() => onAplicar(filtro)}>
          Aplicar Filtro
        </AplicarButton>
      </FiltroCard>
    ))}
  </Container>
);

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const FiltroCard = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const FiltroHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const FiltroNome = styled.h3`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FiltroActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.secondary};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const FiltroDescricao = styled.p`
  // Add your styles here
`;

const AplicarButton = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.primary.main};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`; 