import Person from "../models/lane.model";

const create = (req, res, next) => {
  const person = new Person(req.body);

  person
    .save()
    .then(savedPerson => res.send(savedPerson))
    .catch(e => next(e));
};

const remove = (req, res, next) => {
  Person.remove({ _id: req.params.id })
    .then(() => res.sendStatus(204))
    .catch(e => next(e));
};

const list = (req, res, next) => {
  Person.find({})
    .then(lanes => res.send(lanes))
    .catch(e => next(e));
};

const update = (req, res, next) => {
  Person.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedPerson => res.send(updatedPerson))
    .catch(e => next(e));
};

export default {
  create,
  remove,
  list,
  update
};
