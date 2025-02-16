const fornecedores = [
  {
    id: '1',
    nome: 'Energia Verde',
    logo: 'https://exemplo.com/logo1.png',
    estadoOrigem: 'SP',
    custoKwh: 0.75,
    limiteMinKwh: 5000,
    totalClientes: 1500,
    avaliacaoMedia: 4.5,
    descricao: 'Energia 100% renovável com foco em sustentabilidade',
    certificacoes: ['ISO 14001', 'Energia Verde']
  },
  {
    id: '2',
    nome: 'Solar Brasil',
    logo: 'https://exemplo.com/logo2.png',
    estadoOrigem: 'MG',
    custoKwh: 0.82,
    limiteMinKwh: 3000,
    totalClientes: 2200,
    avaliacaoMedia: 4.7,
    descricao: 'Especialista em energia solar para empresas',
    certificacoes: ['ISO 9001', 'Selo Solar']
  },
  {
    id: '3',
    nome: 'Energia Econômica',
    logo: 'https://exemplo.com/logo3.png',
    estadoOrigem: 'RJ',
    custoKwh: 0.69,
    limiteMinKwh: 10000,
    totalClientes: 800,
    avaliacaoMedia: 4.2,
    descricao: 'Melhor custo-benefício para grandes consumidores',
    certificacoes: ['ISO 9001']
  },
  {
    id: '4',
    nome: 'Eólica Norte',
    logo: 'https://exemplo.com/logo4.png',
    estadoOrigem: 'CE',
    custoKwh: 0.71,
    limiteMinKwh: 7000,
    totalClientes: 1200,
    avaliacaoMedia: 4.6,
    descricao: 'Energia eólica do nordeste brasileiro',
    certificacoes: ['ISO 14001', 'Energia Limpa']
  }
];

class FornecedorService {
  getAllFornecedores() {
    return fornecedores;
  }

  validateConsumo(consumo) {
    if (typeof consumo !== 'number') {
      throw new Error('Consumo deve ser um número');
    }
    if (consumo <= 0) {
      throw new Error('Consumo deve ser maior que zero');
    }
    if (consumo > 1000000) {
      throw new Error('Consumo muito alto. Entre em contato com nosso suporte');
    }
  }

  getFornecedoresPorConsumo(consumoMensal) {
    this.validateConsumo(consumoMensal);
    return fornecedores.filter(f => consumoMensal >= f.limiteMinKwh);
  }

  getFornecedoresPorEstado(estado) {
    return fornecedores.filter(f => f.estadoOrigem === estado.toUpperCase());
  }

  getFornecedoresOrdenados(criterio = 'custoKwh', ordem = 'asc') {
    const criteriosValidos = ['custoKwh', 'avaliacaoMedia', 'totalClientes'];
    
    if (!criteriosValidos.includes(criterio)) {
      throw new Error('Critério de ordenação inválido');
    }

    return [...fornecedores].sort((a, b) => {
      return ordem === 'asc' 
        ? a[criterio] - b[criterio]
        : b[criterio] - a[criterio];
    });
  }
}

module.exports = new FornecedorService(); 