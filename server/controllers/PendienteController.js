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

exports.DeletePendiente = async (req, res) => {
  const iCount = await Pendiente.count();
  try {
    await Pendiente.destroy({ where: { _id: req.params.id } });
    const uCount = await Pendiente.count();
    if (uCount >= iCount) {
      res.send("No se pudo eliminar el pendiente");
    }else{
      res.send("Pendiente eliminado");
    }
  } catch (e) {
    res.send("No se pudo eliminar el pendiente");
  }
};
