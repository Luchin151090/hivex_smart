import modelColmena from '../models/colmena_model.mjs'



export const createColmenas = async (req,res) => {
    try{
        const newAColmena = req.body;
        const colmenaCreated = await modelColmena.cr
                console.log(apicultorCreated)
        res.status(200).json(apicultorCreated);
    }
    catch(e){
        res.status(500).json({error:e.message})
    }
}
