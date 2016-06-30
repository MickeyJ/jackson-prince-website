
exports.register = function(req, res, next){
  const body = req.body;
  if(!body){
    res.status(422).send({ error: 'Must Provide the Stuff' });
  }
  else if(!body.name){
    res.status(422).send({ error: 'Provide Username' });
  }
  else if(!body.email){
    res.status(422).send({ error: 'Provide Email' });
  }
  else if(!body.password){
    res.status(422).send({ error: 'Provide Password' });
  }
  else
    next();
};

exports.login = function(req, res, next){
  const body = req.body;
  if(!body || !body.email || !body.password){
    res.status(422).send({ error: 'Both fields are required' });
  } else {
    next()
  }
};
