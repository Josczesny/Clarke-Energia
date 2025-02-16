import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ConsumoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    consumoMensal: '',
    demandaContratada: '',
    tensaoFornecimento: 'baixa', // baixa, media, alta
    classeConsumidor: 'comercial', // residencial, comercial, industrial
    modalidadeTarifaria: 'convencional', // convencional, branca, verde, azul
    fatorCarga: '',
    horarioPonta: false,
    custoPonta: '',
    custoForaPonta: '',
  });

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Formata o número com pontos para milhares
  const formatarNumero = (valor) => {
    if (!valor) return '';
    return valor.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <FormContainer>
      <FormGrid>
        <FormField>
          <Label>Consumo Mensal (kWh)</Label>
          <Input 
            type="number"
            value={formData.consumoMensal}
            onChange={(e) => handleChange('consumoMensal', e.target.value)}
            placeholder="Ex: 30000"
          />
          <HelpText>Consumo médio mensal dos últimos 12 meses</HelpText>
        </FormField>

        <FormField>
          <Label>Demanda Contratada (kW)</Label>
          <Input 
            type="number"
            value={formData.demandaContratada}
            onChange={(e) => handleChange('demandaContratada', e.target.value)}
            placeholder="Ex: 100"
          />
          <HelpText>Potência disponibilizada pela distribuidora</HelpText>
        </FormField>

        <FormField>
          <Label>Tensão de Fornecimento</Label>
          <Select
            value={formData.tensaoFornecimento}
            onChange={(e) => handleChange('tensaoFornecimento', e.target.value)}
          >
            <option value="baixa">Baixa Tensão (BT)</option>
            <option value="media">Média Tensão (MT)</option>
            <option value="alta">Alta Tensão (AT)</option>
          </Select>
        </FormField>

        <FormField>
          <Label>Classe do Consumidor</Label>
          <Select
            value={formData.classeConsumidor}
            onChange={(e) => handleChange('classeConsumidor', e.target.value)}
          >
            <option value="comercial">Comercial</option>
            <option value="industrial">Industrial</option>
            <option value="residencial">Residencial</option>
          </Select>
        </FormField>

        <FormField>
          <Label>Modalidade Tarifária</Label>
          <Select
            value={formData.modalidadeTarifaria}
            onChange={(e) => handleChange('modalidadeTarifaria', e.target.value)}
          >
            <option value="convencional">Convencional</option>
            <option value="branca">Tarifa Branca</option>
            <option value="verde">Tarifa Verde</option>
            <option value="azul">Tarifa Azul</option>
          </Select>
        </FormField>

        {formData.modalidadeTarifaria !== 'convencional' && (
          <>
            <FormField>
              <Label>Consumo Horário de Ponta?</Label>
              <Switch
                checked={formData.horarioPonta}
                onChange={(e) => handleChange('horarioPonta', e.target.checked)}
              />
              <HelpText>Possui consumo significativo entre 18h e 21h?</HelpText>
            </FormField>

            {formData.horarioPonta && (
              <>
                <FormField>
                  <Label>Custo na Ponta (R$/kWh)</Label>
                  <Input 
                    type="number"
                    value={formData.custoPonta}
                    onChange={(e) => handleChange('custoPonta', e.target.value)}
                  />
                </FormField>

                <FormField>
                  <Label>Custo Fora Ponta (R$/kWh)</Label>
                  <Input 
                    type="number"
                    value={formData.custoForaPonta}
                    onChange={(e) => handleChange('custoForaPonta', e.target.value)}
                  />
                </FormField>
              </>
            )}
          </>
        )}
      </FormGrid>
    </FormContainer>
  );
};

ConsumoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const Select = styled.select`
  width: 100%;
  height: 42px;
  padding: 0 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 1rem;
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary.main}20;
  }
`;

const Switch = styled.input`
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.border};
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:checked {
    background: ${({ theme }) => theme.colors.primary.main};
  }

  &:checked::before {
    transform: translateX(20px);
  }

  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.text.primary};
    position: absolute;
    top: 2px;
    left: 2px;
    transition: all 0.2s ease;
  }
`;

const HelpText = styled.small`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export default ConsumoForm; 