const userUsecase = require('../domain/usecases/user_usecase');

const register = async (req, res) => {
  try {
    const user = await userUsecase.register(req.body);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await userUsecase.login(req.body.email, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized', message: error.message });
  }
};

const getList = async (req, res) => {
  try {
      const users = await userUsecase.getList();
      res.status(200).json(users);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

const getOneByUserId = async (req, res) => {
  try {
      const user = await userUsecase.getOneByUserId(req.params.id);
      res.status(200).json(user);
  } catch (err) {
      res.status(404).json({ error: err.message });
  }
};

const updateOne = async (req, res) => {
  try {
      const updatedUser = await userUsecase.updateOne(req.params.id, req.body);
      res.status(200).json(updatedUser);
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

const deleteOne = async (req, res) => {
  try {
      await userUsecase.deleteOne(req.params.id);
      res.status(204).json();
  } catch (err) {
      res.status(500).json({ error: err.message });
  }
};

module.exports = { register, login, getList, getOneByUserId, updateOne, deleteOne };
