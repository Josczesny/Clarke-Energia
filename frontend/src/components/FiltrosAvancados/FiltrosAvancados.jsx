import React, { useState } from 'react';

const FiltrosAvancados = ({ onFiltrar }) => {
  const [filtros, setFiltros] = useState({
    estado: '',
    precoMin: '',
    precoMax: '',
    certificacoes: [],
    tamanhoEmpresa: ''
  });

  const handleFiltroChange = (e) => {
    const { name, value } = e.target;
    setFiltros(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Aplica filtros automaticamente
    onFiltrar({
      ...filtros,
      [name]: value
    });
  };

  return (
    <div className="filtros-avancados">
      <select 
        name="estado" 
        value={filtros.estado}
        onChange={handleFiltroChange}
      >
        <option value="">Todos os Estados</option>
        {/* Lista de estados */}
      </select>

      <div className="preco-range">
        <input
          type="number"
          name="precoMin"
          placeholder="Preço Mínimo"
          value={filtros.precoMin}
          onChange={handleFiltroChange}
        />
        <input
          type="number"
          name="precoMax"
          placeholder="Preço Máximo"
          value={filtros.precoMax}
          onChange={handleFiltroChange}
        />
      </div>

      {/* Outros filtros */}
    </div>
  );
};

export default FiltrosAvancados;