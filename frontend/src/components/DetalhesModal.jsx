import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { BsX, BsStar, BsStarFill } from 'react-icons/bs';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const DetalhesModal = ({ fornecedor, onClose, onFavoritar, isFavorito, consumoMensal }) => {
  const economiaAnual = (consumoMensal * 12) * (fornecedor.economia / 100);
  const dadosGrafico = Array.from({ length: 12 }, (_, i) => ({
    mes: i + 1,
    economia: economiaAnual / 12 * (i + 1)
  }));

  return (
    <AnimatePresence>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Modal
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
        >
          <ModalHeader>
            <HeaderInfo>
              <LogoContainer>
                <Logo src={fornecedor.logo} alt={fornecedor.nome} />
              </LogoContainer>
              <div>
                <Nome>{fornecedor.nome}</Nome>
                <Descricao>{fornecedor.descricao}</Descricao>
              </div>
            </HeaderInfo>
            <HeaderActions>
              <FavButton onClick={() => onFavoritar(fornecedor.id)}>
                {isFavorito ? <BsStarFill /> : <BsStar />}
              </FavButton>
              <CloseButton onClick={onClose}>
                <BsX />
              </CloseButton>
            </HeaderActions>
          </ModalHeader>

          <Content>
            <Section>
              <SectionTitle>Informações Gerais</SectionTitle>
              <InfoGrid>
                {/* ... informações detalhadas */}
              </InfoGrid>
            </Section>

            <Section>
              <SectionTitle>Projeção de Economia</SectionTitle>
              <ChartContainer>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={dadosGrafico}>
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="economia" 
                      stroke={theme.colors.primary.main} 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </Section>

            {/* ... outras seções */}
          </Content>
        </Modal>
      </Overlay>
    </AnimatePresence>
  );
};

// ... styled components

export default DetalhesModal; 