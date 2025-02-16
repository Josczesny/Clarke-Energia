import React from 'react';
import styled from 'styled-components';
import { BsStar, BsStarFill } from 'react-icons/bs';

const ListView = ({ fornecedores, onFavoritar, favoritos }) => (
  <Container>
    {fornecedores.map(fornecedor => (
      <ListItem key={fornecedor.id}>
        <LogoContainer>
          <Logo src={fornecedor.logo} alt={fornecedor.nome} />
        </LogoContainer>
        <Info>
          <HeaderInfo>
            <Nome>{fornecedor.nome}</Nome>
            <FavButton 
              onClick={() => onFavoritar(fornecedor.id)}
              $isFavorito={favoritos.includes(fornecedor.id)}
            >
              {favoritos.includes(fornecedor.id) ? <BsStarFill /> : <BsStar />}
            </FavButton>
          </HeaderInfo>
          <Descricao>{fornecedor.descricao}</Descricao>
          <Tags>
            {fornecedor.tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
        </Info>
        <Dados>
          <DadoItem>
            <Label>Custo kWh</Label>
            <Value>R$ {fornecedor.custoKwh.toFixed(2)}</Value>
          </DadoItem>
          <DadoItem>
            <Label>Economia</Label>
            <Value highlight>{fornecedor.economia}%</Value>
          </DadoItem>
          <DadoItem>
            <Label>Limite Mínimo</Label>
            <Value>{fornecedor.limiteMinKwh.toLocaleString()} kWh</Value>
          </DadoItem>
          <DadoItem>
            <Label>Avaliação</Label>
            <Value>{fornecedor.avaliacaoMedia.toFixed(1)}/5.0</Value>
          </DadoItem>
        </Dados>
        <Actions>
          <CompararButton>Comparar</CompararButton>
          <DetalhesButton>Ver Detalhes</DetalhesButton>
        </Actions>
      </ListItem>
    ))}
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.div`
  display: grid;
  grid-template-columns: auto 2fr 2fr auto;
  gap: 1.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.md};
    transform: translateY(-2px);
  }
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1.5rem;
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Nome = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
`;

const FavButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  color: ${({ $isFavorito }) => ($isFavorito ? '#ffd700' : '#ccc')};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ $isFavorito }) => ($isFavorito ? '#ffc700' : '#aaa')};
  }
`;

const Descricao = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Tags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.span`
  padding: 0.2rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.background.tag};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.tag};
`;

const Dados = styled.div`
  display: flex;
  gap: 1rem;
`;

const DadoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const Label = styled.span`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const Value = styled.span`
  font-size: 1rem;
  font-weight: ${({ highlight }) => (highlight ? '600' : '400')};
  color: ${({ theme }) => theme.colors.text.primary};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const CompararButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background.button};
  border: none;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};
  }
`;

const DetalhesButton = styled.button`
  background-color: ${({ theme }) => theme.colors.background.button};
  border: none;
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.primary};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.buttonHover};
  }
`; 