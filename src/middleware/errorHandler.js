function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = status < 500 ? err.message : 'Внутренняя ошибка сервера';
  if (status >= 500) console.error(err);
  res.status(status).json({ error: message });
}

module.exports = errorHandler;
