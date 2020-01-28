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

}

export default {Functions}