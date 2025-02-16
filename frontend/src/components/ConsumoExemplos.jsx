import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const exemplos = [
  { tipo: 'Casa Pequena', consumo: '100-300 kWh/mês', icon: '🏠' },
  { tipo: 'Casa Média', consumo: '301-500 kWh/mês', icon: '🏡' },
  { tipo: 'Casa Grande', consumo: '501-1000 kWh/mês', icon: '🏘️' },
  { tipo: 'Pequeno Comércio', consumo: '1001-3000 kWh/mês', icon: '🏪' },
  { tipo: 'Média Empresa', consumo: '3001-10000 kWh/mês', icon: '🏢' },
  { tipo: 'Grande Empresa', consumo: '10001-50000 kWh/mês', icon: '🏭' },
  { tipo: 'Indústria', consumo: '50001-100000 kWh/mês', icon: '🏭' }
];

const ConsumoExemplos = () => {
  return (
    <Container>
      <Title>Exemplos de Consumo Mensal</Title>
      <Grid>
        {exemplos.map((exemplo, index) => (
          <ExemploCard
            key={exemplo.tipo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon>{exemplo.icon}</Icon>
            <TipoConsumo>{exemplo.tipo}</TipoConsumo>
            <Consumo>{exemplo.consumo}</Consumo>
          </ExemploCard>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 1.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
`;

const ExemploCard = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.25rem;
  text-align: center;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const Icon = styled.div`
  font-size: 2rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const TipoConsumo = styled.div`
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Consumo = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
`;

export default ConsumoExemplos; 