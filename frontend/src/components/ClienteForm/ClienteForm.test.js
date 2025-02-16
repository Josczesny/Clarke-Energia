import { render, screen, fireEvent } from '@testing-library/react';
import ClienteForm from './index';

describe('ClienteForm', () => {
  test('deve validar consumo maior que zero', () => {
    render(<ClienteForm />);
    
    const input = screen.getByLabelText('Consumo Mensal (kWh)');
    const button = screen.getByText('Buscar');
    
    fireEvent.change(input, { target: { value: '0' } });
    fireEvent.click(button);
    
    expect(screen.getByText('O consumo mensal deve ser maior que zero')).toBeInTheDocument();
  });
}); 