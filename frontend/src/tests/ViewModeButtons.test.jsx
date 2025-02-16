import { render, screen, fireEvent } from '@testing-library/react';
import ViewModeButtons from '../components/ViewModeButtons';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('ViewModeButtons', () => {
  test('deve destacar o botão ativo corretamente', () => {
    const mockOnChange = jest.fn();
    
    render(
      <ThemeProvider theme={theme}>
        <ViewModeButtons 
          viewMode="list"
          onViewChange={mockOnChange}
        />
      </ThemeProvider>
    );

    // Verifica se o botão lista está destacado
    const listButton = screen.getByText('Lista').parentElement;
    expect(listButton).toHaveStyle(`background: ${theme.colors.primary.main}`);
    
    // Clica no botão grid e verifica a chamada
    fireEvent.click(screen.getByText('Grid'));
    expect(mockOnChange).toHaveBeenCalledWith('grid');
  });
}); 