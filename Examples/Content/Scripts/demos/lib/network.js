let _ = require('lodash')
let convnetjs = require('convnetjs')

function network(opts,d,classes,...h) {    
    let layer_defs = [
        {type:'input', out_sx:1, out_sy:1, out_depth:d},
        ...(h.map(h => ({type:'fc', num_neurons:h, activation:'relu'}))),        
        {type:'softmax', num_classes:classes}
    ]
    let net = new convnetjs.Net()
    net.makeLayers(layer_defs)

    let trainer = new convnetjs.SGDTrainer(net, _.extend({
        learning_rate:0.01,
        batch_size:16,
        l2_decay:0.001, 
        l1_decay:0.001
    },opts))
    function X(x) {
        return new convnetjs.Vol(x)
    }
    
    return {
        predict: x => {
            return net.forward(X(x)).w[1]
        },
        train: (x,y) => trainer.train(X(x),y).loss,
        activations: () => _.range(h.length+1).map(h => (h+1)*2).map(index => {
            let layer = net.layers[index]
            let d = layer.out_act.depth
            return _.range(d).map(c => layer.out_act.get(0,0,c))
        }),
        fromJSON: (json) => net.fromJSON(json),
        toJSON: () => net.toJSON()
    }
}

module.exports = network