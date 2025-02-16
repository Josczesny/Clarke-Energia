import React, { useState } from 'react';
import {
  StyledForm,
  FieldGroup,
  FieldLabel,
  FieldDescription,
  BaseInput,
  Select,
  TechnicalGrid,
  TabNavigation,
  Tab,
  FormLayout,
  FormSection,
  InputGroup,
  FormActions,
  SubmitButton,
  SectionTitle,
  TechnicalSection,
  ErrorMessage,
  FornecedoresContainer,
  ViewControls,
  ViewButton,
  DataContainer,
  ClientFields,
  ConsumptionFields,
  TechnicalFields,
  ModalidadeWrapper
} from './styles';
import api from '../../services/api';
import FornecedoresTable from '../FornecedoresTable';
import FornecedoresGrid from '../FornecedoresGrid';
import BuscaToolbar from '../BuscaToolbar';
import { BsListUl, BsGrid3X3Gap } from 'react-icons/bs';
import ViewModeButtons from '../ViewModeButtons';

const ClienteForm = () => {
  const [formData, setFormData] = useState({
    // Dados do Cliente
    nomeEmpresa: '',
    cnpj: '',
    telefone: '',
    email: '',
    
    // Dados de Consumo
    consumoMensal: '',
    demandaContratada: '',
    
    // Dados Técnicos
    tensaoFornecimento: '',
    classeConsumidor: '',
    modalidadeTarifaria: '',
    diasFuncionamento: '',
    horarioFuncionamento: { inicio: '', fim: '' }
  });

  const [error, setError] = useState('');
  const [fornecedores, setFornecedores] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // Controla o modo de visualização

  // Formata número com pontos
  const formatNumber = (value) => {
    if (!value) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Remove pontos para enviar ao backend
  const unformatNumber = (value) => {
    return value.replace(/\./g, '');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'consumoMensal' || name === 'demandaContratada') {
      // Remove qualquer caractere não numérico
      const numericValue = value.replace(/\D/g, '');
      // Formata com pontos
      const formattedValue = formatNumber(numericValue);
      
      setFormData(prev => ({
        ...prev,
        [name]: formattedValue
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const dataToSend = {
      ...formData,
      consumoMensal: formData.consumoMensal ? unformatNumber(formData.consumoMensal) : '',
      demandaContratada: formData.demandaContratada ? unformatNumber(formData.demandaContratada) : ''
    };

    try {
      // Simular resposta da API com dados mockados
      const mockResponse = {
        data: [
          {
            id: 1,
            nome: 'Energia Verde',
            logo: '/logos/energia-verde.png',
            estadoOrigem: 'SP',
            custoKwh: 0.65,
            limiteMinKwh: 5000,
            totalClientes: 1500,
            avaliacaoMedia: 4.8,
            certificacoes: ['ISO 9001', 'ISO 14001'],
            descricao: 'Fornecedor de energia sustentável'
          },
          {
            id: 2,
            nome: 'Eco Power',
            logo: '/logos/eco-power.png',
            estadoOrigem: 'RJ',
            custoKwh: 0.68,
            limiteMinKwh: 3000,
            totalClientes: 1200,
            avaliacaoMedia: 4.5,
            certificacoes: ['ISO 9001', 'ISO 50001'],
            descricao: 'Energia limpa e renovável'
          }
        ]
      };

      // Usar os dados mockados em vez de chamar a API
      // const response = await api.post('/buscar-fornecedores', dataToSend);
      setFornecedores(mockResponse.data);
      setError(''); // Limpa qualquer erro anterior
    } catch (error) {
      console.error('Erro:', error);
      setError('Erro ao buscar fornecedores. Tente novamente.');
    }
  };

  // Adiciona handler para tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  const handleToggleView = (mode) => {
    setViewMode(mode);
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <FormLayout>
          <DataContainer>
            {/* Dados do Cliente */}
            <FormSection>
              <SectionTitle>Dados do Cliente</SectionTitle>
              <ClientFields>
                <div className="field-group">
                  <label>Nome da Empresa</label>
                  <input
                    type="text"
                    name="nomeEmpresa"
                    value={formData.nomeEmpresa}
                    onChange={handleInputChange}
                    placeholder="Razão Social"
                  />
                </div>

                <div className="field-group">
                  <label>CNPJ</label>
                  <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleInputChange}
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                <div className="field-group">
                  <label>Telefone</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(00) 0000-0000"
                  />
                </div>

                <div className="field-group">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="contato@empresa.com"
                  />
                </div>
              </ClientFields>
            </FormSection>

            {/* Dados de Consumo */}
            <FormSection>
              <SectionTitle>Dados de Consumo</SectionTitle>
              <ConsumptionFields>
                <FieldGroup>
                  <FieldLabel>Consumo Mensal (kWh)</FieldLabel>
                  <BaseInput
                    type="text"
                    name="consumoMensal"
                    value={formData.consumoMensal}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Ex: 30.000"
                  />
                  <FieldDescription>Média dos últimos 12 meses</FieldDescription>
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel>Demanda Contratada (kW)</FieldLabel>
                  <BaseInput
                    type="text"
                    name="demandaContratada"
                    value={formData.demandaContratada}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Ex: 100"
                  />
                  <FieldDescription>Potência contratada atual</FieldDescription>
                </FieldGroup>
              </ConsumptionFields>
            </FormSection>

            {/* Dados Técnicos */}
            <FormSection>
              <SectionTitle>Dados Técnicos</SectionTitle>
              <TechnicalFields>
                <FieldGroup>
                  <FieldLabel>Tensão de Fornecimento</FieldLabel>
                  <Select
                    name="tensaoFornecimento"
                    value={formData.tensaoFornecimento}
                    onChange={handleInputChange}
                  >
                    <option value="baixa">Baixa Tensão (BT)</option>
                  </Select>
                </FieldGroup>

                <FieldGroup>
                  <FieldLabel>Classe do Consumidor</FieldLabel>
                  <Select
                    name="classeConsumidor"
                    value={formData.classeConsumidor}
                    onChange={handleInputChange}
                  >
                    <option value="comercial">Comercial</option>
                  </Select>
                </FieldGroup>

                <ModalidadeWrapper>
                  <FieldGroup>
                    <FieldLabel>Modalidade Tarifária</FieldLabel>
                    <Select
                      name="modalidadeTarifaria"
                      value={formData.modalidadeTarifaria}
                      onChange={handleInputChange}
                    >
                      <option value="convencional">Convencional</option>
                    </Select>
                  </FieldGroup>
                  <SubmitButton type="submit">Buscar</SubmitButton>
                </ModalidadeWrapper>
              </TechnicalFields>
            </FormSection>
          </DataContainer>

          {fornecedores.length > 0 && (
            <FornecedoresContainer>
              <ViewModeButtons 
                viewMode={viewMode}
                onViewChange={setViewMode}
              />
              {viewMode === 'list' ? (
                <FornecedoresTable fornecedores={fornecedores} />
              ) : (
                <FornecedoresGrid fornecedores={fornecedores} />
              )}
            </FornecedoresContainer>
          )}
        </FormLayout>
      </StyledForm>

      {error && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default ClienteForm; 