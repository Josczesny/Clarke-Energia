import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  :root {
    background-color: ${({ theme }) => theme.colors.background.main} !important;
  }

  html {
    background-color: ${({ theme }) => theme.colors.background.main} !important;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: ${({ theme }) => theme.typography.fontFamily};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.colors.background.main} !important;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  #root {
    min-height: 100vh;
    background-color: ${({ theme }) => theme.colors.background.main} !important;
    display: flex;
    flex-direction: column;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }

  input, select {
    font-family: inherit;
    color: inherit;
    background-color: ${({ theme }) => theme.colors.background.alt};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  // Remover alertas padrão do navegador
  dialog {
    display: none;
  }

  // Forçar o fundo escuro em elementos específicos
  .MuiPaper-root, 
  .MuiCard-root, 
  .MuiDialog-paper {
    background-color: ${({ theme }) => theme.colors.background.card} !important;
  }

  // Garantir que o fundo escuro seja aplicado mesmo com scroll
  #__next {
    background-color: ${({ theme }) => theme.colors.background.main} !important;
    min-height: 100vh;
  }
`;

export default GlobalStyle; 