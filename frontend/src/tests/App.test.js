import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from '../App';
import { GET_FORNECEDORES } from '../queries';

const mocks = [
  {
    request: {
      query: GET_FORNECEDORES,
      variables: { consumo: 6000 },
    },
    result: {
      data: {
        fornecedoresPorConsumo: [
          {
            id: '1',
            nome: 'Energia Verde',
            logo: 'https://exemplo.com/logo1.png',
            estadoOrigem: 'SP',
            custoKwh: 0.75,
            limiteMinKwh: 5000,
            totalClientes: 1500,
            avaliacaoMedia: 4.5
          }
        ],
      },
    },
  },
];

describe('App', () => {
  it('deve renderizar o formulário de busca', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    expect(screen.getByPlaceholderText(/Digite seu consumo/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
  });

  it('deve mostrar fornecedores após submissão do formulário', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText(/Digite seu consumo/i);
    fireEvent.change(input, { target: { value: '6000' } });
    
    const button = screen.getByRole('button', { name: /buscar/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Energia Verde')).toBeInTheDocument();
    });
  });

  it('deve mostrar mensagem de carregamento', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );

    const input = screen.getByPlaceholderText(/Digite seu consumo/i);
    fireEvent.change(input, { target: { value: '6000' } });
    
    const button = screen.getByRole('button', { name: /buscar/i });
    fireEvent.click(button);

    expect(screen.getByText(/carregando/i)).toBeInTheDocument();
  });
}); 