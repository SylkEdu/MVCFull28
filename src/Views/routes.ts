import { Router } from 'express';
import ctrls from '../Controllers/controller';

const router: Router = Router();

router.post('/createUser', ctrls.createUser);

router.post('/pedidos', ctrls.pedidos);

router.get('/selectUsers', ctrls.selectUsers);

router.post('/login', ctrls.login);

router.get('/selectPedidos',ctrls.selectPedidos)

export default router;