const Pendiente = require("../models/Pendiente.js");

exports.GetPendiente = async (req, res) => {
  const pendiente = await Pendiente.findAll();
  res.send(pendiente);
};

exports.PostPendiente = async (req, res) => {
  const { tarea, descripcion } = req.body;
  console.log(tarea);
  try {
    await Pendiente.create({
      tarea,
      descripcion,
    });
    res.send("Pendiente guardado");
  } catch (e) {
    res.send(e.errors[0].message);
  }
};
