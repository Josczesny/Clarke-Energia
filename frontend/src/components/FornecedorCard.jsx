import React from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn } from '../styles/animations';
import PropTypes from 'prop-types';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const FornecedorCard = ({ 
  nome = '', 
  logo = '', 
  estadoOrigem = '', 
  custoKwh = 0, 
  limiteMinKwh = 0, 
  totalClientes = 0, 
  avaliacaoMedia = 0,
  descricao = '',
  certificacoes = []
}) => {
  return (
    <Card>
      <Header>
        <LogoContainer>
          <Logo src={logo || '/placeholder-logo.png'} alt={`${nome} logo`} />
        </LogoContainer>
      </Header>
      
      <InfoContainer>
        <Nome>{nome}</Nome>
        <Descricao>{descricao}</Descricao>
        
        <InfoGrid>
          <InfoItem>
            <Label>Estado</Label>
            <Value>{estadoOrigem}</Value>
          </InfoItem>
          
          <InfoItem>
            <Label>Custo kWh</Label>
            <Value>R$ {custoKwh.toFixed(2)}</Value>
          </InfoItem>
          
          <InfoItem>
            <Label>Limite Mínimo</Label>
            <Value>{limiteMinKwh.toLocaleString()} kWh</Value>
          </InfoItem>
          
          <InfoItem>
            <Label>Total Clientes</Label>
            <Value>{totalClientes.toLocaleString()}</Value>
          </InfoItem>
          
          <InfoItem>
            <Label>Avaliação</Label>
            <Value>{avaliacaoMedia.toFixed(1)}/5.0</Value>
          </InfoItem>
        </InfoGrid>
        
        {certificacoes?.length > 0 && (
          <Certificacoes>
            {certificacoes.map((cert, index) => (
              <Certificacao key={index}>{cert}</Certificacao>
            ))}
          </Certificacoes>
        )}
      </InfoContainer>
    </Card>
  );
};

FornecedorCard.propTypes = {
  nome: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  estadoOrigem: PropTypes.string.isRequired,
  custoKwh: PropTypes.number.isRequired,
  limiteMinKwh: PropTypes.number.isRequired,
  totalClientes: PropTypes.number.isRequired,
  avaliacaoMedia: PropTypes.number.isRequired,
  descricao: PropTypes.string.isRequired,
  certificacoes: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  ${({ theme }) => theme.type === 'dark' && css`
    background: ${theme.colors.background.darker};
    border-color: ${theme.colors.border};
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

    &:hover {
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(
        90deg,
        ${theme.colors.primary.main}00,
        ${theme.colors.primary.main}40,
        ${theme.colors.primary.main}00
      );
    }
  `}
`;

const Header = styled.div`
  background: ${({ theme }) => theme.type === 'dark' 
    ? theme.colors.primary.darker 
    : theme.colors.primary.main};
  padding: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: -1.5rem -1.5rem 1.5rem;
  position: relative;
  overflow: hidden;

  ${({ theme }) => theme.type === 'dark' && css`
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        ${theme.colors.primary.main}10,
        ${theme.colors.primary.main}20
      );
    }
  `}
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Logo = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  text-align: center;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Nome = styled.h3`
  margin: 0;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Descricao = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
  flex: 1;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

const Label = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Value = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: 500;
`;

const Certificacoes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Certificacao = styled.span`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  background: ${({ theme }) => `${theme.colors.primary.main}15`};
  color: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => `${theme.colors.primary.main}30`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: 500;
`;

export default React.memo(FornecedorCard); 