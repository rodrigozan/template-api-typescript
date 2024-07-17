import { Router } from 'express';

import UserController from './controllers/UserController';

const router = Router();

const user_Controller = UserController;

router.post('/users', user_Controller.create);
router.get('/users', user_Controller.getAllUsers);
router.get('/users/:id', user_Controller.getUser); 
router.put('/users/:id', user_Controller.update);
router.delete('/users/:id', user_Controller.delete);

export default router;