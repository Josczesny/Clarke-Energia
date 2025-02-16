const fornecedores = [
  // Casos reais do site da Clarke
  {
    id: '1',
    nome: 'Samba Hotels',
    logo: '/logos/samba.svg',
    estadoOrigem: 'MG',
    custoKwh: 0.62,
    limiteMinKwh: 3000,
    totalClientes: 1200,
    avaliacaoMedia: 4.8,
    descricao: 'Economia de 38% em quatro meses',
    certificacoes: ['ISO 14001'],
    economiaMedia: '38%',
    tipo: 'Hotelaria'
  },
  {
    id: '2',
    nome: 'Engeplastic',
    logo: '/logos/engeplastic.svg',
    estadoOrigem: 'SP',
    custoKwh: 0.58,
    limiteMinKwh: 10000,
    totalClientes: 800,
    avaliacaoMedia: 4.7,
    descricao: 'R$560 mil de economia em quatro meses',
    certificacoes: ['ISO 50001'],
    economiaMedia: '35%',
    tipo: 'Indústria'
  },
  {
    id: '3',
    nome: 'Nova Aurora',
    logo: '/logos/novaaurora.svg',
    estadoOrigem: 'PR',
    custoKwh: 0.55,
    limiteMinKwh: 5000,
    totalClientes: 1500,
    avaliacaoMedia: 4.9,
    descricao: 'R$212 mil de economia em 3 unidades',
    certificacoes: ['ISO 14001', 'Energia Verde'],
    economiaMedia: '40%',
    tipo: 'Comércio'
  },

  // Fornecedores para residências (100-500 kWh)
  {
    id: '4',
    nome: 'EcoSolar Residencial',
    logo: '/logos/ecosolar.svg',
    estadoOrigem: 'SP',
    custoKwh: 0.65,
    limiteMinKwh: 100,
    totalClientes: 5000,
    avaliacaoMedia: 4.8,
    descricao: 'Energia solar para residências',
    certificacoes: ['Selo Solar'],
    economiaMedia: '33%',
    tipo: 'Residencial'
  },
  // ... continuar com mais fornecedores para cada estado e faixa de consumo
];

// Função para gerar fornecedores para todos os estados
const gerarFornecedoresPorEstado = () => {
  const estados = [
    { uf: 'SP', nome: 'São Paulo' },
    { uf: 'RJ', nome: 'Rio de Janeiro' },
    // ... todos os estados
  ];

  const tiposFornecedor = [
    {
      tipo: 'Residencial',
      minKwh: 100,
      maxKwh: 500,
      custoBase: 0.65,
      descricao: 'Energia para residências'
    },
    {
      tipo: 'Pequeno Comércio',
      minKwh: 501,
      maxKwh: 3000,
      custoBase: 0.60,
      descricao: 'Energia para pequenos negócios'
    },
    {
      tipo: 'Média Empresa',
      minKwh: 3001,
      maxKwh: 10000,
      custoBase: 0.55,
      descricao: 'Soluções empresariais'
    },
    {
      tipo: 'Grande Empresa',
      minKwh: 10001,
      maxKwh: 50000,
      custoBase: 0.50,
      descricao: 'Energia para grandes empresas'
    },
    {
      tipo: 'Indústria',
      minKwh: 50001,
      maxKwh: null,
      custoBase: 0.45,
      descricao: 'Soluções industriais'
    }
  ];

  // Gerar fornecedores
  let id = fornecedores.length + 1;
  const novosFornecedores = [];

  estados.forEach(estado => {
    tiposFornecedor.forEach(tipo => {
      novosFornecedores.push({
        id: `${id++}`,
        nome: `${tipo.tipo} ${estado.nome}`,
        logo: `/logos/${estado.uf.toLowerCase()}_${tipo.tipo.toLowerCase()}.svg`,
        estadoOrigem: estado.uf,
        custoKwh: tipo.custoBase * (0.9 + Math.random() * 0.2), // Variação de ±10%
        limiteMinKwh: tipo.minKwh,
        totalClientes: Math.floor(1000 + Math.random() * 4000),
        avaliacaoMedia: 4 + Math.random(),
        descricao: `${tipo.descricao} em ${estado.nome}`,
        certificacoes: ['ISO 14001'],
        economiaMedia: `${Math.floor(30 + Math.random() * 15)}%`,
        tipo: tipo.tipo
      });
    });
  });

  return [...fornecedores, ...novosFornecedores];
};

// Gerar lista completa de fornecedores
const todosOsFornecedores = gerarFornecedoresPorEstado();

module.exports = todosOsFornecedores; 