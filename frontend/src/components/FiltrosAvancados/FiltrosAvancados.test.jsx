import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';
import FiltrosAvancados from './FiltrosAvancados';

const mockProps = {
  filtros: {
    economiaMin: '',
    custoMaximo: '',
    certificacoes: [],
    tipoEnergia: '',
    avaliacaoMin: '',
    clientesMin: '',
  },
  onChange: jest.fn(),
  onSalvar: jest.fn(),
  onLimpar: jest.fn(),
  filtrosSalvos: [],
  onAplicarFiltroSalvo: jest.fn(),
};

const renderComponent = (props = {}) => {
  return render(
    <ThemeProvider theme={lightTheme}>
      <FiltrosAvancados {...mockProps} {...props} />
    </ThemeProvider>
  );
};

describe('FiltrosAvancados', () => {
  it('should render correctly', () => {
    renderComponent();
    expect(screen.getByText('Filtros Avançados')).toBeInTheDocument();
  });

  it('should toggle content when clicking button', () => {
    renderComponent();
    const button = screen.getByText('Filtros Avançados');
    fireEvent.click(button);
    expect(screen.getByText('Economia Mínima (%)')).toBeInTheDocument();
  });

  // ... mais testes
}); 