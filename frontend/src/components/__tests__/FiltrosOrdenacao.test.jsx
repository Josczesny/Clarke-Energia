import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import FiltrosOrdenacao from '../FiltrosOrdenacao';
import theme from '../../styles/theme';

const customRender = (ui, options) => 
  render(ui, { wrapper: ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>, ...options });

describe('FiltrosOrdenacao', () => {
  const mockSetEstado = jest.fn();
  const mockSetOrdenacao = jest.fn();
  
  const renderFiltros = () => {
    customRender(
      <FiltrosOrdenacao 
        estado="Todos"
        setEstado={mockSetEstado}
        ordenacao="custoKwh_asc"
        setOrdenacao={mockSetOrdenacao}
      />
    );
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar os selects de estado e ordenação', () => {
    renderFiltros();
    expect(screen.getByRole('group', { name: /filtros de busca/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ordenar por/i)).toBeInTheDocument();
  });

  it('deve conter todos os estados brasileiros', () => {
    renderFiltros();
    const selectEstado = screen.getByLabelText(/estado/i);
    const estados = [
      'Todos', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO',
      'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI',
      'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
    ];
    
    const options = Array.from(selectEstado.options).map(option => option.value);
    expect(options).toEqual(estados);
  });

  it('deve conter todas as opções de ordenação', () => {
    renderFiltros();
    const selectOrdenacao = screen.getByLabelText(/ordenar por/i);
    const opcoes = [
      { label: 'Menor Preço', value: 'custoKwh_asc' },
      { label: 'Maior Avaliação', value: 'avaliacaoMedia_desc' },
      { label: 'Mais Clientes', value: 'totalClientes_desc' },
      { label: 'Menor Limite', value: 'limiteMinKwh_asc' }
    ];

    const options = Array.from(selectOrdenacao.options).map(option => ({
      label: option.text,
      value: option.value
    }));
    expect(options).toEqual(opcoes);
  });

  it('deve chamar setEstado quando um estado é selecionado', () => {
    renderFiltros();
    const selectEstado = screen.getByLabelText(/estado/i);
    fireEvent.change(selectEstado, { target: { value: 'SP' } });
    expect(mockSetEstado).toHaveBeenCalledWith('SP');
  });

  it('deve chamar setOrdenacao quando uma ordenação é selecionada', () => {
    renderFiltros();
    const selectOrdenacao = screen.getByLabelText(/ordenar por/i);
    fireEvent.change(selectOrdenacao, { target: { value: 'avaliacaoMedia_desc' } });
    expect(mockSetOrdenacao).toHaveBeenCalledWith('avaliacaoMedia_desc');
  });

  it('deve ser acessível via teclado', () => {
    renderFiltros();
    const selectEstado = screen.getByLabelText(/estado/i);
    const selectOrdenacao = screen.getByLabelText(/ordenar por/i);

    selectEstado.focus();
    expect(selectEstado).toHaveFocus();
    
    selectOrdenacao.focus();
    expect(selectOrdenacao).toHaveFocus();
  });
}); 