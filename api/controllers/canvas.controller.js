import Canvas from "../models/canvas.model";

const create = (req, res, next) => {
  const canvas = new Canvas(req.body);

  canvas
    .save()
    .then(savedCanvas => res.send(savedCanvas))
    .catch(e => next(e));
};

const list = (req, res, next) => {
  Canvas.find({})
    .then(canvases => res.send(canvases))
    .catch(e => next(e));
};

const update = (req, res, next) => {
  Canvas.findByIdAndUpdate(req.params.id, req.body).then(updatedCanvas =>
    res.send(updatedCanvas)
  );
};

export default {
  create,
  list,
  update
};
