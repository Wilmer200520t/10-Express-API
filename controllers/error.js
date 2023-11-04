const error404 = (req, res) => {
  res.status(404).json({
      code:404,
      message: "El recurso que estas buscando no existe."
    })
};

export default {
  error404,
};
