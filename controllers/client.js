const Client = require('../models/client');

async function getClient(req,res) {
    try{
        const client = await Client.find();
        res.json(client);        
    }
    catch(err){
        res.status(500).send('Internal Server Error');        
    }
}

async function createClient(req,res) {
    try{
        const client = new Client(req.body);
        res.json(client);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}
async function updateClient(req,res){
    try{
        const client = await Client.findByIdAndUpdate(req.params.id,req.body, {new : true} );
        res.json(client);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}
async function activateClient(req,res) {
    try{
        const Client = await Client.findByIdAndUpdate(req.params.id,{isActive : req.body.isActive}, {new : true} );
        res.json(Client);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}



module.exports = {
    getClient,
    createClient,
    updateClient,
    activateClient
}
