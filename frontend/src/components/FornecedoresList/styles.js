import styled from 'styled-components';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

export const FornecedorCard = styled.div`
  display: flex;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  gap: 2rem;
  align-items: center;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 4px;
`;

export const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Nome = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin: 0;
`;

export const Certificacoes = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    padding: 0.25rem 0.75rem;
    background: ${({ theme }) => theme.colors.primary.light}20;
    color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    font-size: 0.875rem;
  }
`;

export const Preco = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};
`;

export const Detalhes = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.875rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary.main};
`; 