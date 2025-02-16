import { render, screen, fireEvent } from '@testing-library/react';
import ConsumoForm from '../../components/ConsumoForm';

describe('ConsumoForm', () => {
  const mockOnSubmit = jest.fn();
  const mockSetConsumo = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar o formulário corretamente', () => {
    render(
      <ConsumoForm
        onSubmit={mockOnSubmit}
        consumo=""
        setConsumo={mockSetConsumo}
      />
    );

    expect(screen.getByLabelText(/Consumo Mensal de Energia/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Digite seu consumo/i)).toBeInTheDocument();
    expect(screen.getByText(/Ex: 30000 kWh/i)).toBeInTheDocument();
  });

  it('deve chamar onSubmit com o valor correto', () => {
    render(
      <ConsumoForm
        onSubmit={mockOnSubmit}
        consumo="30000"
        setConsumo={mockSetConsumo}
      />
    );

    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(mockOnSubmit).toHaveBeenCalledWith(30000);
  });

  it('não deve permitir valores negativos', () => {
    render(
      <ConsumoForm
        onSubmit={mockOnSubmit}
        consumo=""
        setConsumo={mockSetConsumo}
      />
    );

    const input = screen.getByRole('spinbutton');
    expect(input).toHaveAttribute('min', '0');
  });
}); 