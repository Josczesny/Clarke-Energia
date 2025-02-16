import styled from 'styled-components';

// Primeiro, definir o estilo base no início do arquivo
const inputBaseStyles = `
  width: 100%;
  height: 48px;
  padding: 0 1.25rem;
  font-size: 1rem;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.paper};
  color: ${({ theme }) => theme.colors.text.primary};

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary.main};
    outline: none;
    box-shadow: none;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

// Layout principal sem grid
export const FormLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

// Container para os grupos de dados
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

// Seções de dados
export const FormSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

// Seção de dados técnicos
export const TechnicalSection = styled(FormSection)`
  .technical-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    h2 {
      margin: 0;
    }
  }
`;

// Container para dados técnicos e botão
export const TechnicalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;
`;

// Container para os dados técnicos
export const TechnicalWrapper = styled.div`
  position: relative;
  width: 100%;
`;

// Dados do Cliente - ajustando apenas a borda
export const ClientFields = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0;
  width: calc(100% + 20rem);
  margin-top: 0.75rem;
  margin-right: -20rem;

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .field-group:nth-child(1) { width: 28%; margin-right: 3rem; }
  .field-group:nth-child(2) { width: 22%; margin-right: 3rem; }
  .field-group:nth-child(3) { width: 18%; margin-right: 3rem; }
  .field-group:nth-child(4) { width: 25%; }

  label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }

  input {
    ${inputBaseStyles}
  }
`;

// Dados de Consumo - aumentando espaçamento
export const ConsumptionFields = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem; // Aumentando espaçamento entre campos
  width: 100%;
  margin-bottom: 2.5rem;

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  label {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }

  input {
    ${inputBaseStyles}
  }
`;

// Dados Técnicos
export const TechnicalFields = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  .field-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }

  select {
    width: 100%;
    height: 42px;
    padding: 0 1rem;
    font-size: 0.875rem;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.background.input};
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: pointer;
    min-width: 200px;

    &:focus {
      border-color: ${({ theme }) => theme.colors.primary.main};
      outline: none;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}20;
    }
  }
`;

// Título das seções com linha verde - reduzindo margem
export const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 600;
  margin-bottom: 1rem; // Reduzindo margem inferior
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary.main};
  width: 100%;
`;

// Container dos fornecedores mais próximo
export const FornecedoresContainer = styled.div`
  width: 100%;
  margin-top: -1rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (min-width: 1200px) {
    width: calc(100% + 52rem);
    margin-right: -52rem;
  }
`;

// Ajustando os botões de visualização
export const ViewButtons = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  gap: 1rem;
`;

// Grupo de campos mais compacto
export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

// Título do campo
export const FieldLabel = styled.label`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`;

// Descrição abaixo do campo
export const FieldDescription = styled.span`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: 0.375rem;
`;

// Campo de entrada
export const BaseInput = styled.input`
  height: 48px;
  width: 100%;
  min-width: 0;
  padding: 0 1.25rem;
  border: 1px solid ${({ theme, error }) => 
    error ? theme.colors.error : theme.colors.border};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.background.input};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 1rem;
  transition: all 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
    opacity: 0.7;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.light}20;
  }
`;

// Select
export const Select = styled(BaseInput).attrs({ as: 'select' })`
  cursor: pointer;
  appearance: none;
  padding-right: 2rem;
  background-image: url("data:image/svg+xml,..."); // Adicionar ícone de seta
  background-repeat: no-repeat;
  background-position: right 1rem center;
`;

// Container para o último campo e botão
export const ModalidadeWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  .field-group {
    flex: 1;
  }
`;

// Botão de buscar
export const SubmitButton = styled.button`
  height: 42px;
  width: 200px;
  background: ${({ theme }) => theme.colors.primary.main};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1.125rem;
  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;

export const ErrorMessage = styled.div`
  color: ${({ theme }) => theme.colors.error};
  background: ${({ theme }) => theme.colors.error}10;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;
  font-size: 1rem;
`;

// Ajustando a tabela
export const TableContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  overflow-x: auto;

  table {
    width: 100%;
    min-width: 1200px; // Aumentando largura mínima
    border-collapse: separate;
    border-spacing: 0;

    th, td {
      padding: 1rem 1.5rem;
      font-size: 1rem;
      white-space: nowrap;
    }

    th {
      font-weight: 600;
      text-align: left;
      background: ${({ theme }) => theme.colors.background.secondary};
      border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    }

    td {
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    }

    // Ajustando larguras das colunas
    th:nth-child(1), td:nth-child(1) { width: 35%; }
    th:nth-child(2), td:nth-child(2) { width: 12%; }
    th:nth-child(3), td:nth-child(3) { width: 15%; }
    th:nth-child(4), td:nth-child(4) { width: 18%; }
    th:nth-child(5), td:nth-child(5) { width: 12%; }
    th:nth-child(6), td:nth-child(6) { width: 8%; }
  }
`;

// Ajustando o grid
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  min-height: 280px;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
    margin: 0 auto 1rem;
  }

  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 1rem 0;
    text-align: center;
  }

  .info {
    margin-top: auto;
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.border};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    
    span {
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;