import Lane from "../models/lane.model";

const create = (req, res, next) => {
  const lane = new Lane(req.body);

  lane
    .save()
    .then(savedLane => res.send(savedLane))
    .catch(e => next(e));
};

const remove = (req, res, next) => {
  Lane.remove({ _id: req.params.id })
    .then(() => res.sendStatus(204))
    .catch(e => next(e));
};

const list = (req, res, next) => {
  Lane.find({})
    .then(lanes => res.send(lanes))
    .catch(e => next(e));
};

const update = (req, res, next) => {
  Lane.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedLane => res.send(updatedLane))
    .catch(e => next(e));
};

export default {
  create,
  remove,
  list,
  update
};
