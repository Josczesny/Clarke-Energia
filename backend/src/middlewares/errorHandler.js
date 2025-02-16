const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Dados inválidos',
      details: err.message
    });
  }

  if (err.name === 'GraphQLError') {
    return res.status(400).json({
      error: 'Erro na consulta GraphQL',
      details: err.message
    });
  }

  return res.status(500).json({
    error: 'Erro interno do servidor'
  });
};

module.exports = errorHandler; 