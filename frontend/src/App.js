import React, { useState, useMemo } from 'react';
import { useQuery, gql } from '@apollo/client';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import ConsumoForm from './components/ConsumoForm';
import FiltrosOrdenacao from './components/FiltrosOrdenacao';
import FornecedorCard from './components/FornecedorCard';
import { fadeIn } from './styles/animations';
import { lightTheme, darkTheme } from './styles/theme';
import ThemeToggle from './components/ThemeToggle';
import { Input, Select, InputWrapper, SelectWrapper, Label } from './components/Form';
import { Button } from './components/Button';
import SidePanel from './components/SidePanel';
import { 
  SearchIcon, 
  FilterIcon, 
  ChartIcon, 
  FileIcon, 
  GearIcon 
} from './components/icons';
import { BuscaGrid, ButtonContainer, ConsumoRange } from './components/Layout';
import FiltrosAvancados from './components/FiltrosAvancados';
import { useFiltrosAvancados } from './hooks/useFiltrosAvancados';
import BuscaToolbar from './components/BuscaToolbar';
import EconomiaAnalytics from './components/EconomiaAnalytics';
import TabNavigation from './components/TabNavigation';
import { Icon } from './components/icons/Icon';
import { EmojiIcon } from './components/icons/EmojiIcon';
import { IconButton } from './components/IconButton';
import FornecedoresTable from './components/FornecedoresTable';
import ClienteForm from './components/ClienteForm';

const GET_FORNECEDORES = gql`
  query GetFornecedores($consumo: Float!) {
    fornecedoresPorConsumo(consumoMensal: $consumo) {
      id
      nome
      logo
      estadoOrigem
      custoKwh
      limiteMinKwh
      totalClientes
      avaliacaoMedia
      descricao
      certificacoes
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background.main};
    color: ${({ theme }) => theme.colors.text.primary};
    transition: all 0.2s ease-in-out;
  }
`;

const Layout = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin-left: ${({ $isPanelOpen }) => $isPanelOpen ? '200px' : '56px'};
  width: calc(100% - ${({ $isPanelOpen }) => $isPanelOpen ? '200px' : '56px'});
  transition: all 0.2s ease;
  background: ${({ theme }) => theme.colors.background.main};
  min-height: 100vh;
  padding: 0;
`;

const ContentArea = styled.div`
  padding: 2rem;
  max-width: 1800px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  margin-top: 2rem;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  height: 56px;
`;

const CompanyHeader = styled.div`
  text-align: left;
  margin-bottom: 2rem;
`;

const CompanyName = styled.h1`
  font-size: 1.75rem;
  color: ${({ theme }) => 
    theme.type === 'dark' 
      ? theme.colors.primary.main 
      : theme.colors.primary.darker
  };
  margin: 0;
`;

const CompanyTagline = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin: 0.5rem 0 0 0;
`;

const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) auto;
  gap: 2rem;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.background.card};
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const SearchField = styled.div`
  position: relative;
  z-index: ${({ $index }) => 3 - $index};
  width: 100%;

  label {
    margin-bottom: 0.5rem;
    display: block;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  input, select {
    width: 100%;
    height: 40px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    border: 1px solid ${({ theme }) => theme.colors.border};
    padding: 0 1rem;
    background: ${({ theme }) => theme.colors.background.input};
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 0.875rem;
    transition: all 0.2s ease;
    box-sizing: border-box;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.main};
      box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.primary.main}25`};
    }
  }
`;

const SearchActions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;
  height: 40px; // Garante altura fixa igual aos campos
  margin-bottom: 0.125rem; // Ajuste fino para alinhar com os campos

  ${Button}, ${IconButton} {
    height: 100%; // Usa toda a altura do container
  }

  ${Button} {
    padding: 0 1.5rem;
    white-space: nowrap;
  }

  ${IconButton} {
    width: 40px;
    padding: 0;
  }
`;

const StyledInput = styled(Input)`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

const TopNavigation = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: ${({ $active, theme }) => 
    $active ? theme.colors.primary.main : theme.colors.background.card};
  color: ${({ $active, theme }) => 
    $active ? theme.colors.text.white : theme.colors.text.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  height: 40px;

  &:hover {
    background: ${({ $active, theme }) => 
      $active 
        ? theme.colors.primary.dark 
        : theme.colors.background.hover};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $active, theme }) => 
      $active ? theme.colors.text.white : theme.colors.text.primary};
  }
`;

