import { Document, Schema } from 'mongoose';
import mongo from '../config/mongoConnection';

export interface IPedidoModel extends Document {
    save();

    cliente: string,
    funcionario: string,
    detalhes: string,
    prioridade: string

}

const pedidoSchema: Schema = new Schema({

    cliente: { type: String, require: true },
    funcionario: { type: String, require: true },
    detalhes: { type: String, require: true },
    prioridade: { type: String, require: true }

});


export default mongo.db.model<IPedidoModel>('pedidos', pedidoSchema);