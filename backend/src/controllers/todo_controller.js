const ToDo = require("../models/ToDo");

const create = async (req, res, next) => {
  const toDoProps = req.body;
  res.status(201).send(toDoProps);
};

const get = async (req, res, next) => {
  res.status(200).send("ok");
};

const getById = async (req, res, next) => {
  const toDoId = req.params.id;
  res.status(200).send(toDoId);
};

const edit = async (req, res, next) => {
  const toDoId = req.params.id;
  const toDoProps = req.body;
  res.status(200).send(toDoProps);
};

const deleteToDo = async (req, res, next) => {
  const toDoId = req.params.id;
  res.status(204).send(toDoId);
};

const ToDoController = {
  create,
  get,
  getById,
  edit,
  deleteToDo,
};

module.exports = ToDoController;
