import { render, screen, fireEvent } from '@testing-library/react';
import ClienteForm from '../components/ClienteForm';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

describe('ClienteForm', () => {
  const renderWithTheme = (component) => {
    return render(
      <ThemeProvider theme={theme}>
        {component}
      </ThemeProvider>
    );
  };

  test('deve alternar entre visualizações de lista e grid', () => {
    renderWithTheme(<ClienteForm />);
    
    // Simula preenchimento e busca
    fireEvent.change(screen.getByPlaceholderText('Ex: 30.000'), {
      target: { value: '30000' }
    });
    fireEvent.click(screen.getByText('Buscar'));

    // Verifica se a tabela está visível inicialmente
    expect(screen.getByRole('table')).toBeInTheDocument();
    
    // Clica no botão grid e verifica se a visualização mudou
    fireEvent.click(screen.getByText('Grid'));
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
    
    // Volta para lista e verifica
    fireEvent.click(screen.getByText('Lista'));
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
}); 