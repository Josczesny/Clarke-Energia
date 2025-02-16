const fornecedorService = require('./services/fornecedorService');

const resolvers = {
  Query: {
    fornecedores: () => fornecedorService.getAllFornecedores(),
    
    fornecedoresPorConsumo: (_, { consumoMensal }) => {
      try {
        return fornecedorService.getFornecedoresPorConsumo(consumoMensal);
      } catch (error) {
        throw new Error(error.message);
      }
    },
    
    fornecedoresPorEstado: (_, { estado }) => {
      return fornecedorService.getFornecedoresPorEstado(estado);
    },
    
    fornecedoresOrdenados: (_, { criterio, ordem }) => {
      try {
        return fornecedorService.getFornecedoresOrdenados(criterio, ordem);
      } catch (error) {
        throw new Error(error.message);
      }
    }
  }
};

const calcularPontuacaoFornecedor = (fornecedor, cliente) => {
  let pontuacao = 0;
  
  // Verifica limite mínimo
  if (cliente.consumoMensal < fornecedor.limiteMinKwh) {
    return -1; // Desqualifica fornecedor
  }

  // Pontuação por preço (peso: 40%)
  const pontuacaoPreco = calcularPontuacaoPreco(fornecedor, cliente);
  pontuacao += pontuacaoPreco * 0.4;

  // Pontuação por adequação técnica (peso: 30%)
  const pontuacaoTecnica = calcularPontuacaoTecnica(fornecedor, cliente);
  pontuacao += pontuacaoTecnica * 0.3;

  // Pontuação por histórico e confiabilidade (peso: 30%)
  const pontuacaoConfiabilidade = calcularPontuacaoConfiabilidade(fornecedor);
  pontuacao += pontuacaoConfiabilidade * 0.3;

  return pontuacao;
};

const calcularPontuacaoPreco = (fornecedor, cliente) => {
  let pontuacao = 100;

  // Análise do preço base
  const precoBase = fornecedor.custoKwh;
  
  // Ajuste para modalidade tarifária
  if (cliente.modalidadeTarifaria !== 'convencional' && cliente.horarioPonta) {
    const economiaHorarioPonta = (cliente.custoPonta - fornecedor.custoPonta) / cliente.custoPonta;
    pontuacao += economiaHorarioPonta * 20;
  }

  return Math.max(0, Math.min(100, pontuacao));
};

const calcularPontuacaoTecnica = (fornecedor, cliente) => {
  let pontuacao = 100;

  // Verifica compatibilidade de tensão
  if (fornecedor.tensaoAtendimento !== cliente.tensaoFornecimento) {
    pontuacao -= 30;
  }

  // Verifica experiência com classe do consumidor
  if (!fornecedor.classesAtendidas.includes(cliente.classeConsumidor)) {
    pontuacao -= 40;
  }

  // Analisa fator de carga
  if (cliente.fatorCarga) {
    const fatorCargaIdeal = 0.75;
    const diferenca = Math.abs(cliente.fatorCarga - fatorCargaIdeal);
    pontuacao -= diferenca * 20;
  }

  return Math.max(0, pontuacao);
};

const calcularPontuacaoConfiabilidade = (fornecedor) => {
  let pontuacao = 0;

  // Avaliação dos clientes (peso: 40%)
  pontuacao += (fornecedor.avaliacaoMedia / 5) * 40;

  // Base de clientes (peso: 30%)
  const clientesNormalizados = Math.min(fornecedor.totalClientes / 1000, 1);
  pontuacao += clientesNormalizados * 30;

  // Certificações (peso: 30%)
  pontuacao += (fornecedor.certificacoes.length / 3) * 30;

  return pontuacao;
};

module.exports = resolvers; 