const App = () => {
  const [consumo, setConsumo] = useState('');
  const [estado, setEstado] = useState('Todos');
  const [ordenacao, setOrdenacao] = useState('custoKwh_asc');
  const [buscar, setBuscar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [error, setError] = useState('');
  const [estados, setEstados] = useState(['SP', 'RJ', 'MG', 'ES', 'BA', 'PR', 'SC', 'RS', 'MS', 'MT', 'GO', 'DF', 'CE', 'RN', 'PE', 'PB', 'MA', 'PI', 'AL', 'SE', 'AM', 'PA', 'RO', 'AP', 'RR', 'AC']);
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('busca');
  const [viewMode, setViewMode] = useState('list');
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  const [dadosCliente, setDadosCliente] = useState(null);

  const { loading, error: queryError, data } = useQuery(GET_FORNECEDORES, {
    variables: {
      consumo: parseFloat(consumo)
    },
    skip: !buscar || !consumo
  });

  const { 
    filtros, 
    filtrosSalvos, 
    handleChange: handleFiltroChange,
    salvarFiltro,
    limparFiltros,
    aplicarFiltroSalvo,
    aplicarFiltros
  } = useFiltrosAvancados();

  const handleSubmit = () => {
    const consumoNumerico = parseFloat(consumo.replace(/\D/g, ''));
    
    if (isNaN(consumoNumerico) || consumoNumerico <= 0) {
      setError('Por favor, insira um consumo válido');
      return;
    }
    
    if (consumoNumerico > 100000) {
      setError('Consumo muito alto. Entre em contato com nosso suporte.');
      return;
    }

    setError('');
    setBuscar(true);
  };

  const handleLimparFiltros = () => {
    setEstado('Todos');
    setOrdenacao('custoKwh_asc');
  };

  const handleNovaBusca = () => {
    setConsumo('');
    setBuscar(false);
  };

  const fornecedoresFiltrados = React.useMemo(() => {
    if (!data?.fornecedoresPorConsumo) return [];
    
    let resultado = [...data.fornecedoresPorConsumo];
    
    // Aplicar filtros básicos
    if (estado !== 'Todos') {
      resultado = resultado.filter(f => f.estadoOrigem === estado);
    }
    
    // Aplicar filtros avançados
    resultado = aplicarFiltros(resultado);
    
    // Aplicar ordenação
    const [criterio, ordem] = ordenacao.split('_');
    resultado.sort((a, b) => {
      return ordem === 'asc' 
        ? a[criterio] - b[criterio]
        : b[criterio] - a[criterio];
    });
    
    return resultado;
  }, [data, estado, ordenacao, aplicarFiltros]);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const formatarNumero = (valor) => {
    if (!valor) return '';
    return valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setConsumo(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleToggleFiltros = () => {
    setFiltrosAbertos(!filtrosAbertos);
  };

  const handleClienteSubmit = (dadosCliente) => {
    setConsumo(dadosCliente.consumoMensal);
    setBuscar(true);
    setDadosCliente(dadosCliente);
  };

  const renderContent = () => {
    if (activeTab === 'busca') {
      return (
        <>
          <SearchContainer>
            {!buscar ? (
              <ClienteForm onSubmit={handleClienteSubmit} />
            ) : (
              <>
                <SearchField $index={0}>
                  <Label>Consumo Mensal de Energia</Label>
                  <StyledInput 
                    type="text"
                    value={formatarNumero(consumo)}
                    onChange={handleChange}
                    onKeyPress={handleKeyPress}
                    placeholder="kWh/mês"
                  />
                </SearchField>
                
                <SearchField $index={1}>
                  <Label>Estado</Label>
                  <Select 
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                  >
                    <option value="">Todos os estados</option>
                    {estados.map(est => (
                      <option key={est} value={est}>{est}</option>
                    ))}
                  </Select>
                </SearchField>
                
                <SearchField $index={2}>
                  <Label>Ordenar por</Label>
                  <Select 
                    value={ordenacao}
                    onChange={(e) => setOrdenacao(e.target.value)}
                  >
                    <option value="custoKwh_asc">Menor Preço</option>
                    <option value="custoKwh_desc">Maior Preço</option>
                    <option value="avaliacaoMedia_desc">Melhor Avaliação</option>
                    <option value="totalClientes_desc">Mais Clientes</option>
                  </Select>
                </SearchField>

                <SearchActions>
                  <Button onClick={handleSubmit}>Buscar</Button>
                  <IconButton 
                    onClick={handleToggleFiltros}
                    $active={filtrosAbertos}
                    aria-label="Filtros avançados"
                  >
                    <FilterIcon size={20} />
                  </IconButton>
                </SearchActions>
              </>
            )}
          </SearchContainer>

          <BuscaToolbar 
            onToggleView={setViewMode} 
            viewMode={viewMode}
          />

          {renderFornecedores()}
        </>
      );
    }
    // ...
  };

  const renderFornecedores = () => {
    if (!fornecedoresFiltrados?.length) return null;
    
    return viewMode === 'grid' ? (
      <ResultadosGrid>
        {fornecedoresFiltrados.map(fornecedor => (
          <FornecedorCard key={fornecedor.id} {...fornecedor} />
        ))}
      </ResultadosGrid>
    ) : (
      <FornecedoresTable fornecedores={fornecedoresFiltrados} />
    );
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <div>
        <GlobalStyle />
        <Layout>
          <SidePanel isOpen={isPanelOpen} togglePanel={() => setIsPanelOpen(!isPanelOpen)} />
          <MainContent $isPanelOpen={isPanelOpen}>
            <TopBar>
              <CompanyHeader>
                <CompanyName>Clarke Energia</CompanyName>
                <CompanyTagline>Economia e sustentabilidade para sua empresa</CompanyTagline>
              </CompanyHeader>
              <ThemeToggle isDark={isDarkTheme} onToggle={toggleTheme} />
            </TopBar>
            
            <ContentArea>
              <TopNavigation>
                <NavButton 
                  $active={activeTab === 'busca'}
                  onClick={() => setActiveTab('busca')}
                >
                  <SearchIcon size={16} />
                  Buscar Fornecedores
                </NavButton>
                
                <NavButton 
                  $active={activeTab === 'economia'}
                  onClick={() => setActiveTab('economia')}
                >
                  <ChartIcon size={16} />
                  Análise de Economia
                </NavButton>
                
                <NavButton 
                  $active={activeTab === 'comparar'}
                  onClick={() => setActiveTab('comparar')}
                >
                  <FileIcon size={16} />
                  Comparar Fornecedores
                </NavButton>
                
                <NavButton 
                  $active={activeTab === 'config'}
                  onClick={() => setActiveTab('config')}
                >
                  <GearIcon size={16} />
                  Configurações
                </NavButton>
              </TopNavigation>

              {renderContent()}
            </ContentArea>
          </MainContent>
        </Layout>
      </div>
    </ThemeProvider>
  );
};

const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ResultadoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h2 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const ResultadosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem 0;
`;

const ResultadosHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Loading = styled.p`
  text-align: center;
  margin: 40px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Error = styled.p`
  text-align: center;
  color: red;
  margin: 40px 0;
`;

const BuscaContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const ResultadosContainer = styled.div`
  margin-top: 2rem;
`;

const ResultadoCount = styled.span`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 0.9rem;
`;

const SemResultados = styled.div`
  text-align: center;
  padding: 48px 24px;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.card};
  border: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    margin: 16px 0;
    color: ${({ theme }) => theme.colors.text.primary};
  }

  p {
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.text.secondary};

    li {
      margin: 8px 0;
      &:before {
        content: "•";
        color: ${({ theme }) => theme.colors.primary.main};
        margin-right: 8px;
      }
    }
  }
`;

const NoResultsIcon = styled.div`
  font-size: 48px;
`;

const ErrorIcon = styled.span`
  margin-right: 8px;
`;

const Small = styled.small`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const ResultadosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FornecedorListItem = styled.li`
  padding: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export default App;