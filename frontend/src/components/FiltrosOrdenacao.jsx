import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FiltrosOrdenacao = ({ estado, setEstado, ordenacao, setOrdenacao }) => {
  const estados = [
    'Todos',
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
    'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
    'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
  ];

  const filtros = [
    { label: 'Menor Preço', value: 'custoKwh_asc' },
    { label: 'Maior Avaliação', value: 'avaliacaoMedia_desc' },
    { label: 'Mais Clientes', value: 'totalClientes_desc' },
    { label: 'Menor Limite', value: 'limiteMinKwh_asc' }
  ];

  return (
    <Container role="group" aria-label="Filtros de busca">
      <SelectGroup>
        <Label htmlFor="estado-select">Estado</Label>
        <Select 
          id="estado-select"
          value={estado} 
          onChange={(e) => setEstado(e.target.value)}
          aria-label="Selecione o estado"
        >
          {estados.map(uf => (
            <option key={uf} value={uf}>{uf}</option>
          ))}
        </Select>
      </SelectGroup>

      <SelectGroup>
        <Label htmlFor="ordenacao-select">Ordenar por</Label>
        <Select 
          id="ordenacao-select"
          value={ordenacao} 
          onChange={(e) => setOrdenacao(e.target.value)}
          aria-label="Selecione a ordenação"
        >
          {filtros.map(opcao => (
            <option key={opcao.value} value={opcao.value}>
              {opcao.label}
            </option>
          ))}
        </Select>
      </SelectGroup>
    </Container>
  );
};

FiltrosOrdenacao.propTypes = {
  estado: PropTypes.string.isRequired,
  setEstado: PropTypes.func.isRequired,
  ordenacao: PropTypes.string.isRequired,
  setOrdenacao: PropTypes.func.isRequired
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}20;
  }
`;

export default FiltrosOrdenacao; 