exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World! V4';
  res.status(200).send(message);
};
