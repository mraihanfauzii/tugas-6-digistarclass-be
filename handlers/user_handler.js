const userUsecase = require('../domain/usecases/user_usecase');

const register = async (req, res) => {
  try {
    const user = await userUsecase.register(req.body);
    res.status(201).json({ statusCode: res.statusCode, message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ statusCode: res.statusCode, message: 'Failed to register user', message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const token = await userUsecase.login(req.body.email, req.body.password);
    res.json({ statusCode: res.statusCode, message: 'Login successful', token });
  } catch (error) {
    res.status(401).json({ statusCode: res.statusCode, error: 'Unauthorized', message: error.message });
  }
};

const getList = async (req, res) => {
  try {
      const users = await userUsecase.getList();
      res.status(200).json({ statusCode: res.statusCode, message: 'User list retrieved successfully', users});
  } catch (err) {
      res.status(500).json({ statusCode: res.statusCode, message: 'Failed to retrieve user list', error: err.message });
  }
};

const getOneByUserId = async (req, res) => {
  try {
      const user = await userUsecase.getOneByUserId(req.params.id);
      res.status(200).json({ statusCode: res.statusCode, message: 'User retrieved successfully', user});
  } catch (err) {
      res.status(404).json({ statusCode: res.statusCode, message: 'User not found', error: err.message });
  }
};

const updateOne = async (req, res) => {
  try {
    const updatedUser = await userUsecase.updateOne(req.params.id, req.body);
    res.status(200).json({ statusCode: res.statusCode, message: "User updated successfully", updatedUser });
} catch (err) {
    res.status(500).json({ statusCode: res.statusCode, message: 'Failed to update user', error: err.message });
}
};

const deleteOne = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userUsecase.deleteOne(userId);
    if (!deletedUser) {
      return res.status(404).json({ statusCode: res.statusCode, message: 'User not found' });
    }
    res.status(200).json({ statusCode: res.statusCode, message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ statusCode: res.statusCode, message: 'Failed to delete user', message: error.message });
  }
};

module.exports = { register, login, getList, getOneByUserId, updateOne, deleteOne };
