import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import FornecedorCard from '../FornecedorCard';

const mockFornecedor = {
  id: '1',
  nome: 'Teste Energia',
  logo: '/test.svg',
  estadoOrigem: 'SP',
  custoKwh: 0.65,
  limiteMinKwh: 100,
  totalClientes: 1000,
  avaliacaoMedia: 4.5,
  descricao: 'Teste descrição',
  certificacoes: ['ISO 9001']
};

describe('FornecedorCard', () => {
  it('renderiza corretamente as informações do fornecedor', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <FornecedorCard fornecedor={mockFornecedor} />
      </ThemeProvider>
    );

    expect(screen.getByText('Teste Energia')).toBeInTheDocument();
    expect(screen.getByText('Teste descrição')).toBeInTheDocument();
    expect(screen.getByText('R$ 0.65')).toBeInTheDocument();
    expect(screen.getByText('100 kWh')).toBeInTheDocument();
    expect(screen.getByText('1.000')).toBeInTheDocument();
    expect(screen.getByText('4.5/5.0')).toBeInTheDocument();
  });
}); 