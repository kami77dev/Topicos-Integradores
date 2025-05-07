import {Schema, model} from 'mongoose';

const produtoSchema = new Schema({
    nome:{type:String, required:true},
    preco:{type:Number, required:true, min:0},
    quantidade:{type:Number, required:true, min:0}
}, {timestramps:true});

export const Produto= model('Produto', produtoSchema);


