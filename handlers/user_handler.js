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

module.exports = { register, login };
