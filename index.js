exports.helloWorld = (req, res) => {
  let message = req.query.message || req.body.message || 'Hello World! V8';
  res.status(200).send(message);
};
