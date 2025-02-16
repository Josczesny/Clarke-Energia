import React from 'react';
import styled from 'styled-components';
import { BsX, BsArrowRight, BsLightning } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

const Comparacao = ({ 
  fornecedores, 
  onRemover, 
  economiaTotal, 
  melhorOpcao,
  consumoMensal 
}) => {
  const custoMensalAtual = consumoMensal * fornecedores[0]?.custoKwh || 0;

  return (
    <Container>
      <Header>
        <Title>Comparação de Fornecedores</Title>
        <EconomiaTotal>
          <BsLightning />
          Economia potencial: {economiaTotal.toFixed(1)}%
        </EconomiaTotal>
      </Header>

      <ComparacaoGrid>
        {fornecedores.map((fornecedor, index) => (
          <FornecedorCard key={fornecedor.id}>
            <RemoverButton onClick={() => onRemover(fornecedor.id)}>
              <BsX />
            </RemoverButton>
            
            <LogoContainer>
              <Logo src={fornecedor.logo} alt={fornecedor.nome} />
            </LogoContainer>
            
            <Info>
              <Nome>{fornecedor.nome}</Nome>
              <Custo>R$ {fornecedor.custoKwh.toFixed(2)}/kWh</Custo>
              
              <DadosGrid>
                <DadoItem>
                  <Label>Custo Mensal Estimado</Label>
                  <Value>
                    R$ {(consumoMensal * fornecedor.custoKwh).toLocaleString()}
                  </Value>
                </DadoItem>
                
                <DadoItem>
                  <Label>Economia Mensal</Label>
                  <Value highlight>
                    R$ {(custoMensalAtual - (consumoMensal * fornecedor.custoKwh)).toLocaleString()}
                  </Value>
                </DadoItem>
                
                <DadoItem>
                  <Label>Economia Anual</Label>
                  <Value highlight>
                    R$ {((custoMensalAtual - (consumoMensal * fornecedor.custoKwh)) * 12).toLocaleString()}
                  </Value>
                </DadoItem>
              </DadosGrid>

              {melhorOpcao?.id === fornecedor.id && (
                <MelhorOpcao>
                  <BsLightning /> Melhor Opção
                </MelhorOpcao>
              )}
            </Info>

            {index < fornecedores.length - 1 && (
              <Seta>
                <BsArrowRight />
              </Seta>
            )}
          </FornecedorCard>
        ))}
      </ComparacaoGrid>
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: 2rem;
  margin: 2rem 0;
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
`;

const EconomiaTotal = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary.main}20;
  color: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: 600;
`;

// ... outros styled components

export default Comparacao; 