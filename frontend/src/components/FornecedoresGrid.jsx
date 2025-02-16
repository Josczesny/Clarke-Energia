import React from 'react';
import styled from 'styled-components';
import { SkeletonCard } from './SkeletonLoading';
import FornecedorCard from './FornecedorCard';
import { fadeIn } from '../styles/animations';
import { media } from '../styles/breakpoints';

const FornecedoresGrid = ({ loading, fornecedores }) => {
  if (loading) {
    return (
      <Grid aria-busy="true">
        {[1, 2, 3, 4].map(i => (
          <SkeletonCard key={i} aria-hidden="true" />
        ))}
      </Grid>
    );
  }

  return (
    <Grid role="grid">
      {fornecedores.map(fornecedor => (
        <FornecedorCard 
          key={fornecedor.id} 
          fornecedor={fornecedor}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.div`
  display: grid;
  gap: 24px;
  animation: ${fadeIn} 0.5s ease-out;

  ${media.mobile} {
    grid-template-columns: 1fr;
  }

  ${media.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${media.wide} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default FornecedoresGrid; 