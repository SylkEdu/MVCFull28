import { Request, Response, NextFunction} from 'express'
import pgFunc from './pgController'
import mgFunc from './mgController'


async function createUser(req: Request, res: Response, next: NextFunction){
    try {
        const createUser = await pgFunc.Functions.createUser(req.body);
        res.status(200).json(createUser);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function login(req: Request, res: Response, next: NextFunction){
    try {
        const login = await pgFunc.Functions.login(req.body);
        res.status(200).json(login);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

async function pedidos(req: Request, res: Response, next: NextFunction){
    try {
        const user = await pgFunc.Functions.getUserByEmail(req.body.email);
        const func = await pgFunc.Functions.getUserByEmail(req.body.func);
        
        let pedido = {
            cliente:user[0].email,
            funcionario:func[0].email,
            detalhes:req.body.desc,
            prioridade: req.body.urgencia
        }

        await mgFunc.Functions.createPedido(pedido)

        res.status(200).json(pedido);
    } catch (error) {
        res.status(400).json(error.message);
    }
}


export default {createUser, pedidos, login}