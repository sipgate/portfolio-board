import Canvas from "../models/canvas.model";

const create = (req, res, next) => {
  const canvas = new Canvas(req.body);

  canvas
    .save()
    .then(savedCanvas => res.send(savedCanvas))
    .catch(e => next(e));
};

const remove = (req, res, next) => {
  Canvas.remove({ _id: req.params.id })
    .then(() => res.sendStatus(204))
    .catch(e => next(e));
};

const list = (req, res, next) => {
  Canvas.find({})
    .then(canvases => res.send(canvases))
    .catch(e => next(e));
};

const update = (req, res, next) => {
  Canvas.findByIdAndUpdate(req.params.id, req.body)
    .then(updatedCanvas => res.send(updatedCanvas))
    .catch(e => next(e));
};

export default {
  create,
  remove,
  list,
  update
};
