const Worker = require('../models/main/worker');

async function getWorker(req,res) {
    try{
        const worker = await Worker.find();
        res.json(worker);        
    }
    catch(err){
        res.status(500).send('Internal Server Error');        
    }
}

async function createWorker(req,res) {
    try{
        const worker = new Worker(req.body);
        res.json(worker);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}
async function updateWorker(req,res){
    try{
        const worker = await Worker.findByIdAndUpdate(req.params.id,req.body, {new : true} );
        res.json(worker);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
async function activateWorker(req,res) {
    try{
        const worker = await Worker.findByIdAndUpdate(req.params.id,{isActive : req.body.isActive}, {new : true} );
        res.json(worker);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getWorker,
    createWorker,
    updateWorker,
    activateWorker
}
