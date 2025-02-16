export type FiltrosAvancadosProps = {
  filtros: {
    economiaMin: string;
    custoMaximo: string;
    certificacoes: string[];
    tipoEnergia: string;
    avaliacaoMin: string;
    clientesMin: string;
  };
  onChange: (campo: string, valor: any) => void;
  onSalvar: (nome: string, filtros: object) => void;
  onLimpar: () => void;
  filtrosSalvos: Array<{
    id: number;
    nome: string;
    filtros: object;
    dataCriacao: string;
  }>;
  onAplicarFiltroSalvo: (filtro: object) => void;
}; 