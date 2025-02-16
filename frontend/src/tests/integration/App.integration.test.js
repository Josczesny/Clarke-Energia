import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from '../../App';
import { GET_FORNECEDORES } from '../../queries';

const mocks = [
  {
    request: {
      query: GET_FORNECEDORES,
      variables: { consumo: 30000 }
    },
    result: {
      data: {
        fornecedoresPorConsumo: [
          // ... mock data
        ]
      }
    }
  }
];

describe('App Integration', () => {
  it('deve mostrar fornecedores após submissão do formulário', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    // Simula fluxo completo
    fireEvent.change(screen.getByPlaceholderText(/Digite seu consumo/i), {
      target: { value: '30000' }
    });
    fireEvent.click(screen.getByText(/Buscar Fornecedores/i));

    await waitFor(() => {
      expect(screen.getByTestId('fornecedores-grid')).toBeInTheDocument();
    });
  });
}); 