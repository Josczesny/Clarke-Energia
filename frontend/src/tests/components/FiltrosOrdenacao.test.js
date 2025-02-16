import { render, screen, fireEvent } from '@testing-library/react';
import FiltrosOrdenacao from '../../components/FiltrosOrdenacao';

describe('FiltrosOrdenacao', () => {
  const mockSetEstado = jest.fn();
  const mockSetOrdenacao = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar todos os estados', () => {
    render(
      <FiltrosOrdenacao
        estado="Todos"
        setEstado={mockSetEstado}
        ordenacao="custoKwh_asc"
        setOrdenacao={mockSetOrdenacao}
      />
    );

    const estadoSelect = screen.getByLabelText(/Estado/i);
    expect(estadoSelect).toBeInTheDocument();
    expect(screen.getByText('SP')).toBeInTheDocument();
    expect(screen.getByText('MG')).toBeInTheDocument();
    expect(screen.getByText('RJ')).toBeInTheDocument();
    expect(screen.getByText('CE')).toBeInTheDocument();
  });

  it('deve chamar setEstado ao selecionar um estado', () => {
    render(
      <FiltrosOrdenacao
        estado="Todos"
        setEstado={mockSetEstado}
        ordenacao="custoKwh_asc"
        setOrdenacao={mockSetOrdenacao}
      />
    );

    const select = screen.getByLabelText(/Estado/i);
    fireEvent.change(select, { target: { value: 'SP' } });

    expect(mockSetEstado).toHaveBeenCalledWith('SP');
  });

  it('deve chamar setOrdenacao ao mudar ordenação', () => {
    render(
      <FiltrosOrdenacao
        estado="Todos"
        setEstado={mockSetEstado}
        ordenacao="custoKwh_asc"
        setOrdenacao={mockSetOrdenacao}
      />
    );

    const select = screen.getByLabelText(/Ordenar por/i);
    fireEvent.change(select, { target: { value: 'avaliacaoMedia_desc' } });

    expect(mockSetOrdenacao).toHaveBeenCalledWith('avaliacaoMedia_desc');
  });
}); 