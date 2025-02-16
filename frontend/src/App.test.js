import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';

const mocks = [
  {
    request: {
      query: GET_FORNECEDORES,
      variables: { consumo: 30000 },
    },
    result: {
      data: {
        fornecedoresPorConsumo: [
          {
            id: '1',
            nome: 'Energia Verde',
            // ... outros campos
          },
        ],
      },
    },
  },
];

describe('App', () => {
  it('deve buscar fornecedores quando consumo é inserido', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    // Simula entrada de consumo
    const input = screen.getByPlaceholderText(/Digite seu consumo/i);
    fireEvent.change(input, { target: { value: '30000' } });

    // Simula clique no botão
    const button = screen.getByText(/Buscar Fornecedores/i);
    fireEvent.click(button);

    // Aguarda resultados
    const fornecedor = await screen.findByText('Energia Verde');
    expect(fornecedor).toBeInTheDocument();
  });
}); 