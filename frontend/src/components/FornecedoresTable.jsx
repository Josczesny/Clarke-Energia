import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { ArrowUpIcon, ArrowDownIcon } from './icons';

// Styled components
const StyledSortIndicator = styled.span`
  position: absolute;
  right: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.main};
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
`;

// Componente SortIndicator
const SortIndicator = ({ active, direction }) => {
  if (!active || !direction) return null;
  return (
    <StyledSortIndicator $active={active}>
      {direction === 'asc' ? <ArrowUpIcon size={12} /> : <ArrowDownIcon size={12} />}
    </StyledSortIndicator>
  );
};

const FornecedoresTable = ({ fornecedores }) => {
  const [sortConfig, setSortConfig] = useState({
    key: 'nome',
    direction: 'asc'
  });

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key 
        ? prev.direction === 'asc' 
          ? 'desc' 
          : prev.direction === 'desc' 
            ? null 
            : 'asc'
        : 'asc'
    }));
  };

  const sortedFornecedores = React.useMemo(() => {
    const sorted = [...fornecedores];
    if (!sortConfig.direction) return sorted;

    sorted.sort((a, b) => {
      if (sortConfig.key === 'nome' || sortConfig.key === 'estadoOrigem') {
        const comparison = String(a[sortConfig.key]).localeCompare(String(b[sortConfig.key]));
        return sortConfig.direction === 'asc' ? comparison : -comparison;
      }
      
      const comparison = a[sortConfig.key] - b[sortConfig.key];
      return sortConfig.direction === 'asc' ? comparison : -comparison;
    });
    return sorted;
  }, [fornecedores, sortConfig]);

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th onClick={() => handleSort('nome')} $noSort={!sortConfig.direction}>
              Fornecedor
              <SortIndicator active={sortConfig.key === 'nome'} direction={sortConfig.direction} />
            </Th>
            <Th onClick={() => handleSort('estadoOrigem')} $noSort={!sortConfig.direction}>
              Estado
              <SortIndicator active={sortConfig.key === 'estadoOrigem'} direction={sortConfig.direction} />
            </Th>
            <Th onClick={() => handleSort('custoKwh')} $noSort={!sortConfig.direction}>
              Custo kWh
              <SortIndicator active={sortConfig.key === 'custoKwh'} direction={sortConfig.direction} />
            </Th>
            <Th onClick={() => handleSort('limiteMinKwh')} $noSort={!sortConfig.direction}>
              Limite Mínimo
              <SortIndicator active={sortConfig.key === 'limiteMinKwh'} direction={sortConfig.direction} />
            </Th>
            <Th onClick={() => handleSort('totalClientes')} $noSort={!sortConfig.direction}>
              Total Clientes
              <SortIndicator active={sortConfig.key === 'totalClientes'} direction={sortConfig.direction} />
            </Th>
            <Th onClick={() => handleSort('avaliacaoMedia')} $noSort={!sortConfig.direction}>
              Avaliação
              <SortIndicator active={sortConfig.key === 'avaliacaoMedia'} direction={sortConfig.direction} />
            </Th>
            <Th>Certificações</Th>
          </tr>
        </thead>
        <tbody>
          {sortedFornecedores.map(fornecedor => (
            <tr key={fornecedor.id}>
              <Td>
                <FornecedorInfo>
                  <Logo src={fornecedor.logo} alt={fornecedor.nome} />
                  <div>
                    <Nome>{fornecedor.nome}</Nome>
                    <Descricao>{fornecedor.descricao}</Descricao>
                  </div>
                </FornecedorInfo>
              </Td>
              <Td>{fornecedor.estadoOrigem}</Td>
              <Td>R$ {fornecedor.custoKwh.toFixed(2)}</Td>
              <Td>{fornecedor.limiteMinKwh.toLocaleString()} kWh</Td>
              <Td>{fornecedor.totalClientes.toLocaleString()}</Td>
              <Td>{fornecedor.avaliacaoMedia.toFixed(1)}/5.0</Td>
              <Td>
                <Certificacoes>
                  {fornecedor.certificacoes.map((cert, index) => (
                    <Certificacao key={index}>{cert}</Certificacao>
                  ))}
                </Certificacoes>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

const TableContainer = styled.div`
  overflow-x: auto;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  width: 100%;
  
  /* Removendo estilos dos controles de visualização */
  .view-controls {
    display: none;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 100%; // Usar toda largura disponível
`;

const Th = styled.th`
  cursor: pointer;
  user-select: none;
  position: relative;
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  transition: background-color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.background.hover};
  }

  /* Adiciona um indicador sutil quando não há direção de ordenação */
  ${({ $noSort }) => $noSort && css`
    &:after {
      content: '';
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.border};
      opacity: 0.3;
    }
  `}
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const FornecedorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background: white;
  padding: 0.25rem;
`;

const Nome = styled.div`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Descricao = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Certificacoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
`;

const Certificacao = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => `${theme.colors.primary.main}15`};
  color: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => `${theme.colors.primary.main}30`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 500;
`;

export default React.memo(FornecedoresTable); 