import Stream from "../models/stream.model";

const create = (req, res, next) => {
  const lane = new Stream(req.body);

  lane
    .save()
    .then(savedLane => res.send(savedLane))
    .catch(e => next(e));
};

const remove = (req, res, next) => {
  Stream.remove({ _id: req.params.id })
    .then(() => res.sendStatus(204))
    .catch(e => next(e));
};

const list = (req, res, next) => {
  Stream.find({})
    .then(lanes => res.send(lanes))
    .catch(e => next(e));
};

const update = (req, res, next) => {
  Stream.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedLane => res.send(updatedLane))
    .catch(e => next(e));
};

export default {
  create,
  remove,
  list,
  update
};
