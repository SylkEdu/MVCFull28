import PedidoModel, { IPedidoModel } from '../Models/pedidoModelMG'
import pedidoModelMG from '../Models/pedidoModelMG'

const  Functions:any = {

    async createPedido(body:any): Promise<any>{
        try {
            const pedido: IPedidoModel = new pedidoModelMG(body)
            pedido.save()
        } catch (error) {
            return error
        }
    },

    async selectPedidos(): Promise<any>{
        try {
            const query: IPedidoModel = await pedidoModelMG.find();
            return query
        } catch (error) {
            return error
        }
    },

}

export default {Functions}