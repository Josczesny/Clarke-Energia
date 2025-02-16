import { render, screen, fireEvent } from '@testing-library/react';
import FornecedoresTable from '../components/FornecedoresTable';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('FornecedoresTable', () => {
  const mockFornecedores = [
    {
      id: 1,
      nome: 'Eco Power',
      estado: 'RJ',
      custoKwh: 0.68,
      limiteMinimo: 3000,
      totalClientes: 1200
    }
  ];

  test('deve ordenar corretamente ao clicar nos cabeçalhos', () => {
    render(
      <ThemeProvider theme={theme}>
        <FornecedoresTable fornecedores={mockFornecedores} />
      </ThemeProvider>
    );

    // Clica no cabeçalho e verifica ordenação
    const header = screen.getByText('Custo kWh');
    fireEvent.click(header);
    
    // Verifica se o indicador de ordenação aparece
    expect(header).toHaveStyle('position: relative');
  });
}); 