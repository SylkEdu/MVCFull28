import { Router } from 'express';
import ctrls from '../Controllers/controller';

const router: Router = Router();

router.post('/createUser', ctrls.createUser);

router.post('/pedidos', ctrls.pedidos);

router.post('/login', ctrls.login);

export default router;